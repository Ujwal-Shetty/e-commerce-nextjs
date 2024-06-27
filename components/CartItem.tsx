import React from 'react'
import { FaMinus } from "react-icons/fa";

import { FaPlus } from "react-icons/fa6";

function CartItem({ listing }:{listing:any}) {
  return (
    <div className='flex '>
      <div className='flex'>
        <img className='rounded-full h-8 w-8  object-cover cursor-pointer hover:opacity-90'
         src={listing.productImage}
         alt=''
         />
        
      </div>

      <div>
         <p>{listing.name}</p>
     </div>

     <div>
     <div className='flex p-2 '>
                                 
        <FaPlus
                                 
          className='border-2 text-center text-black bg-white w-full h-full p-2 rounded-l-full cursor-pointer hover:bg-slate-900 hover:text-white'/>
            <input
                min={0}
                type='number'
                id='intentoryQuantity'
                className='border-2 text-black w-12 outline-none  text-center h-8'
                 />
              <FaMinus

              className=' border-2 text-center text-black bg-white w-full h-full  p-2 rounded-r-full cursor-pointer hover:bg-slate-900 hover:text-white '/>
              </div>   
                            
    </div>
        <div>

        </div>
    </div>
  )
}

export default CartItem