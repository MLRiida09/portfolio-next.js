import { assets, infoList, toolsData } from '@/Assets/assets'
import React from 'react'
import Image from 'next/image'
import EnhancedReadMore from './EnhancedReadMore'

  const aboutText = `I am a passionate and experienced web developer with a strong foundation in modern web technologies. I specialize in creating responsive, user-friendly websites and web applications that deliver exceptional user experiences. With expertise in both frontend and backend development, I bring ideas to life through clean, efficient code and innovative design solutions. My technical skills include proficiency in HTML5, CSS3, JavaScript, React.js, Next.js, Node.js, and various databases. I have a keen eye for design, strong problem-solving abilities, and a commitment to writing maintainable, scalable code. I stay current with the latest web development trends and best practices to ensure my projects meet modern standards. I am dedicated to continuous learning and always excited to take on new challenges that push the boundaries of what's possible on the web.`;

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 bg-white'>
      <h4 className='text-center mb-2 text-lg font-ovo'>
        Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>
        About me</h2>

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
                {infoList.map(({icon, iconDark, title , description},idenx)=>(
              <li className='border-[0.5px] border-gray-400 rounded-2xl p-4 mt-4 border-dashed border-gray-400 hover:SubtleHoverLight hover:cursor-pointer hover:border-gray-600 hover:bg-gray-100  hover: -translate-y-1 duration-500 hover:shadow-black   '
              key={idenx}>
                      <Image src={icon} alt={title} width={40} height={40} />
                      <div className='flex flex-col'>
                        <h4 className='text-lg font-ovo'>{title}</h4>
                        <p className='text-sm text-gray-500'>{description}</p>
                      </div>
                  </li>
                ))}
              </ul>
              <h4 className='my-6 text-gray-700 font-ovo'>Tools i use </h4>
              <ul className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool,index) =>(
                  <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                     rounded-lg hover:bg-gray-100 hover:cursor-pointer hover:SubtleHoverLight hover:shadow-black
                     hover:translate-y-1 duration-500 hover:shadow-black '
                   key={index}>
                    <Image src={tool} alt='tools' className='w-5 sm:w-7' />
                  </li>
                ))}
              </ul>
          </div>
        </div>
    </div>
  )
}

export default About