import React from 'react'
import Link from 'next/link'

const ToggleSection = () => {
  return (
    <>
    <div className='grid gap-2 '>
    <div className='bg-gray-100 rounded-md shadow-md'>
       <h2 className="font-medium text-[13px] text-center"><Link href="#about-us">About Us</Link></h2>
    </div>
    <div className='bg-gray-100 rounded-md shadow-md grid '>
       <h2 className="font-medium text-[13px] text-center"><Link href="#product-list">Products</Link></h2>
    </div>
    <div className='bg-gray-100 rounded-md shadow-md grid'>
       <h2 className="font-medium text-[13px] text-center"><Link href="#contact-us">Contact Us</Link></h2>
    </div>
    </div>
    
    </>
  )
}

export default ToggleSection
