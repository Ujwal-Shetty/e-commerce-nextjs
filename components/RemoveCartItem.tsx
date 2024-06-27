"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

function RemoveCartItem({id}:{id:any}) {
    console.log(id)
    const router=useRouter()
    const removeCartItem=async()=>{
        const confirmed = confirm("Are you sure?");
        if (confirmed) {
            axios
            .delete(`/api/cartItem/${id}`)
            .then((res) => {
              router.refresh();
              
            })
            .catch((err) => {
              alert("This category contains products, Delete the products to continue")
            })
           
        }
    }
  return (
    <div className='p-3 w-full flex justify-end '>
         <button
         onClick={removeCartItem}
         className='hover:bg-red-400 p-4 pt-2 pb-2 rounded-full text-white bg-red-500'>
            
        Remove
    </button>
    </div>
   
  )
}

export default RemoveCartItem