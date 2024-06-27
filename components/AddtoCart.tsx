"use client"
import React from 'react'

function AddtoCart() {

    const handleAddToCart =()=>{
       
    }

  return (
    <div className='sm:flex sm:flex-row hidden justify-center items-center p-2  gap-2'>
    <div className='w-full bg-white rounded-full text-black text-center p-3 text-xl hover:bg-white hover:border-2 hover:border-slate-500 hover:text-slate-500 border-2 border-black'>
        <button onClick={handleAddToCart}>
            Add to cart
        </button>
    </div>
    <div  className='w-full bg-black rounded-full text-white text-center p-3 text-xl hover:bg-slate-700 hover:border-2 hover:border-slate-700 border-2 border-black'>
        <button>
          Buy now
        </button>
    </div>
    
   </div>
  )
}

export default AddtoCart