//@ts-nocheck
import Link from 'next/link'
import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import Avatar from './Avatar';
import { IoMdNotificationsOutline } from "react-icons/io"
import SearchBar from './SearchBar';

export default function Navbar() {

  return (
    <header className='w-full flex gap-5  bg-white p-3 fixed top-0'>
      <Link href={'/'}>
      <div className='' >
      <h1 className=' ml-3 w-auto  h-12 flex justify-center  items-center cursor-pointer text-2xl font-bold'>
         <span className='text-red-300'>ECommerce</span>
         <span className='text-slate-500'>Site</span>
        </h1>
      </div>
      </Link>
     
      <div className='flex justify-end gap-7 sm:gap-10 items-center w-full'> 
        <div className='sm:block hidden'>
        <SearchBar/></div> 
      
         <button>
         <IoMdNotificationsOutline className='text-2xl'/>
         </button>
         <Link href='/cart'>
         <div className='flex gap-2'>
         <HiOutlineShoppingCart className='text-2xl' /><p className='sm:block hidden'>Cart</p>
         </div>
         </Link>
          <Avatar/>
      </div>
      
    </header>
  )
}
