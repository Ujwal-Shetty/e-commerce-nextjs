//@ts-nocheck
import prisma from "@/prisma/prismadb";
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';



export const DELETE = async (request,{ params }) => {
    try {
      const { id } = params;
      
      const cartItemId=parseInt(id)

      await connectToDatabase();
   
      
      await prisma.cartItem.delete({
          where: {
              id:cartItemId
          }

      });
  
      return NextResponse.json("Cart item has been deleted");
    } catch (err) {
      return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
    }
  };