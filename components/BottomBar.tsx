import React from 'react'

function BottomBar() {
  return (
    <div className="h-20 w-full fixed bottom-0  sm:hidden flex bg-white  justify-center border-t-2">
     <div className='flex text-xl items-center justify-around w-full'>
       <div className='bg-white text-black p-3 pr-6 pl-6 rounded-full border-2 border-black'>
        <p>Add to cart</p>
       </div>
       <div className='bg-black text-white p-3 pr-10 pl-10 rounded-full border-2 border-black'>
         <p>Buy now</p>
       </div>
       </div>
    </div>
  )
}

export default BottomBar