import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { eventSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = eventSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    const event = await prisma.event.create({
      data: {
        hostId: body.hostId,
        title: parsed.data.title,
        description: parsed.data.description,
        date: new Date(parsed.data.date),
        address: parsed.data.address,
        eventType: parsed.data.eventType,
        requiredStaff: parsed.data.requiredStaff,
        budget: parsed.data.budget,
      },
    });
    return NextResponse.json({ event });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
