import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/lib/validations";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = registerSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }
    const { email, password, role, ...rest } = parsed.data;
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "El email ya está registrado" }, { status: 400 });
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        role,
        name: rest.name,
        lastName: rest.lastName,
        phone: rest.phone,
        workerProfile:
          role === "worker"
            ? {
                create: {
                  age: rest.age ?? 18,
                  experience: rest.experience ?? 0,
                  skills: rest.skills ?? [],
                  pricePerHour: rest.pricePerHour ?? 0,
                  bio: rest.bio ?? "",
                  images: rest.images ?? [],
                },
              }
            : undefined,
      },
    });
    return NextResponse.json({ id: user.id, email: user.email });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
