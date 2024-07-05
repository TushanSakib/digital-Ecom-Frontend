"use client"
import BreadCrump from '../../../app/_components/BreadCrump'
import GlobalApi from '../../_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import ProjectBanner from './_component/ProjectBanner'
import ProjectInfo from './_component/ProjectInfo'
import ProductList from '../../_components/ProductList'
import { usePathname } from 'next/navigation'

const ProjectDetails = ({params}) => {
    const path = usePathname()
    const [productDetail,setProductDetail] = useState()
    const[productList,setProductList] = useState([])

    useEffect(()=>{
        getProductById()
    },[params.projectID])

    const getProductById = ()=>{
        GlobalApi.getProductById(params?.productID).then(resp=>{
            console.log(resp.data.data)
            const product = resp.data.data
            setProductDetail(product)
            getProductListByCategory(product)
        })
    }

    const getProductListByCategory = (product)=>{
      GlobalApi.getProductListByCategory(product?.attributes?.category?.data?.id).then(resp=>{
        console.log(resp.data.data)
        setProductList(resp.data.data)
      })
    }

    {/*
      const getProductListByCategory = (product) => {
      const productCategory = product?.attributes?.category.data?.attributes?.Name

      GlobalApi.getProductListByCategory(productCategory).then(resp => {
          const filteredProduct = resp.data.data[0].attributes?.products?.data.map(item => {
              return item
          })
          console.log(filteredProduct)
          setProductList(filteredProduct)
      })
  }
      
      */}
    
  return (
    <div className='p-5 py-13 px-10 md:px-28'>
      <BreadCrump path={path}/>

      <div className='grid grid-cols-1 sm:grid-cols-2 
       mt-10 gap-5 sm:gap-2'>
        <ProjectBanner product={productDetail} />
        <ProjectInfo product={productDetail} />
      </div>

    {productList&& <div className='mt-7'>
      <h2 className='font-medium text-[25px] p-3 '>Similar Projects</h2>
      <ProductList productList={productList} />
      </div>}  

    </div>
  )
}

export default ProjectDetails