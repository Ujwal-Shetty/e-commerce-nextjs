//@ts-nocheck
import CategoryNav from '@/components/CategoryNav';
import ListingItem from '@/components/ListingItem';
import React from 'react'

const getProductsList =async ()=>{
  try {
  const res = await fetch("http://localhost:8090/api/products", {
  cache: "no-store",
            });
            if (!res.ok) {
             throw new Error("Failed to fetch categories");
             }
   console.log(res)
    return await res.json()
    
    } catch (error) {
     
    console.log("Error loading categories: ", error);
    }
    
 }


async function Home() {
  const {products}=await getProductsList()
  console.log(products)



  return (
    <div className='sm:pt-20 pt-3'>
      <div className='pr-2 pl-2'>
        <CategoryNav/>
      </div>
      {products.map(

(res:any)=>(

  <ListingItem key={res.id} listing={res}/>
)
)

}
      
      
    </div>
  )
}

export default Home