import { useUser } from '@clerk/nextjs';
import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import GlobalApi from '../../../_utils/GlobalApi';
import CartContext from '../../../_context/CartContext';

function ProjectInfo({ product }) {
  const { isSignedIn, user } = useUser(); // Corrected variable names
  const router = useRouter();
  const{cart,setCart} = useContext(CartContext)

  const onAddToCartClick = () => {
    if (!isSignedIn) {
      router.push('/sign-in');
      return;
    } else {
      const data = {
        data: {
            userName:user.fullName,
            email: user?.primaryEmailAddress?.emailAddress,
            products: product?.id,
        },
      }; // Added logging for data

      GlobalApi.addToCart(data)
        .then((resp) => {
          console.log('Add to cart response:', resp); // Added logging for response
          
          if(resp){
          setCart(cart=>[...cart,
            {
              id:resp.data?.id,
              product:product
            }])
          }
        })
        .catch((error) => {
          console.error('Add to cart error:', error); // Changed to console.error for errors
        });
    }
  };

  return (
    <>
      {product ? (
        <div>
          <h2 className='text-[20px]'>{product?.attributes?.title}</h2>
          <div>
            {product?.attributes?.description?.map((child, i) => (
              <div key={i}>
                {child.children.map((item, index) => (
                  <p key={index} className='text-[15px] text-gray-500'>{item.text}</p>
                ))}
              </div>
            ))}
          </div>
          <h2 className='flex gap-3 mt-5 text-gray-500 text-[13px]'>
            {product?.attributes?.instantDelivery ? (
              <BadgeCheck className='text-green-500 h-5 w-5' />
            ) : (
              <AlertOctagon className='text-yellow-400 h-5 w-5' />
            )}
            Eligible for Instant delivery
          </h2>
          <h2 className='pt-2 font-medium text-[32px] text-primary mt-35'>
            ${product?.attributes?.pricing}
          </h2>
          <button
            className='flex gap-2 p-3 bg-primary text-white transition delay-100 px-10 mt-5 hover:bg-blue-700 hover:scale-75 rounded-lg'
            onClick={onAddToCartClick}
          >
            <ShoppingCart /> Add To Cart
          </button>
        </div>
      ) : (
        <div className='flex flex-col gap-5'>
          <div className='h-[20px] w-[400px] bg-slate-200 animate-pulse'></div>
          <div className='h-[20px] w-[60px] bg-slate-200 animate-pulse'></div>
          <div className='h-[20px] w-[400px] bg-slate-200 animate-pulse'></div>
          <div className='h-[20px] w-[400px] bg-slate-200 animate-pulse'></div>
          <div className='h-[20px] w-[400px] bg-slate-200 animate-pulse'></div>
          <div className='h-[20px] w-[100px] bg-slate-200 animate-pulse'></div>
        </div>
      )}
    </>
  );
}

export default ProjectInfo;
