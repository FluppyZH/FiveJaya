import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialSection() {
  const testimonials = [
    { 
      name: "Julianto Adi Prasetia", 
      major: "STEI-K, ITB 2026", 
      quote: "Materi penalaran matematika di E-LearnQU! benar-benar bikin saya tau tipe soal utbknya. Pembahasannya juga cukup membantu saya memahami pola soalnya.",
      avatarUrl: "/avatars/julian.png"
    },
    { 
      name: "Fatihul Ihsan Ramadhan", 
      major: "Teknik Informatika, ITS 2026", 
      quote: "Materi materinya okelah dan semoga kedepannya banyak yang tau bahwa E-LearnQU! ini bisa menjadi penopang ke perguruan tinggi",
      avatarUrl: "/avatars/fatih.jpg"
    },
    { 
      name: "Danawendra Girinanda", 
      major: "Ilmu Komputer, UI 2026", 
      quote: "Awalnya saya benci matematika, tapi cara E-LearnQU! menyajikan materi membuat semuanya jadi lebih mudah dicerna. Terima kasih sudah mengantarkan saya ke kampus impian.",
      avatarUrl: "/avatars/dana.jpg"
    },
  ];

  return (
    <section id="testimoni" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Kisah Sukses dari Para Pejuang PTN
          </h2>
          <p className="text-gray-400 mt-2">
            Mereka sudah membuktikannya. Sekarang giliranmu!
          </p>
        </div>
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col md:flex-row items-center bg-slate-800 p-8 rounded-lg border border-slate-700 gap-6
                ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative w-48 h-48 flex-shrink-0">

                <Image 
                  src={testimonial.avatarUrl} 
                  alt={`Foto ${testimonial.name}`}
                  width={160}
                  height={160}
                  className="rounded-full object-cover relative z-10 mx-auto shadow-lg"
                />
              </div>

              <div className={`text-center ${index % 2 === 1 ? "md:text-right" : "md:text-left"}`}>
                <blockquote className="text-gray-300 italic mb-4 text-lg">
                  "{testimonial.quote}"
                </blockquote>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-blue-400 font-semibold">{testimonial.major}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
