//@ts-nocheck
'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import {useState ,useRef} from 'react'

function Avatar() {
    
    const[toggleDropDown,setToggleDropDown]=useState(false)
    const menuRef=useRef()
    const imgRef=useRef()
    const { data: session, status } = useSession()
    console.log(session)

    window.addEventListener('click',(e)=>{
        if(e.target !==menuRef.current && e.target !==imgRef.current){
          setToggleDropDown(false)
        }
      })
  return (
    <div className=' flex relative'>
      {session ? (
          <div className='flex'>
          <img
          ref={imgRef}
          onClick={()=>setToggleDropDown((prev)=>!prev)}
          className=' shadow-lg rounded-full h-8 w-8 border-2 border-slate-600 object-cover cursor-pointer hover:opacity-90'
          src={session.user?.avatar}
          alt=''
        />
        {toggleDropDown && (
          <div ref={menuRef} className='absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white border-2 border-slate min-w-[210px] flex flex-col gap-5 justify-center items-center shadow-xl'>
              <img
        
          className='rounded-full h-14 w-14 object-cover'
          src={session.user?.avatar}
          alt=''
        />
            <Link
            href='/'
            className='text-lg text-gray-700 hover:text-gray-500 font-medium'
            onClick={()=>setToggleDropDown(false)}
            >View Profile
            </Link>
            <span className='text-red-700 text-lg'>
             Sign out
            </span>
 
            
 
            </div>
 
            )}
            </div>

      ):(
        <Link href={'/login'}>
        <p>Login</p>
        </Link>
        

      )}
    
    
 
   
     </div>
  )
}

export default Avatar