'use client'
import { assets, AboutCards,toolsData } from '@/Assets/assets'
import React from 'react'
import Image from 'next/image'
import EnhancedReadMore from './EnhancedReadMore'
import Card from './Card'

const aboutText = `I am a passionate and experienced web developer with a strong foundation in modern web technologies. I specialize in creating responsive, user-friendly websites and web applications that deliver exceptional user experiences. With expertise in both frontend and backend development, I bring ideas to life through clean, efficient code and innovative design solutions. My technical skills include proficiency in HTML5, CSS3, JavaScript, React.js, Next.js, Node.js, and various databases. I have a keen eye for design, strong problem-solving abilities, and a commitment to writing maintainable, scalable code. I stay current with the latest web development trends and best practices to ensure my projects meet modern standards. I am dedicated to continuous learning and always excited to take on new challenges that push the boundaries of what's possible on the web.`;

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 bg-white'>
      <h4 className='text-center mb-2 text-lg font-ovo'>
        Introduction
      </h4>
      <h2 className='text-center text-5xl font-ovo'>
        About me
      </h2>
       
      <div className='flex w-full flex-col lg:flex-row items-start gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none lg:sticky lg:top-20 flex-shrink-0'>
          <Image src={assets.user_image} alt='user-profile' className="w-full rounded-3xl" />
        </div>
        
        <div className='flex-1 min-w-0'>
          <EnhancedReadMore 
            maxLength={224}
            className="mb-10"
          >
            {aboutText}
          </EnhancedReadMore>
          
          
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {AboutCards.map((item, index) => (
              <li key={index} >
              <Card 
                variant="about"
                 data={item}
              />
                </li>
            ))}
          </ul>
          <h4 className='my-6 text-gray-700 font-ovo'>Tools I use</h4>
          <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li 
                key={index}
                className='group relative flex items-center justify-center w-12 sm:w-14 aspect-square bg-white border border-gray-300 rounded-xl cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-200 overflow-hidden'
                >
                <div className='absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative z-10 group-hover:scale-110 transition-transform duration-300'>
                  <Image src={tool} alt='tools' className='w-5 sm:w-7' />
                </div>
                <div className='absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-125 transition-all duration-300'></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About