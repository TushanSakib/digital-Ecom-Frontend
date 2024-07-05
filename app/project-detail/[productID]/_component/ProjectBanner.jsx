import Image from 'next/image';
import React from 'react'; 
function ProjectBanner({ product }) {
  const imageUrl = product?.attributes?.banner?.data?.attributes?.url;
  const fullImageUrl = imageUrl ? `http://127.0.0.1:1337${imageUrl}` : '/next.svg';

  return (
    <div>
      {product? <Image src={fullImageUrl} alt="product-image" 
      width={350}
      height={100} /> :

      <div className='h-[350px] w-[350px] bg-slate-200
       animate-pulse '>
      </div>
      }
    </div>
  );
}

export default ProjectBanner;
