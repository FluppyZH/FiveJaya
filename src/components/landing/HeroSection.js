import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="h-screen flex background-image text-white">
      
      <motion.div 
        className="m-auto text-center container px-6"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
          variants={itemVariants}
        >
          Tingkatkan ilmu pengetahuan untuk bekal masa depan<span className="text-blue-600">.</span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 max-w-2xl mx-auto text-lg text-gray-200"
          variants={itemVariants}
        >
         "The important thing is not to stop questioning. Curiosity has its own reason for existing." - Albert Einstein
        </motion.p>
        
        <motion.div 
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <Link 
            href="/register" 
            className="bg-blue-600 hover:bg-blue-700 font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105"
          >
            Mulai Belajar Gratis
          </Link>
          <Link 
            href="#kelas" 
            className="bg-slate-700 hover:bg-slate-600 font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105"
          >
            Lihat Kelas
          </Link>
        </motion.div>
      </motion.div>
      
    </section>
  );
}