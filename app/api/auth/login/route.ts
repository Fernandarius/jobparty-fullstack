import { NextResponse } from "next/server";
import { loginSchema } from "@/lib/validations";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = loginSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }
    const user = await prisma.user.findUnique({ where: { email: parsed.data.email } });
    if (!user) return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    const valid = await bcrypt.compare(parsed.data.password, user.password);
    if (!valid) return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
