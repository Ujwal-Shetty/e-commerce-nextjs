//@ts-nocheck
import { getServerSession } from 'next-auth';

import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import CartItem from '@/components/CartItem';

async function Cart() {
   
const session=await getServerSession(authOptions)

const getCart=async()=>{
  try{
    const response=await fetch(`http://localhost:8090/api/cart/${session?.user.id}`)
    if(!response.ok){
      throw new Error("failed to fetch catrgory data")
    }
    return await response.json()
   

  }catch(err){
     console.log(err)
  }
}

const categoryData=await getCart()
console.log( categoryData.cartItem)
  return (
    <div>
           {categoryData.cartItem.map(
        (res:any)=>(
         
          <CartItem key={res.product.id} listing={res.product} />
         
          
        )
      )

      }
    </div>
  )
}
export default Cart