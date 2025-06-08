import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Titles from './Titles';
import ProductsItem from './ProductsItem';

const BestSeller = () => {

    const {products} =useContext(ShopContext);
    const [bestSeller,setBestSeller]=useState([]);
    useEffect(()=>{
     const bestProduct=products.filter((item)=>(item.bestseller));
     setBestSeller(bestProduct.slice(0,5));
    },[])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Titles text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas, atque saepe autem et laudantium quia explicabo voluptatum suscipit alias minus corporis nihil accusamus mollitia cumque repudiandae. Tenetur, nostrum quisquam!
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            bestSeller.map((item,index)=>(
                <ProductsItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/> 
            ))
        }
      </div>

    </div>
  )
}

export default BestSeller
