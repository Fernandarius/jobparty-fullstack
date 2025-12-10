import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hireSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = hireSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    const event = await prisma.event.findUnique({ where: { id: parsed.data.eventId } });
    if (!event) return NextResponse.json({ error: "Evento no encontrado" }, { status: 404 });
    const hire = await prisma.hire.create({
      data: {
        eventId: parsed.data.eventId,
        workerId: parsed.data.workerId,
        hostId: event.hostId,
        message: parsed.data.message,
      },
    });
    return NextResponse.json({ hire });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
