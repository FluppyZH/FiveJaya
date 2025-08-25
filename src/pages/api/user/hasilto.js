import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const token = req.cookies.authToken;
    if (!token) {
      return res.status(401).json({ message: 'Silahkan login/membuat akun terlebih dahulu' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const client = await clientPromise;
    const db = client.db("elearnqu_user");

    const { title, score, date, details, type } = req.body;

    if (!title || !score || !date || !details || !type) {
      return res.status(400).json({ message: 'Data hasil tes tidak lengkap.' });
    }

    const newTestResult = {
      _id: new ObjectId(),
      title,
      score: parseFloat(score),
      date: new Date(date),
      details,
      type,
    };

    const result = await db.collection('users').updateOne(
      { _id: new ObjectId(userId) },
      { $push: { testResults: newTestResult } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
    }

    res.status(200).json({ message: 'Hasil tes berhasil disimpan!', result: newTestResult });

  } catch (error) {
    console.error('API Error saving test result:', error);
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Token tidak valid.' });
    }
    res.status(500).json({ message: 'Terjadi kesalahan server saat menyimpan hasil tes.' });
  }
}