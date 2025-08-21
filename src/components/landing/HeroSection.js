export default function HeroSection() {
  return (
    <section className="h-screen flex background-image">
      <div className="m-auto">
        <h2 className="text-center text-2xl mb-5">E-LearnQU</h2>
        <h1 className="text-center text-4xl sm:text-6xl font-extrabold text-text-primary tracking-tight">
          Tingkatkan ilmu pengetahuan untuk bekal masa depan
          <span className="text-blue-600">.</span>
        </h1>
        <div className="text-center">
          <button className="px-5 py-2.5 border-2 border-white mt-5 hover:bg-white hover:text-black">
            Tentang E-LearnQU
          </button>
        </div>
      </div>
    </section>
  );
}
