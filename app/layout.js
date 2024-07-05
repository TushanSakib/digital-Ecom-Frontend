// app/layout.js
"use client"
import React, { useState } from 'react';
import Header from './_components/Header';
import Footer from './_components/Footer';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import CartContext from './_context/CartContext'


export default function RootLayout({ children }) {
  const[cart,setCart] = useState([])
  return (
    
    <html lang="en">
      <body>
      <ClerkProvider>
        <CartContext.Provider value={{cart,setCart}}>
        <Header section1={`#section1`} />
        <main>{children}</main>
        <Footer />
        </CartContext.Provider>
        </ClerkProvider>
      </body>
    </html>
  );
}
