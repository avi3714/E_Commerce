import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        <div className=''>
            <img className='mb-5 w-32' src={assets.logo} alt=""/>
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, in quibusdam provident quos fugit totam hic! Nihil sequi delectus enim culpa iure accusamus sed itaque! Molestias voluptatem accusamus optio hic!
            </p>
        </div>

        <div className=''>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
       <div>
       <p className='TEXT-XL FONT-MEDIUM MB-5'>GET IN TOUCH</p>
       <ul className='flex flex-col gap-1 text-gray-600'>
        <li>+91 9546669473</li>
        <li>avineetsingh@gmail.com</li>
       </ul>
    </div>
    </div>
    </div>
  )
}

export default Footer
