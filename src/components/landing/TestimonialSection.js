export default function TestimonialSection() {
  const testimonials = [
    { name: "Julianto Adi Prasetia", role: "STEI-K ITB 2026", quote: "saya gabisa berword-word pokoknya E-LearnQU platform terTOP untuk tahun ini, karna banyak yang GRATISSSS" },
    { name: "Fatihul Ihsan Ramadhan", role: "Teknik Informatika ITS 2026", quote: "bener bener mudah dipahami kalo belajar di E-LearnQU, dijamin langsung connect deh" },
    { name: "Danawendra Girinanda", role: "Ilmu Komputer UI 2026", quote: "terkesan banget sama E-LearnQU karna ada simulasi ToBK GRATISSSS, serasa nemu harta karun." },
  ];
  return (
    <section id="testimoni" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Kenalan Sama Alumni E-LearnQU!</h2>
          <p className="text-gray-400 mt-2">Kamu akan menjadi seperti mereka.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg">
              <blockquote className="text-gray-300 italic mb-4 text-lg">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center mt-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}