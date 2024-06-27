//@ts-nocheck
import prisma from '@/prisma/prismadb'
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function POST(request:any,{ params }:{params:any}){
    try{
        const session=await getServerSession(authOptions)

        await connectToDatabase();
        
        const user = await prisma.user.findUnique({
           where:{
             id:session?.user.id
           },
           include:{
             cart:true
           }
        })

        const [cartId]= user.cart.map(res=>res.id)

        const cart=await prisma.cart.findUnique({
            where:{
                id:cartId
              },
              include:{
                cartItem:true
              }
        })
       

      const res= cart.cartItem.map(res=>res.productId)
      

      

       const proId=await request.json();
      

       if(res.includes(proId)){
        return NextResponse.json('Item already exists in cart')
       }
       else{
         await prisma.cartItem.create({
            data:{
               product:{
                   connect:{
                       id:proId
                   }
               },
               cart:{
                   connect:{
                       id:cartId
                   }
               },
               

            }
       });
        
       return NextResponse.json('Item Added to cart')

       }
        
    }catch(error){

    }
}