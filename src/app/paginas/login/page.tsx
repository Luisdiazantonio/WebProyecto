'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../Estilos/estilo.css'; // Importar el CSS desde la ruta correspondiente

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Envío al endpoint ficticio, reemplaza por tu lógica real consulta a la api para comprobar 
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push('/dashboard'); // Redirigir después del login
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="container">
      <h2>// Examenes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="> usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="> contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{'>'} Entrar</button>
      </form>
    </div>
  );
}
