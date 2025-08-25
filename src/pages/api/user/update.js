import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const token = req.cookies.authToken;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    
    const { username, bio, school, level } = req.body;

    if (!username || username.trim() === '') {
        return res.status(400).json({ message: 'Username tidak boleh kosong.' });
    }

    const client = await clientPromise;
    const db = client.db("elearnqu_user");
    const usersCollection = db.collection('users');
    
    const existingUser = await usersCollection.findOne({ username: username });

    if (existingUser && existingUser._id.toString() !== userId) {
        return res.status(409).json({ message: 'Username sudah digunakan oleh pengguna lain.' });
    }

    const result = await usersCollection.updateOne(
        { _id: new ObjectId(userId) },
        { $set: { username, bio, school, level } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
    }

    res.status(200).json({ message: 'Profil berhasil diperbarui!' });

  } catch (error) {
    console.error('Error in update-profile API:', error);
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    }
    res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
  }
}