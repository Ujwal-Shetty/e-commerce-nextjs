//@ts-nocheck
import prisma from "@/prisma/prismadb";
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';


export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    const proId=parseInt(id)
    await connectToDatabase();
    const product = await prisma.product.findUnique({
        where: {
            id:proId
        }
    });

    if(!product) {
        return NextResponse.json(
            {message: " not found", err},
            {status: 404}
        )
    }

    return NextResponse.json(product);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};
