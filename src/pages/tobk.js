import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { soalPM } from '/src/data/soalData';

export default function TOBKPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); 
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    if (isTimerActive && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeRemaining === 0 && !isTestFinished) {
      handleFinishTest();
    }
  }, [timeRemaining, isTimerActive, isTestFinished]);

  const handleAnswerChange = (e) => {
    const newAnswers = { ...answers, [currentQuestion]: e.target.value };
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < soalPM.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScoreAndDetails = () => {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let rawScore = 0;
    soalPM.forEach((soal, index) => {
      if (answers[index] === soal.answer) {
        correctAnswers += 1;
        rawScore += 4; 
      } else if (answers[index]) {
        incorrectAnswers += 1;
        rawScore -= 1;
      }
    });
    const maxRawScore = soalPM.length * 4;
    const minRawScore = soalPM.length * -1; 
    const scoreRange = maxRawScore - minRawScore;

    const scaledScore = ((rawScore - minRawScore) / scoreRange) * 600 + 200;
    
    return { 
      finalScore: scaledScore > 0 ? scaledScore : 200,
      correctAnswers, 
      incorrectAnswers, 
      totalQuestions: soalPM.length 
    };
  };

  const handleFinishTest = async () => {
    if (isSaving) return;
    setIsTimerActive(false);
    setIsSaving(true);
    setSaveMessage('Menyimpan hasil tes...');

    const { finalScore, correctAnswers, incorrectAnswers, totalQuestions } = calculateScoreAndDetails();
    setScore(finalScore);

    const testResult = {
      title: "Simulasi UTBK PM",
      score: finalScore.toFixed(1), 
      date: new Date().toISOString(),
      details: `Benar: ${correctAnswers}, Salah: ${incorrectAnswers}, Tidak Dijawab: ${totalQuestions - correctAnswers - incorrectAnswers}`,
      type: "UTBK_PM",
    };

    try {
      const response = await fetch('/api/user/hasilto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testResult),
      });

      const data = await response.json();

      if (response.ok) {
        setSaveMessage('Hasil tes berhasil disimpan!');
      } else {
        setSaveMessage(`Gagal menyimpan hasil: ${data.message || 'Terjadi kesalahan'}`);
      }
    } catch (error) {
      console.error('Error saving test result:', error);
      setSaveMessage('Gagal menyimpan hasil tes karena masalah koneksi.');
    } finally {
      setIsSaving(false);
      setIsTestFinished(true);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (isTestFinished) {
    const { correctAnswers, incorrectAnswers, totalQuestions } = calculateScoreAndDetails();
    return (
      <div className="bg-slate-900 text-white min-h-screen p-8">
        <Head>
          <title>Hasil UTBK PM | E-LearnQU</title>
        </Head>
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold text-white mb-4">Hasil Simulasi UTBK PM</h1>
          <p className="text-2xl mb-2">Skor Anda: <span className="text-green-400 font-bold">{score.toFixed(1)}</span></p>
          <p className="text-md text-slate-400 mb-8">
            Benar: {correctAnswers}, Salah: {incorrectAnswers}, Tidak Dijawab: {totalQuestions - correctAnswers - incorrectAnswers}
          </p>

          {saveMessage && (
            <div className={`mb-4 p-3 rounded-lg ${saveMessage.includes('berhasil') ? 'bg-green-700' : 'bg-red-700'} text-white`}>
              {saveMessage}
            </div>
          )}

          <div className="space-y-6">
            {soalPM.map((soal, index) => (
              <div key={soal.id} className="bg-slate-800 p-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold mb-2">Soal {index + 1}</p>
                <p className="text-slate-300 mb-4">{soal.question}</p>
                <p>Jawaban Anda: <span className={answers[index] === soal.answer ? 'text-green-400' : (answers[index] ? 'text-red-400' : 'text-yellow-400')}>{answers[index] || "Tidak Dijawab"}</span></p>
                <p>Jawaban Benar: <span className="text-green-400 font-bold">{soal.answer}</span></p>
                <p className="mt-2 text-sm text-slate-400">Penjelasan: {soal.explanation}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center">
              &larr; Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentSoal = soalPM[currentQuestion];

  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <Head>
        <title>Simulasi UTBK PM | E-LearnQU</title>
      </Head>
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Simulasi UTBK PM</h1>
          <div className="text-lg font-mono text-red-400 bg-slate-800 py-2 px-4 rounded-lg">
            Sisa Waktu: {formatTime(timeRemaining)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3 bg-slate-800 p-8 rounded-lg shadow-md">
            <div className="text-xl mb-4 font-semibold">
              Soal {currentQuestion + 1} / {soalPM.length}
            </div>
            <div className="prose prose-invert text-lg text-slate-300">
              <p>{currentSoal.question}</p>
              <div className="space-y-4 mt-6">
                {currentSoal.options.map((option, index) => (
                  <label key={index} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value={option}
                      checked={answers[currentQuestion] === option}
                      onChange={handleAnswerChange}
                      className="form-radio text-blue-500 h-5 w-5"
                    />
                    <span className="ml-3 text-slate-200">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-1 bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 border-b border-slate-700 pb-2">Navigasi Soal</h3>
            <div className="grid grid-cols-5 gap-2">
              {soalPM.map((soal, index) => (
                <button
                  key={soal.id}
                  onClick={() => setCurrentQuestion(index)}
                  className={`py-2 px-1 text-center rounded-md font-semibold text-sm
                    ${currentQuestion === index ? 'bg-blue-500 text-white' : 'bg-slate-700 hover:bg-slate-600 text-slate-200'}
                    ${answers[index] ? 'border-2 border-green-500' : ''}
                  `}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="mt-8">
              <button
                onClick={handleFinishTest}
                disabled={isSaving}
                className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? 'Menyimpan...' : 'Selesai Ujian'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0 || isSaving}
            className="bg-slate-700 text-white py-2 px-6 rounded-lg hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &larr; Sebelumnya
          </button>
          <button
            onClick={handleNextQuestion}
            disabled={currentQuestion === soalPM.length - 1 || isSaving}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Selanjutnya &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}