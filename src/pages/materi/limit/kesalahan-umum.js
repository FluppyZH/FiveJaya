import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function KesalahanUmumPage() {
  const post = {
    title: "5 Kesalahan Umum saat Mengerjakan Soal Limit",
    imageUrl: "/avatars/limit.png",
    content: `
      <h2>Pengertian Limit</h2>
      <p>Limit adalah konsep fundamental dalam kalkulus yang menggambarkan perilaku suatu fungsi saat variabelnya mendekati suatu titik tertentu. Limit tidak selalu tentang nilai fungsi di titik tersebut, melainkan tentang nilai yang "dituju" oleh fungsi. Pemahaman yang keliru tentang konsep ini sering kali menjadi akar dari banyak kesalahan.</p>
      <p>Dengan mengenali dan menghindari kesalahan-kesalahan berikut, kamu bisa meningkatkan akurasi dan kecepatan dalam mengerjakan soal.</p>
      <ol class="list-decimal list-inside space-y-6 mt-6">
        <li>
          <strong>Tidak Memeriksa Bentuk Tak Tentu</strong>
          <p class="mt-2">Sebelum melakukan operasi apa pun, hal pertama yang harus kamu lakukan adalah substitusi langsung nilai x ke dalam fungsi. Jika hasilnya bukan bentuk tak tentu (seperti 0/0, ∞/∞, ∞-∞, dll.), maka itulah jawabannya. Banyak siswa langsung menggunakan cara lain (seperti Aturan L'Hôpital) padahal tidak diperlukan, yang bisa menyebabkan jawaban salah atau membuang waktu. Jika hasilnya adalah bentuk tak tentu, barulah kamu bisa melangkah ke metode lain seperti faktorisasi, perkalian sekawan, atau Aturan L'Hôpital.</p>
        </li>
        <li>
          <strong>Mengabaikan Faktorisasi</strong>
          <p class="mt-2">Faktorisasi adalah metode paling umum dan efektif untuk menyelesaikan limit dengan bentuk 0/0. Seringkali, penyebab nol di pembilang dan penyebut adalah faktor yang sama yang dapat dicoret. Dengan memfaktorkan persamaan, kamu bisa menghilangkan "pembuat nol" tersebut. Kesalahan umum adalah langsung melompat ke metode yang lebih kompleks seperti Aturan L'Hôpital tanpa mencoba faktorisasi terlebih dahulu, padahal faktorisasi sering kali lebih cepat dan lebih mudah.</p>
        </li>
        <li>
          <strong>Salah Menggunakan Aturan L'Hôpital</strong>
          <p class="mt-2">Aturan ini adalah alat yang sangat kuat, tapi hanya bisa digunakan untuk bentuk tak tentu, yaitu 0/0 atau ∞/∞. Kesalahan terbesar adalah menerapkannya pada limit yang tidak memiliki bentuk tak tentu. Aturan ini mengharuskan kamu menurunkan pembilang dan penyebut secara terpisah. Jika kamu salah menerapkannya, hasil yang didapat pasti keliru. Selalu periksa bentuk limitnya sebelum memutuskan untuk menggunakan Aturan L'Hôpital.</p>
        </li>
        <li>
          <strong>Kesalahan dalam Operasi Aljabar</strong>
          <p class="mt-2">Ini adalah kesalahan dasar yang paling sering terjadi dan tidak berhubungan langsung dengan konsep limit, tapi sangat memengaruhi hasil. Kesalahan-kesalahan seperti salah mengalikan, membagi, atau menyederhanakan pecahan sering kali terjadi karena terburu-buru. Pastikan kamu memiliki fondasi aljabar yang kuat, karena limit pada dasarnya adalah aplikasi aljabar yang rumit.</p>
        </li>
        <li>
          <strong>Tidak Memahami Konsep Limit dari Kiri dan Kanan</strong>
          <p class="mt-2">Untuk suatu limit ada, nilai limit dari sisi kiri dan kanan harus sama. Kesalahan ini sering terjadi pada fungsi bertingkat atau fungsi yang memiliki diskontinuitas. Mengabaikan konsep ini bisa membuatmu salah dalam menentukan apakah suatu limit benar-benar ada atau tidak ada. Pastikan kamu selalu memeriksa kedua sisi jika fungsi memiliki definisi yang berbeda di sekitar titik yang didekati.</p>
        </li>
      </ol>
    `,
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Head>
        <title>{post.title} | E-LearnQU</title>
      </Head>
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center">
            &larr; Kembali ke Beranda
          </Link>
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4">
          {post.title}
        </h1>

        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8">
          <Image 
            src={post.imageUrl} 
            alt={post.title} 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
          />
        </div>

        <div className="prose prose-invert text-lg text-slate-300">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
}