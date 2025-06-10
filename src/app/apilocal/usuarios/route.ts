import pool from '@/app/database';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;
    console.log("Nombre: %s", username);
    console.log("contraseña: %s", password);

    if (!username || !password) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }

    // Aquí puedes hacer la consulta a la base de datos para verificar usuario y contraseña (idealmente hashed)
    const [rows]: any = await pool.query(
      'SELECT rol FROM usuarios WHERE nombre = ? AND contrasena = ?',
      [username, password]
    );

    if (rows.length === 0) {
    return NextResponse.json({ error: 'Usuario o contraseña incorrectos' }, { status: 401 });
    }

    return NextResponse.json({ rol: rows[0].rol });
  } catch (error: any) {
    console.error('Error en la consulta:', error);
    return NextResponse.json(
      { error: 'Error en la consulta', details: error.message },
      { status: 500 }
    );
  }
}
