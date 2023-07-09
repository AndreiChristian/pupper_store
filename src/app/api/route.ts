import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.order.count();

  console.log("Hitting this api");

  return NextResponse.json({ data });
}
