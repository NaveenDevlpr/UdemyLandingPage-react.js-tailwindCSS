import React from 'react'
import{ data} from '../data'
import Course from './Course'
const Courses = () => {
  return (
    <div className='flex flex-col items-start mx-8 space-y-3 mt-14 mb-8'>
      <h2 className='text-4xl font-bold'>A broad selection of courses</h2>
      <h3 className='text-xl'>Choose from 183,000 online video courses with new addition published
        every month
      </h3>
      <div className='text-xs lg:text-xl flex space-x-5 ml-1 font-bold text-gray-500 cursor-pointer'>
          <h3>Python</h3>
          <h3>Web Development</h3>
          <h3 className='text-black lg:text-2xl'>JavaScript</h3>
          <h3>Data Science</h3>
          <h3>Django</h3>
          <h3>AWS Certification</h3>
          <h3>Machine Learning</h3>
          <h3>AI</h3>
      </div>

      <div className='text-left w-full border border-gray-300 p-7'>
        <h2 className='text-2xl font-bold mb-2'>Expand your career oppurtunities with Hello World Coders</h2>
        <h3>
          Get the knowledge you want to gain. Achieve your goal and get placed in the companies you always dreamt about.
          One of the best course you will ever get. Then Why you waiting ? Get soon now.
        </h3>
        <button className='border border-black font-bold text-sm p-2 mt-4 mb-4'>
            Hello World Coder
        </button>

        <div className='flex gap-4 flex-wrap lg:flex-nowrap'>
          {
            data.map((item)=>{
                return(
                  <div className='h-60 w-60 mt-6 mb-4' key={item.id}>
                    <Course item={item}/>
                  </div>
                )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Courses