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

 console.log(productInfo)

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

           <div className='sm:flex sm:flex-row hidden justify-center items-center p-2  gap-2'>
            <div className='w-full bg-white rounded-full text-black text-center p-3 text-xl hover:bg-white hover:border-2 hover:border-slate-500 hover:text-slate-500 border-2 border-black'>
                <button>
                    Add to cart
                </button>
            </div>
            <div  className='w-full bg-black rounded-full text-white text-center p-3 text-xl hover:bg-slate-700 hover:border-2 hover:border-slate-700 border-2 border-black'>
                <button>
                  Buy now
                </button>
            </div>
           </div>
        </div>

        <div className='sm:w-1/2 w-full h-screen p-2 pt-6 flex flex-col gap-4'>
           <div className='font-bold text-2xl line-clamp-3 break-words'>
            {productInfo.name}</div>

            <div className='text-3xl'>
             {productInfo.regularPrice}
            </div>

            <div className='text-xl'>
             <p className='text-slate-400'>Product Description:</p>
             {productInfo.description}
            </div>


        </div>
        <BottomBar/>
    </div>
  )
}

export default Product