import React, { useContext } from 'react';
import CartContext from '../_context/CartContext';

const Cart = () => {
  const {cart,setCart} = useContext(CartContext)
  

  return (
    <div className='h-[300px] w-[250px] bg-gray-100 z-10 rounded-md
     absolute mx-10 right-10 top-12 p-5 
     border shadow-sm overflow-auto sm:absolute  sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:top-12 '>
       <div className="mt-4 space-y-6">
    <ul className="space-y-4">
      {cart.map((item,index)=>{
        const imageUrl = item?.product?.attributes?.banner?.data.attributes?.url;
        const fullImageUrl = imageUrl ?`http://127.0.0.1:1337${imageUrl}`:'/next.svg' ;
        
        return (
        <li key={index} className="flex items-center gap-4">
         <img
          src={fullImageUrl}
          alt=""
          className="size-16 rounded object-cover"
        />
      

        <div>
          <h3 className="text-sm text-gray-900 line-clamp-1"> {item?.product?.attributes?.title}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">

            <div>
              <dt className="inline">Price:</dt>
              <dd className="inline">${item?.product?.attributes?.pricing}</dd>
            </div>
          </dl>
        </div>
      </li>
        )
})}
      
    </ul>
    <div className="space-y-4 text-center">
      
      <a
        href="/cart"
        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
      >
        View my cart ({cart?.length})
      </a>

      <a
        href="#"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </a>
    </div>
    </div>
    </div>
  );
};

export default Cart;