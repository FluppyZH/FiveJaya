export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center z-[9999] transition-opacity duration-500">
      <div className="text-center animate-pulse">
        <h1 className="text-5xl font-extrabold text-white">
          E-LearnQU!
        </h1>
        <p className="text-blue-400 mt-2">
          Loading Sedang Menata Masa Depanmu...
        </p>
      </div>
    </div>
  );
}