import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { username } = req.query;

    if (!username) {
      return res.status(400).json({ message: 'Username tidak boleh kosong.' });
    }

    const client = await clientPromise;
    const db = client.db("elearnqu_user");

    const user = await db.collection('users').findOne(
      { username: username },
      { 
        projection: { 
          password: 0,
          email: 0,
        } 
      }
    );

    if (!user) {
      return res.status(404).json({ message: `Pengguna dengan username '${username}' tidak ditemukan.` });
    }

    res.status(200).json(user);

  } catch (error) {
    console.error('Error in get-user API:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
  }
}