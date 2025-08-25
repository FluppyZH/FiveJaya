import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FeaturedPost() {
  return (
    <motion.div 
      className="relative w-full h-[600px] overflow-hidden mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image 
        src="/avatars/banner.jpg" 
        layout="fill" 
        objectFit="cover" 
        className="group-hover:scale-105 transition-transform duration-300"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center px-6">
        <motion.div
          className="flex flex-col items-center text-center gap-6 max-w-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white whitespace-nowrap">
            Tingkatkan ilmu pengetahuan untuk bekal <br /> masa depan
          </h1>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <input 
              type="email" 
              placeholder="Masukkan email anda..." 
              className="flex-1 w-full px-6 py-3 rounded-full text-slate-900 bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
            />
            <Link href="/register">
              <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                Submit
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
