import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    { title: "ToBK Subtes Penalaran Matematika", description: "Memahami asar soal utbk untuk persiapan kedepan." },
    { title: "Simulasi Ujian Melalui CBT", description: "Berlatih di bawah tekanan waktu dengan sistem penilaian otomatis." },
    { title: "Pembahasan Mendalam", description: "Pahami setiap langkah penyelesaian soal." },
    { title: "Lacak Progres Belajar", description: "Pantau perkembanganmu melalui dashboard personal." },
  ];
  return (
    <motion.section 
      id="fitur" 
      className="py-20 bg-slate-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Semua yang Kamu Butuhkan untuk Sukses</h2>
          <p className="text-gray-400 mt-2">Fitur-fitur unggulan yang dirancang khusus untukmu.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-800 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}