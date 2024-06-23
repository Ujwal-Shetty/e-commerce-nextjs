import Link from 'next/link';
import React from 'react'

const getCategoryList =async ()=>{
   try {
   const res = await fetch("http://localhost:8090/api/category", {
   cache: "no-store",
             });
             if (!res.ok) {
              throw new Error("Failed to fetch categories");
              }
   
     return await res.json()
     
     } catch (error) {
      
     console.log("Error loading categories: ", error);
     }
     
  }

async function CategoryNav() {

    const {category}=await getCategoryList()

  return (
    <div className='h-16 w-full flex gap-3 overflow-x-auto'>
       {
        category.map(
            (res:any)=>(<Link href={`/category/${res.id}`}><div className='flex bg-slate-700 text-white rounded-full h-12 items-center pl-4 pr-4'>{res.name}</div></Link>)
        )
       }
    </div>
  )
}

export default CategoryNav