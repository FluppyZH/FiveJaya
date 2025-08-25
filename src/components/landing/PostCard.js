import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PostCard({ post }) {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row items-center gap-6 group"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <Link href={post.href} className="flex-shrink-0 w-full sm:w-48 h-32 relative rounded-lg overflow-hidden">
        <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300"/>
      </Link>
      <div className="flex-grow">
        <span className="inline-block bg-slate-700 text-blue-400 text-xs font-semibold px-2 py-1 rounded-md uppercase mb-2">
          {post.category}
        </span>
        <Link href={post.href}>
          <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-400 text-sm mt-1">{post.excerpt}</p>
        <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <img src={post.author.imageUrl} alt={post.author.name} className="w-6 h-6 rounded-full" />
            <span>{post.author.name}</span>
          </div>
          <span>•</span>
          <span>{post.views}x dilihat</span>
        </div>
      </div>
    </motion.div>
  );
}