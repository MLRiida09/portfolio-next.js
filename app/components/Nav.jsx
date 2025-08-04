"use client"
import { assets } from '@/Assets/assets'
import Link from 'next/link'
import Image from 'next/image'
import MLRiidaLogo from './MLRiidaLogo.jsx'
import { useRef } from 'react';


const Nav = () => {
   const sideMenuRef = useRef()

  const openMenu =() => { 
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => { 
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }
  return (
    <>
      
      <div className="fixed inset-0 w-full h-full -z-10 bg-gradient-to-r from-gray-100 to-gray-200">
      </div>

      
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-white shadow-sm border-b border-gray-200'>
        
        <MLRiidaLogo
          href="#top"
          className="cursor-pointer"
          size="small"
          clickable
        />

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full'>
          <li><a className='font-ovo text-gray-800 hover:text-blue-600 transition-colors' href="#top">Home</a></li>
          <li><a className='font-ovo text-gray-800 hover:text-blue-600 transition-colors' href="#about">About</a></li>
          <li><a className='font-ovo text-gray-800 hover:text-blue-600 transition-colors' href="#services">Services</a></li>
          <li><a className='font-ovo text-gray-800 hover:text-blue-600 transition-colors' href="#work">My Work</a></li>
          <li><a className='font-ovo text-gray-800 hover:text-blue-600 transition-colors' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button type='button'>
            <Image src={assets.moon_icon} alt='theme' className='w-6'/>
          </button>

          <Link
            className='hidden lg:flex items-center  gap-3 px-10 py-3 rounded-lg  font-ovo text-gray-800 hover:text-blue-600 transition-colors'
            href="#contact"
          >
            Contact{' '}
          </Link>
          
          <button className='block md:hidden ml-3 bg-gray-100 rounded-lg p-2' onClick={openMenu}>
            <Image src={assets.menu_black} alt='menu' className='w-6'/>
          </button>
        </div>
        
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen 
        transition duration-500 bg-white shadow-md rounded-sm'>
          <div className='absolute right-6 top-6' onClick={closeMenu}> 
            <Image src={assets.close_black} alt='close' className='w-5 cursor-pointer'/>
          </div>
          <li><a className='font-ovo text-gray-800' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-ovo text-gray-800' onClick={closeMenu} href="#about">About</a></li>
          <li><a className='font-ovo text-gray-800' onClick={closeMenu} href="#services">Services</a></li>
          <li><a className='font-ovo text-gray-800' onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className='font-ovo text-gray-800' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};



export default Nav;
