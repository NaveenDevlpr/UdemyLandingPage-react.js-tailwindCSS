import React from 'react'
import banner from '../images/banner.jpg'
const Main = () => {
  return (
    <div className='w-full h-96 border border-gray-100 relative'>
      <img src={banner} alt='' className='h-full w-full object-cover bg-no-repeat bg-bottom'></img>
      <div className='absolute bg-white top-12 left-8 p-4 flex flex-col items-start justify-center shadow-lg h-40 w-[440px] rounded-md'>
          <h2 className='text-3xl font-bold text-black mb-3'>Hi everyone, Welcome</h2>
          <h3 className='text-xl'>Look at this project. Let's Go.</h3>
          <h3 className='text-xl'>The goal is to learn without stress.</h3>
      </div>
    </div>
  )
}

export default Main