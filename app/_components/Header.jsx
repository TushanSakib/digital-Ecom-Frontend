"use client";

import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import logo from '../../public/logo/logoipsum-295.svg';
import { ShoppingCart } from 'lucide-react';
import { UserButton, useUser } from '@clerk/nextjs';
import GlobalApi from '../_utils/GlobalApi';
import Cart from './Cart';
import CartContext from '../_context/CartContext';
import Link from 'next/link';
import ToggleSection from './ToggleSection'

export default function Header({section1}) {
  const { isSignedIn, user } = useUser();
  const [isLoginPage, setIsLoginPage] = useState(false);
  const {cart,setCart} = useContext(CartContext)
  const[openCart,setOpenCart] = useState(false)
  const[toggle,setToggle] = useState(false)

  useEffect(() => {
    const url = window.location.href.toString();
    setIsLoginPage(url.includes('sign-up') || url.includes('sign-in'));
  }, []);

  useEffect(() => {
    if (isSignedIn && user) {
      getCartItems();
    }
  }, [isSignedIn, user]);

  useEffect(()=>{
    openCart==false&&setOpenCart(true)
  },[cart])

  const toggleSection=  ()=>{
    setToggle(!toggle)
  }

  const getCartItems = () => {
    GlobalApi.getUserCartIItem(user?.primaryEmailAddress?.emailAddress)
      .then(resp => {
        const result = resp.data.data 

        result&&result.forEach(prd=>{
          setCart(cart=>[...cart,
            {
              id:prd.id,
              product: prd.attributes.products.data[0]
            }
           ])
        })
        
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  };

  return isSignedIn && (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl shadow-sm items-center gap-8 px-4 sm:px-6 lg:px-8">
      <Link href="/" className="block text-teal-600">
          <Image src={logo} width={50} height={50} alt="logo" priority={true} />
    
      </Link>
        

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" href="/">
                    Home
                </Link>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#">Explore</a>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" href="#product-list">Products</Link>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#about-us">About Us</a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {!isSignedIn ? (
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                  href="/sign-in"
                >
                  Login
                </a>

                <a
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-blue-800 sm:block"
                  href="/sign-up"
                >
                  Register
                </a>
              </div>
            ) : (
              <div className="relative flex gap-3">
                <UserButton />
                <ShoppingCart className="transition ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer" onClick={()=>setOpenCart(!openCart)} />
                <span>({cart.length})</span>
                {openCart && <Cart />}
              </div>
            )}
          </div>
        </div>

        <button
        onClick={toggleSection}
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`block h-[300px] w-[250px] z-10 rounded-md
     absolute mx-10 right-10 top-12 p-5 
     border shadow-sm overflow-auto ${toggle ? 'block' : 'hidden'}`}>
          <ToggleSection/>
        </div>
        
      </div>
    </header>
  );
}
