import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  await prisma.event.delete({ where: { id: body.id } });
  return NextResponse.json({ success: true });
}
