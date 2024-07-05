"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'

function ProductSection() {

    const[productList,setProductList] = useState([])

    useEffect(()=>{
        getLatestProducts()
    },[])

    const getLatestProducts = ()=>{
        GlobalApi.getLatestProduct().then(resp=>{
            console.log(resp.data.data)
            setProductList(resp.data.data)
        })
    }
  return productList&&(
    <div className='md:px-20 sm:px-10' id='product-list'>
        <h2 className='font-bold text-[20px] my-3'>Brand New Products</h2>
        <ProductList productList={productList} />
    </div>
  )
}

export default ProductSection