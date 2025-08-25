import Head from 'next/head';
import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { useState } from 'react';
import Link from 'next/link'; 
import { useRouter } from 'next/router';

const TestResultCard = ({ title, score, date, details }) => (
  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex flex-col">
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    
    <div className="flex items-start justify-between gap-4 mb-4">
      <div className="text-left flex-shrink-0">
        <p className="text-5xl font-extrabold text-blue-400 leading-none">{parseFloat(score).toFixed(1)}</p>
        <p className="text-xs text-gray-400 mt-1">Skor Terakhir</p>
      </div>
      <div className="text-right text-sm text-gray-300 border-l border-slate-600 pl-4 flex-grow-0">
        <p><strong>Tanggal Tes:</strong> {new Date(date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
        <p className="mt-1"><strong>Detail:</strong> {details}</p>
      </div>
    </div>

    <Link href="/tobk" className="mt-auto w-full bg-slate-700 hover:bg-slate-600 font-semibold py-2 rounded-lg transition-colors text-white text-center">
      Ulangi ToBK
    </Link>
  </div>
);

const EditProfileSection = ({ user }) => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleProfileUpdate(event) {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('/api/user/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setIsLoading(false);

    if (response.ok) {
      setMessage({ type: 'success', text: result.message });
    } else {
      setMessage({ type: 'error', text: result.message });
    }
  }

  return (
    <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 h-full">
      <h2 className="text-2xl font-bold text-white mb-6">Edit Profil</h2>
      <form onSubmit={handleProfileUpdate} className="space-y-6">
        <div className="flex items-center space-x-6">
          <img src={user.avatarUrl || "/avatars/default.jpg"} alt="Profile picture" className="w-24 h-24 rounded-full object-cover"/>
        </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">Username</label>
          <input type="text" name="username" id="username" defaultValue={user.username || ''} className="w-full px-4 py-2 bg-slate-900 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label htmlFor="school" className="block text-sm font-medium text-gray-300 mb-1">Asal Sekolah</label>
          <input type="text" name="school" id="school" defaultValue={user.school || ''} className="w-full px-4 py-2 bg-slate-900 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label htmlFor="level" className="block text-sm font-medium text-gray-300 mb-1">Jenjang</label>
          <select name="level" id="level" defaultValue={user.level || 'SMA'} className="w-full px-4 py-2 bg-slate-900 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>SMA</option>
            <option>SMK</option>
            <option>Gap Year</option>
            <option>Lainnya</option>
          </select>
        </div>
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-1">Bio</label>
          <textarea id="bio" name="bio" rows={3} className="w-full px-4 py-2 bg-slate-900 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue={user.bio || ''}/>
        </div>
        <div className="flex justify-end items-center gap-4 pt-2">
          {message && <p className={`text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{message.text}</p>}
          <button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg disabled:bg-blue-400">
            {isLoading ? 'Menyimpan...' : 'Simpan'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default function DashboardPage({ user }) {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.replace('/'); 
  }

  const userTestResults = user.testResults || [];

  return (
    <>
      <Head>
        <title>Dashboard Pengguna E-LearnQU!</title>
      </Head>
      <div className="text-white p-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center">
            &larr; Kembali ke Beranda
          </Link>
          <button 
            onClick={handleLogout} 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-8">Selamat Datang Kembali, <span className="text-blue-400">{user.username || user.fullname || 'Pengguna'}!</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Progres Belajar Bersama E-LearnQU!</h3>
            {userTestResults.length > 0 ? (
              userTestResults
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((result) => (
                  <TestResultCard 
                    key={result._id} 
                    title={result.title}
                    score={result.score}
                    date={result.date}
                    details={result.details}
                  />
                ))
            ) : (
              <p className="text-slate-400">Belum ada hasil tes yang tercatat.</p>
            )}
          </div>
          <div>
            <EditProfileSection user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const token = context.req.cookies.authToken;
    if (!token) { return { redirect: { destination: '/login', permanent: false } }; }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const client = await clientPromise;
    const db = client.db("elearnqu_user");

    const user = await db.collection('users').findOne(
      { _id: new ObjectId(decoded.userId) },
      { projection: { _id: 1, testResults: 1, username: 1, fullname: 1, school: 1, level: 1, bio: 1, avatarUrl: 1 } }
    );
    
    if (!user) { return { redirect: { destination: '/login', permanent: false } }; }

    const serializableUser = {
      ...user,
      _id: user._id.toString(),
      createdAt: user.createdAt ? user.createdAt.toISOString() : null,
      testResults: user.testResults ? user.testResults.map(result => ({
        ...result,
        _id: result._id.toString(),
        date: result.date.toISOString(),
      })) : [],
    };

    return { props: { user: serializableUser } };
  } catch (error) {
    console.error('Error in getServerSideProps on DashboardPage:', error);
    return { redirect: { destination: '/login', permanent: false } };
  }
}
