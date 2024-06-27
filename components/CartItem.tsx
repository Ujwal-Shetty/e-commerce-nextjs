"use client"

import axios from 'axios';
import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { useRouter } from 'next/navigation';

import { FaPlus } from "react-icons/fa6";
import Link from 'next/link';

function CartItem({ listing }:{listing:any}) {
    const[quantityValue,setQauantityvalue]=useState(1)
    console.log(quantityValue)
    const router=useRouter()

    const total=(listing.regularPrice)*quantityValue
    console.log(total)

    const handleIncrement = () =>{
        setQauantityvalue(
         quantityValue + 1
        )}
  
     const handleDecrement = () =>{
      if(quantityValue>=2)
        setQauantityvalue(
          quantityValue - 1
        )
    }  
  return (
    <div className='w-full flex flex-col gap-3 p-3'>
    <Link href={`/product/${listing.id}`}>
      <div className='flex justify-start items-center gap-3 w-full hover:bg-slate-300 hover:rounded-xl'>
        <img className='rounded-lg h-20 w-20  object-cover cursor-pointer hover:opacity-90'
         src={listing.productImage}
         alt=''
         />
        <p className='font-semibold text-xl truncate'>{listing.name}</p>
        
     </div>
     </Link>

     <div className='flex gap-5 w-full  justify-between'>
     <div className='flex'>
        <div className='flex justify-center items-center mr-3 sm:text-lg text-sm'>Quantity:</div>
       
                                
         <FaPlus
                onClick={handleIncrement}                 
          className='border-2 text-center text-black bg-white w-full h-full p-2 rounded-l-full cursor-pointer hover:bg-slate-900 hover:text-white'/>
            <input
            value={quantityValue}
                min={0}
                type='number'
                id='intentoryQuantity'
                className='border-2 text-black w-12 outline-none  text-center h-12'
                 />
              <FaMinus
              onClick={handleDecrement}
              className=' border-2 text-center text-black bg-white w-full h-full  p-2 rounded-r-full cursor-pointer hover:bg-slate-900 hover:text-white '/>
                
              </div>

              <div className='flex justify-center items-center sm:gap-3 gap-2 sm:text-lg text-sm '>
                <p className=''>Total price:</p>
                <p className='font-semibold'>₹ {total}</p>
            </div> 
              
                            
    </div>
        
    </div>
  )
}

export default CartItem