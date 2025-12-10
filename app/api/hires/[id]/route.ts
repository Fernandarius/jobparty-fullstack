import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params { params: { id: string } }

export async function GET(_: Request, { params }: Params) {
  const hire = await prisma.hire.findUnique({ where: { id: params.id } });
  if (!hire) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  return NextResponse.json({ hire });
}
