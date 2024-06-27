//@ts-nocheck
import prisma from '@/prisma/prismadb'
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';



export async function GET() {
    try{
        await connectToDatabase();
        const products = await prisma.product.findMany()
          
        return NextResponse.json({ products });
    }catch(error){
        console.log(error)
    }
    }