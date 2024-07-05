import React, { useState } from 'react'
import ProductItem from './ProductItem'
import { ChevronsRight } from 'lucide-react';
function ProductList({productList}) {
  const[showAll,setShowAll] = useState(false)

  const toggleShowAll = ()=>{
    setShowAll(!showAll)
  }

  return (
    <div>
    <div className='grid grid-cols-2 sm:grid-cols-3 
     md:grid-cols-4 gap-3'>
        {productList.map((item,index)=>(
          <div key={index}>
           {!showAll ? index<=3&&<ProductItem product={item}/> : <ProductItem product={item} />}
          </div>
        ))}
    </div>
    <div className='flex mt-4 p-4 gap-2 justify-end items-start'>
    <button 
        onClick={toggleShowAll} 
        className=' relative '>
        {showAll ? 'Show Less' : 'Show All'}
      </button>
      <ChevronsRight/>
      </div>
    </div>
  )
}

export default ProductList