//@ts-nocheck
import prisma from '@/prisma/prismadb'
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';



export async function POST(request:any,{ params }:{params:any}){
    try{
        const session=await getServerSession(authOptions)
        console.log(session)

        await connectToDatabase();
        
     
           const user = await prisma.user.findUnique({
              where:{
                id:session?.user.id
              },
              include:{
                cart:true
              }
           })
           console.log(user.cart)

           if(user.cart.length === 0){
            const cart = await prisma.cart.create({
                data:{
                   user:{
                       connect:{
                           id:session.user.id
                       }
                   }
   
                }
           });
           return NextResponse.json(cart)

           }
           else{
            return NextResponse.json('cart already exists')
           }


 
       
    }catch(error){
        console.log(error)
    }
}