
import prisma from '@/prisma/prismadb'
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';



export async function GET() {
    try{
        await connectToDatabase();
        const category = await prisma.category.findMany()
          console.log(category)
        return NextResponse.json({ category });
    }catch(error){
        console.log(error)
    }
    }
    

    