import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <section id="top" className="text-center px-4 sm:px-[8%] lg:px-[12%] py-10 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <Image
            src={assets.profile_img}
            alt="profile-pic"
            className="rounded-full pt-10 sm:pt-20 w-24 sm:w-32"
          />
        </div>

        <h3 className="flex justify-center items-center gap-2 text-lg sm:text-xl md:text-2xl mb-3 font-ovo text-gray-700">
          Hi, Im a Web Developer
          <Image src={assets.hand_icon} alt="hand-icon" className="w-5 sm:w-6" />
        </h3>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[66px] font-ovo leading-tight text-gray-800 mb-4">
          Front-End Developer Based in London
        </h1>

        <p className="max-w-2xl mx-auto font-ovo mt-4 text-gray-600 text-sm sm:text-base leading-relaxed px-4">
          Frontend developer specializing in building responsive and interactive web applications,
          with a strong focus on user experience, modern design, and performance best practices.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4">
          <a
            href="#contact"
            className="px-4 sm:px-6 lg:px-10 py-3 border border-gray-800 rounded-full bg-black text-white flex items-center justify-center gap-2 text-sm sm:text-base font-ovo hover:bg-gray-800 transition-colors"
          >
            <span className="hidden sm:inline">Contact me</span>
            <span className="sm:hidden">Contact</span>
            <Image
              src={assets.right_arrow_white}
              alt="contact-icon"
              className="w-3 sm:w-4"
            />
          </a>

          <a
            href="/sample-resume.pdf"
            download
            className="px-4 sm:px-6 lg:px-10 py-3 border rounded-full border-gray-500 text-gray-700 flex items-center justify-center gap-2 text-sm sm:text-base font-ovo hover:bg-gray-50 transition-colors"
          >
            <span className="hidden sm:inline">My resume</span>
            <span className="sm:hidden">Resume</span>
            <Image
              src={assets.download_icon}
              alt="download-icon"
              className="w-3 sm:w-4"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;