import React from 'react'
import {StarIcon} from '@heroicons/react/24/solid'
import course from '../images/course.jpg'
const Course = ({item}) => {
  return (
    <div className='flex flex-col items-start space-y-[2px]'>
        <img src={course} alt='' className='h-36 w-full'></img>
        <h2 className='font-bold text-md pt-1'>{item.title}</h2>
        <h2 className='text-xs text-gray-600'>{item.username}</h2>
        <div className='flex space-x-1 items-center'>
           <h3 className='text-black-800 font-bold text-sm'>{item.vote}</h3>
           <div className='flex items-center'>
              <StarIcon className='w-4 h-4 text-orange-400'/>
              <StarIcon className='w-4 h-4 text-orange-400'/>
              <StarIcon className='w-4 h-4 text-orange-400'/>
              <StarIcon className='w-4 h-4 text-orange-400'/>
           </div>
           <h3 className='text-xs'>
            {item.students}
           </h3>
        </div>
        <div className='flex space-x-4 items-center'>
          <h3 className='text-blac font-bold'>{item.price}</h3>
          <h3 className='text-gray-800 text-sm line-through'>{item.oldPrice}</h3>
        </div>
    </div>
  )
}

export default Course