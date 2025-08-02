import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import { serviceData } from '@/Assets/assets'

const servicesText = `I offer comprehensive frontend development services focused on creating exceptional digital experiences. My expertise includes building responsive websites and web applications using React.js, Next.js, HTML5, CSS3, and JavaScript. I specialize in transforming design concepts into pixel-perfect, interactive user interfaces that work seamlessly across all devices. Whether you need a modern business website, an e-commerce platform, or a complex web application, I deliver clean, maintainable code with optimal performance and user experience. My services include custom web development, UI/UX implementation, API integration, performance optimization, and ongoing maintenance. I'm committed to using the latest web technologies and best practices to ensure your project stands out in today's competitive digital landscape.`

function Services() {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20 bg-white'>
      <h4 className='text-center mb-2 text-lg font-ovo'>
        What I offer
      </h4>
      <h2 className='text-center text-5xl font-ovo'>
        My Services
      </h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        React.js & Next.js developer creating fast, responsive websites that engage users and drive results.
      </p>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index) => (
          <div 
            key={index}
            className='group relative bg-white border border-gray-300 rounded-2xl px-6 py-8 hover:shadow-xl hover:shadow-gray-200 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-gray-500 overflow-hidden'
          >
            {/* Background Gradient Effect */}
            <div className='absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            
            {/* Icon Container */}
            <div className='relative z-10 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300'>
              <Image src={icon} alt={title} className='w-8 h-8' />
            </div>
            
            {/* Content */}
            <div className='relative z-10'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300'>
                {title}
              </h3>
              
              <p className='text-sm text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300'>
                {description}
              </p>
              
              {/* Read More Link */}
              <a 
                href={link} 
                className='inline-flex items-center gap-2 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-all duration-300 group-hover:gap-3'
              >
                Read More 
                <div className='w-4 h-4 overflow-hidden'>
                  <Image 
                    src={assets.right_arrow} 
                    alt='' 
                    className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' 
                  />
                </div>
              </a>
            </div>
            
            {/* Decorative Element */}
            <div className='absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500'></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services