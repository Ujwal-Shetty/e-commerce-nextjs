import AddtoCart from '@/components/AddtoCart';
import BottomBar from '@/components/BottomBar';
import React from 'react'


async function Product({params}:{params:any}) {
    console.log(params)


    const getProductdata =async ()=>{
        try {
        
       const res = await fetch(`http://localhost:8090/api/products/${params.id}`, {
       cache: "no-store",
                 });
                 if (!res.ok) {
                  throw new Error("Failed to fetch product");
                  }
         console.log(res)
         return await res.json()
         
         } catch (error) {
          
         console.log("Error loading product: ", error);
         }
         
      }
 const productInfo=await getProductdata()

 console.log(productInfo.id)
   
 const renderStockMessage=()=>{
   if(productInfo.intentoryQuantity==0){
     return <p className='text-red-600'>Out of stock</p>
   }
   else if(productInfo.intentoryQuantity<=5){
    return <p className='text-red-500'>Hurry only {productInfo.intentoryQuantity} left!</p>
   }
   else{
    return <p className='text-green-500'>In stock</p>
   }

 }

  return (
    <div className='flex sm:flex-row flex-col sm:pt-16 pt-3'>
        <div className='sm:w-1/2 w-full sm:h-svh h-full'>
         
           <div className='flex sm:flex-row flex-col sm:h-3/4 h-1/2 p-2'>
              <div className='sm:w-3/4 w-full h-full'>
                <img
                src={productInfo.productImage}
                className='h-full object-cover'
                  />
              </div>
              <div className='w-1/4 flex sm:flex-col flex-row p-2 border-slate-200 border-2'>
                {productInfo.productImage.map(
                 (res:any)=><img src={res}/>
                )}
              </div>

           </div>

          <AddtoCart />

        </div>

        <div className='sm:w-1/2 w-full h-screen p-2 pt-6 flex flex-col gap-4'>
           <div className='font-bold text-2xl line-clamp-3 break-words'>
            {productInfo.name}</div>

            <div className='text-3xl'>
             {productInfo.regularPrice}
            </div>

            <div className='text-lg font-semibold'>
             
             {renderStockMessage()}

             
            </div>

            <div className='text-xl'>
             <p className='text-slate-400'>Product Description:</p>
             {productInfo.description}
            </div>
            


        </div>
        <BottomBar id={productInfo.id}/>
    </div>
  )
}

export default Product