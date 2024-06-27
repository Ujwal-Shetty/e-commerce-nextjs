//@ts-nocheck
import prisma from '@/prisma/prismadb'
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';
import Product from '@/app/product/[id]/page';


export async function GET(request:any,{ params }:{params:any}){
    try{
        
        const { id } = params;
        const Id=parseInt(id)
        await connectToDatabase();

        const cart = await prisma.cart.findUnique({
            where:{
              userId:Id
            },
            include:{
              cartItem:{
                include:{product:true}
              }
            }
         })  

         return NextResponse.json(cart)



    }catch(error){
        console.log(error)
    }

}