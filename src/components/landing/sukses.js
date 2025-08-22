import { motion } from 'framer-motion';

export default function SuksesMAS() {
  const steps = [
    { number: "01", title: "Pilih Materi", description: "Jelajahi modul dan simulasi ujian yang sesuai dengan kebutuhanmu." },
    { number: "02", title: "Belajar Serius", description: "Pahami konsep materi atau ujian yang tersedia di E-LearnQU!." },
    { number: "03", title: "Lihat Hasil & Progres", description: "Analisis kekuatan dan kelemahanmu melalui laporan detail di dashboard pribadimu." },
  ];
  return (
    <motion.section 
      id="cara-kerja" 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Belajar Semudah 1-2-3</h2>
          <p className="text-gray-400 mt-2">Ikuti tiga langkah sederhana untuk memulai perjalanan suksesmu.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2"></div>
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-800 p-8 rounded-lg z-10 border border-slate-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl font-extrabold text-blue-400 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}