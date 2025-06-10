import pool from '@/app/database';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Falta el ID del usuario' }, { status: 400 });
    }

    await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);

    return NextResponse.json({ message: 'Usuario eliminado correctamente' });
  } catch (error: any) {
    console.error('Error al eliminar usuario:', error);
    return NextResponse.json(
      { error: 'Error en la eliminación', details: error.message },
      { status: 500 }
    );
  }
}
