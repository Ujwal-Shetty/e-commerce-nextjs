import CategoryNav from '@/components/CategoryNav';
import ListingItem from '@/components/ListingItem';
import React from 'react'

async function page({params}:{params:any}) {

    const fetchData=async()=>{
        try{
          const response=await fetch(`http://localhost:8090/api/category/${params.id}`)
          if(!response.ok){
            throw new Error("failed to fetch catrgory data")
          }
          return await response.json()
         
    
        }catch(err){
           console.log(err)
        }
      };

      const categoryData=await fetchData()
      console.log( categoryData)

  return (
    <div className='sm:pt-20 pt-3'>
        <div className='pr-2 pl-2'>
        <CategoryNav/>
        </div>
        <div className=' flex flex-wrap  p-2 gap-2 w-full '>
        {categoryData.products.map(
        (res:any)=>(
          <ListingItem key={res.id} listing={res}/>
        )
      )

      }
        </div>
        
        page
    </div>
  )
}

export default page