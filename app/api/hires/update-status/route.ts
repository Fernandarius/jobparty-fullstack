import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hireStatusSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const statusParse = hireStatusSchema.safeParse(body.status);
  if (!statusParse.success) return NextResponse.json({ error: "Estado inválido" }, { status: 400 });
  const hire = await prisma.hire.update({
    where: { id: body.id },
    data: { status: statusParse.data },
  });
  return NextResponse.json({ hire });
}
