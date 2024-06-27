//@ts-nocheck
import prisma from "@/prisma/prismadb";
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';


export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    console.log(id)
    const catId=parseInt(id)
    await connectToDatabase();
    const category = await prisma.category.findUnique({
        where: {
            id:catId
        },
        include:{products:true}

        
    });

    if(!category) {
        return NextResponse.json(
            {message: " not found", err},
            {status: 404}
        )
    }

    return NextResponse.json(category);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};


