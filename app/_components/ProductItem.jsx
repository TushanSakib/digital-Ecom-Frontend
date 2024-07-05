import Image from 'next/image'
import React from 'react'
import styles from './styles/ProductImages.module.css'; 
import { SquareChevronRight } from 'lucide-react';
import Link from 'next/link';

const ProductItem = ({product}) => {
    const imageUrl = product?.attributes?.banner?.data.attributes?.url;
    const fullImageUrl = imageUrl ?`http://127.0.0.1:1337${imageUrl}`:'/next.svg' ;
    
    return (
      <>
      <Link href={`/project-detail/${product.id}`}>
    <div className=' shadow-2xl p-1 transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 '>
      <div className={styles.imageContainer}>
      {imageUrl ? (
              <Image src={fullImageUrl} alt="product-image" fill
               className={`${styles.image} rounded-t-lg h-[170px] object-cover`}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            ) : (
              <Image src='./next.svg' alt="product-image" fill
               className={`${styles.image} rounded-t-lg h-[170px] object-cover`}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            )}
      </div>
      <div className='grid grid-cols-1 bg-gray-50'>
      <div className='p-1'>
        <h2 className='text-[14px] font-medium flex gap-2'>
        <SquareChevronRight /> {product.attributes?.title}</h2>
      </div>
      <h2 className='font-medium'> ${product.attributes?.pricing} </h2>
      </div>
    </div>
    </Link>
    </>
  )
}

export default ProductItem
