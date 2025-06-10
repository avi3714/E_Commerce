import React from 'react'
import Titles from '../components/Titles'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>

        <Titles text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]'src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorem maiores, in iste suscipit iusto culpa minima vero inventore provident rem ad eos quam praesentium minus non, deserunt architecto sequi.           </p>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque necessitatibus, dolore odio tempore sapiente error repudiandae excepturi eveniet officiis commodi cumque deserunt vitae culpa delectus quam, pariatur, sequi libero? Excepturi!</p>
             <b className='text-gray-800'>Our Mission</b>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sint sapiente facilis dicta iusto mollitia esse illum doloremque dolore et velit aliquam, sit numquam fuga praesentium porro perspiciatis harum reprehenderit.</p>
          </div>
      </div>

    <div className='text-2xl py-4'>
      <Titles text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col gap-3 md:flex-row text-sm mb-20'>
       <div className='border px-5 md:px-10 gap-3 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Quality Assurance:</b>
           <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident maxime facilis fugit eos dolores velit, quis tempore deleniti nostrum ipsum alias iste earum maiores adipisci ex. Dolorem distinctio nostrum voluptatum!</p>
       </div>

       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Convenience;</b>
         <p className='text-gray-600'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ut nisi ducimus quod omnis vitae facere! Assumenda ut consequatur aperiam. Dicta ab facere doloribus dolor molestias temporibus autem sapiente id.</p>
       </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Others;</b>
         <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ut nisi ducimus quod omnis vitae facere! Assumenda ut consequatur aperiam. Dicta ab facere doloribus dolor molestias temporibus autem sapiente id.</p>
       </div>

    </div>
    <NewsLetterBox/>

    </div>
  )
}

export default About
