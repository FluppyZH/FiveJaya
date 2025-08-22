export default function CoursePreviewSection() {
  const courses = [
    { title: "Simulasi CBT Ujian", category: "Ujian & Tes", description: "Uji kesiapan Anda dengan simulasi ujian berbasis komputer (CBT) yang realistis." },
    { title: "Materi MTK Jenjang SMA", category: "Matematika", description: "Kuasai seluruh kurikulum matematika SMA, mulai dari aljabar hingga kalkulus." },
    { title: "Simulasi ToBK Penalaran Matematika", category: "SNBT", description: "Asah kemampuan penalaran matematis Anda khusus untuk menghadapi Tes Potensi Skolastik (TPS) SNBT." },
  ];
  return (
    <section id="kelas" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Mulai Petualangan Belajarmu</h2>
          <p className="text-gray-400 mt-2">Pilih menu yang akan membawamu selangkah lebih dekat ke kampus impian.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-6">
                <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase mb-3">{course.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 text-base">{course.description}</p>
                <button className="mt-5 text-blue-400 font-semibold hover:text-blue-300">
                  Selengkapnya →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}