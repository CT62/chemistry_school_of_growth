import { NextResponse } from "next/server";
import prisma from '../prisma/client'

export async function POST(req: Request){
  const request = await req.json();
  const courseId = await prisma.user.findFirst({
    where:{
      email: request.email
    }
  })

  return NextResponse.json(courseId?.id);
}
