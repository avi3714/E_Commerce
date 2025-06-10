import React from 'react'
import Titles from '../components/Titles'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Titles  text1={'CONTACT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'> Katras Road Matkuria <br/>Bank More</p>
          <p>Tel:(+91) 954-666-9473 <br/>Email:avineetsingh***@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Xenon</p>
          <p></p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
