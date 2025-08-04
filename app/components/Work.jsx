import { assets, workData } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20 bg-white'>
      <h4 className='text-center mb-2 text-lg font-ovo'>
        My Portfolio
      </h4>
      <h2 className='text-center text-5xl font-ovo'>
        My Latest Projects
      </h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        I specialize in creating modern, responsive websites and web applications using React.js, Next.js, and cutting-edge technologies. From sleek business websites to complex e-commerce platforms, I deliver pixel-perfect designs with exceptional performance and user experience.
      </p>
      
      {/* Fixed grid layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
        {workData.map((project, index) => (
          <div 
            key={index}
            className='group relative aspect-[4/3] bg-cover bg-center rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-xl'
            style={{backgroundImage: `url(${project.bgImage})`}}
          >
            {/* Overlay gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
            
            {/* Blur overlay on hover */}
            <div className='absolute inset-0 bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            
            {/* Content */}
            <div className='absolute inset-0 p-6 flex flex-col justify-start'>
              {/* Project info */}
              <div className='text-TextHoverLight opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h3 className='text-xl font-semibold font-ovo mb-2'>
                  {project.title}
                </h3>
                <p className='text-sm text-black/90'>
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="" className='w-max flex items-center justify-center gap-2 text-gray-600 border border-gray-300 rounded-full py-3 px-10 mx-auto my-20 bg-white hover:bg-gray-100 hover:text-gray-800 transition duration-300'>
        Show More Projects <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4' />
      </a>
    </div>
  );
};

export default Work;