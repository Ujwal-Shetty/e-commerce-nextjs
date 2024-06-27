"use client"

import axios from 'axios'
import { error } from 'console'
import React, { useState } from 'react'

function BottomBar({id}:{id:any}) {
  const [disableBtn,setDisableBtn]=useState(false)
  console.log(id)
  const proId=id
  console.log(proId)
 
  const handleAddtoCart=()=>{
     axios.post('/api/cart')
     .then((res) => {
      
      console.log(res)
    }).catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      axios.post('/api/cartItem',id)
      .then((res) => {
       
       console.log(res)
       
 
     })

    })
     

  }

  return (
    <div className="h-20 w-full fixed bottom-0  sm:hidden flex bg-white  justify-center border-t-2">
     <div className='flex text-xl items-center justify-around w-full'>
       <button 
      
       className=' bg-white text-black p-3 pr-6 pl-6 rounded-full border-2 border-black cursor-pointer'
       onClick={handleAddtoCart}>
        <p >Add to cart</p>
       </button>
       <div className='bg-black text-white p-3 pr-10 pl-10 rounded-full border-2 border-black'>
         <p>Buy now</p>
       </div>
       </div>
    </div>
  )
}

export default BottomBar