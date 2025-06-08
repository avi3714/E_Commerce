import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
      event.preventDefault();
    }
  return (
    <div className='text-center mb-10'>
        <p className='text-2xl font-medium text-gray-800'>Register to get 10% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum expedita quam magnam eius doloribus autem quis nemo, saepe, quos fugiat architecto labore dolores. Minima facilis eligendi officiis! Veritatis, iste. Accusantium!
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' required />
            <button type='sumit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
