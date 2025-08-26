import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function FeaturedPost() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleRegisterRedirect = (e) => {
    e.preventDefault();
    if (email) {
      router.push(`/register?email=${email}`);
    } else {
      router.push('/register');
    }
  };

  return (
    <motion.div 
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden mb-8 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image 
        src="/avatars/banner.jpg" 
        alt="Banner E-LearnQU"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        priority
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center px-4 sm:px-6">
        <motion.div
          className="flex flex-col items-center text-center gap-6 w-full max-w-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Tingkatkan ilmu pengetahuan untuk bekal <br className="hidden sm:block" /> masa depan
          </h1>

          <form 
            onSubmit={handleRegisterRedirect}
            className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mt-4"
          >
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email anda..." 
              className="flex-1 w-full px-5 py-3 rounded-full text-slate-900 bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors text-sm sm:text-base"
            />
            <button 
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex-shrink-0"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}