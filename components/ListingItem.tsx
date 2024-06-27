import Link from 'next/link'
import React from 'react'

function ListingItem({ listing }:{listing:any}) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-[46%] sm:w-[250px] sm:h-auto h-72'>
     <Link href={`/product/${listing.id}`}>
      <img
          src={
            listing.productImage[0] ||
            'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
          }
          alt='listing cover'
          className='h-[210px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.name}
          </p>
          <p className='text-xl text-gray-600 line-clamp-2'>
            ${listing.regularPrice}
          </p>

        </div>
        </Link>
    </div>
  )
}

export default ListingItem