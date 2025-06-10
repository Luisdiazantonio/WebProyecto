'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoPersonSharp, IoLockClosed, IoLogIn } from 'react-icons/io5';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch('http://localhost:3000/apilocal/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      cache: 'no-store',
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-[#00ffcc] font-mono">
      <div className="bg-[#111] p-8 rounded-xl shadow-lg border border-[#00ffcc33] w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">SPM</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center bg-black border border-[#00ffcc55] rounded-md px-3 py-2">
            <IoPersonSharp className="mr-2" />
            <input
              type="text"
              name="username"
              placeholder="> usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-black outline-none text-[#00ffcc] w-full"
            />
          </div>
          <div className="flex items-center bg-black border border-[#00ffcc55] rounded-md px-3 py-2">
            <IoLockClosed className="mr-2" />
            <input
              type="password"
              name="password"
              placeholder="> contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-black outline-none text-[#00ffcc] w-full"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full bg-[#00ffcc] text-black font-bold py-2 rounded-md hover:bg-[#00e6b8] transition"
          >
            <IoLogIn className="mr-2 text-3xl" /> {'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}