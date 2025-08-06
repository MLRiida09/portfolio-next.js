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
            {/* Base overlay gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
                     
            {/* Hover overlay with background */}
            <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                     
            {/* Content */}
            <div className='absolute inset-0 p-6 flex flex-col justify-center items-center text-center'>
              {/* Project info appears on hover */}
              <div className='opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300'>
                <h3 className='text-2xl font-semibold font-ovo mb-4 text-white'>
                  {project.title}
                </h3>
                <p className='text-sm text-gray-100 leading-relaxed bg-white/10 p-4 rounded-lg border border-white/20'>
                  {project.description}
                </p>
              </div>

              {/* Optional: Project number or category badge */}
              <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='bg-white/20 border border-white/30 px-3 py-1 rounded-full text-xs font-ovo text-white'>
                  0{index + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a href="" className='w-64 mx-auto px-4 sm:px-6 lg:px-10 py-3 border border-gray-800 rounded-full bg-black text-white flex items-center justify-center gap-2 text-sm sm:text-base font-ovo hover:bg-gray-800 transition-colors'>
        Show More Projects <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4' />
      </a>
    </div>
  );
};

export default Work;