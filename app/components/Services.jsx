'use client'
import React from 'react'
import Card from './Card' 

import { servicesCards } from '@/Assets/assets'

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
        {servicesCards.map((item, index) => (
          <Card
            key={index}
            variant='services'
            data={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Services