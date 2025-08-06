'use client'
import React from 'react';
import { contactCards } from '@/Assets/assets';
import Card from './Card';

const ContactSection = () => {

    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-white'>
            {/* Header Section */}
            <h4 className='text-center mb-2 text-lg font-ovo'>
                Connect with me
            </h4>
            <h2 className='text-center text-5xl font-ovo'>
                Get in touch
            </h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                I'd love to hear about your project and how I can help. Let's discuss your ideas and bring them to life together.
            </p>

            {/* Contact Info Cards using reusable Card component */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {contactCards.map((item, index) => (
                    <Card 
                        key={index}
                        variant="contact" 
                        data={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default ContactSection;