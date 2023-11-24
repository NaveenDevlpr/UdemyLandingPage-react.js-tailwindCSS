import React from 'react'
import {ShoppingCartIcon,MagnifyingGlassIcon,GlobeAltIcon,Bars3Icon} from '@heroicons/react/24/outline'
export const Navbar = () => {
  return (
    <div className='flex space-x-4 bg-white h-[80px] shadow-lg text-center justify-between items-center px-4'>
        <Bars3Icon className='h-6 w-6 md:hidden cursor-pointer'/>
        <h2 className='text-3xl font-bold'>Udemy</h2>
        <h3 className='hidden md:block text-sm font-medium'>Categories</h3>
        <form className='hidden bg-[#f8fafb] md:flex border border-black
        + rounded-3xl flex-1 h-12 items-center'>
            <MagnifyingGlassIcon className='h-5 w-5 mx-4 text-gray-400'/>
            <input type='text' placeholder='Seacrh your course'
            className='bg-transparent text-sm outline-none'
            />
        </form>
        <h3 className='hidden lg:block text-sm font-medium'>Udemy Buisness</h3>
        <h3 className='hidden lg:block text-sm font-medium'>Teach on Udemy</h3>

        <div className='flex'>
             <MagnifyingGlassIcon className='w-6 h-6 text-gray-400 md:hidden'/>
            <ShoppingCartIcon className='w-6 h-6 '/>
        </div>
        <div className='hidden md:flex pr-4 space-x-4'>
            <button className='border border-black h-10 text-sm text-black font-semibold w-20 hover:bg-[#f5f5f5]'>Log In</button>
            <button className='border border-black h-10 text-sm text-white font-semibold w-20  bg-black'>Sign Up</button>
            <button className='border border-black w-10 flex items-center justify-center hover:bg-[#F5F5F5]'>
                <GlobeAltIcon className='w-5 h-5'/>
            </button>
        </div>
    </div>
  )
}


