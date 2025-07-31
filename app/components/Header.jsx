import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className="text-center px-4 py-10 ">
      <div className="flex justify-center mb-6">
        <Image
          src={assets.profile_img}
          alt="profile-pic"
          className="rounded-full w-32"
        />
      </div>

      <h3 className="flex justify-center items-center gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi, I'm a Web Developer
        <Image src={assets.hand_icon} alt="hand-icon" className="w-6" />
      </h3>

      <h1 className="text-3xl sm:text-6xl font-ovo lg:text-[66px] leading-tight">
        Front-End Developer Based in London
      </h1>

      <p className="max-w-2xl mx-auto font-ovo mt-4 text-gray-600">
        Frontend developer specializing in building responsive and interactive web applications, with a strong focus on user experience, modern design, and performance best practices.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="contact-icon"
            className="w-4"
          />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My resume
          <Image
            src={assets.download_icon}
            alt="download-icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
