//@ts-nocheck
import { getServerSession } from 'next-auth';

import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import CartItem from '@/components/CartItem';
import RemoveCartItem from '@/components/RemoveCartItem';

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
    <div className=' p-3 sm:pt-20 '>
      <div className="flex justify-between items-center">
                    <h1 className="font-bold  text-2xl">Cart</h1>
                </div>

    <div className='flex sm:flex-row flex-col'>
        <div className='sm:w-[60%] w-full flex flex-col gap-3 h-[80%] overflow-auto'>
           {categoryData.cartItem.map(
        (res:any)=>(
         <div className='bg-slate-200 rounded-xl'>
          <CartItem key={res.product.id} listing={res.product}/>
          <RemoveCartItem key={res.id} id={res.id}/>
         </div>
          )  )  }
      </div>

      <div className='sm:w-[40%] w-full'>
        Shipping
      </div>

      </div>
      
    </div>
  )
}
export default Cart