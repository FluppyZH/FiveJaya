import { serialize } from 'cookie';

export default function handler(req, res) {
  const serializedCookie = serialize('authToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: -1,
    path: '/',
  });

  res.setHeader('Set-Cookie', serializedCookie);
  res.status(200).json({ message: 'Logout berhasil.' });
}