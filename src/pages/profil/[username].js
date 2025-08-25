import Head from 'next/head';
import Image from 'next/image';

export default function UserProfilePage({ user, error }) {
  if (error) {
    return (
      <div className="text-center py-20 text-white">
        <Head>
          <title>Pengguna Tidak Ditemukan</title>
        </Head>
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-xl mt-2 text-gray-400">{error}</p>
      </div>
    );
  }

  const joinDate = user.createdAt 
    ? new Date(user.createdAt).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Tanggal tidak diketahui';

  return (
    <>
      <Head>
        <title>{user.fullname} (@{user.username}) - E-LearnQU</title>
      </Head>
      <div className="bg-slate-900 text-white min-h-screen py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-slate-800 rounded-lg p-8 border border-slate-700">
            <div className="flex flex-col items-center text-center">
              <Image 
                src={user.avatarUrl || "/avatars/default.jpg"} 
                alt={`Foto profil ${user.fullname}`}
                width={128}
                height={128}
                className="rounded-full object-cover border-4 border-slate-700"
              />
              <h1 className="text-3xl font-bold mt-4">{user.fullname}</h1>
              <p className="text-lg text-blue-400">@{user.username}</p>
              
              <div className="text-sm text-gray-400 mt-2">
                <span>{user.level || 'Siswa'}</span>
                {user.school && <span> di {user.school}</span>}
              </div>

              <p className="text-gray-300 mt-6 text-base">
                {user.bio || 'Pengguna ini belum menulis bio.'}
              </p>

              <div className="mt-6 text-xs text-gray-500">
                Bergabung pada {joinDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { username } = context.params;

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/user/${username}`;

  try {
    const res = await fetch(apiUrl);
    
    if (!res.ok) {
      const errorData = await res.json();
      return { props: { user: null, error: errorData.message || 'Pengguna Tidak Ditemukan.' } };
    }
    
    const user = await res.json();

    const userSerializable = { ...user, _id: user._id.toString() };

    return {
      props: {
        user: userSerializable,
        error: null,
      },
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return { props: { user: null, error: 'Tidak dapat terhubung ke server.' } };
  }
}