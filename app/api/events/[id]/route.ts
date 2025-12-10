import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params { params: { id: string } }

export async function GET(_: Request, { params }: Params) {
  const event = await prisma.event.findUnique({ where: { id: params.id }, include: { hires: true } });
  if (!event) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  return NextResponse.json({ event });
}
