import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { id, name, lastName, phone } = body;
  const user = await prisma.user.update({
    where: { id },
    data: { name, lastName, phone },
    select: { id: true, name: true, lastName: true, phone: true },
  });
  return NextResponse.json({ user });
}
