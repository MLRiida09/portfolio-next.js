"use client";
import React, { useState } from 'react';
import { contactFormFunctions, assets } from '@/Assets/assets';
import { contactInfo } from '@/Assets/assets';
import Image from 'next/image';

const ContactSection = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const inputClass = "w-full p-4 rounded-2xl border-2 border-gray-300 bg-white focus:outline-none focus:border-gray-500 focus:shadow-lg focus:shadow-gray-200 transition-all duration-500 hover:border-TextHoverLight hover:shadow-md hover:shadow-gray-100 hover:-translate-y-1 font-ovo text-gray-800 placeholder-gray-500";

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

            {/* Contact Info Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {contactInfo.map(({icon, title, description, link,}, index) => (
                    <div 
                        key={index}
                        className='group relative bg-white border border-gray-300 rounded-2xl px-6 py-8 hover:shadow-xl hover:shadow-gray-200 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-gray-500 overflow-hidden'
                    >
                        <div className='absolute inset-0 bg-gradient-to-br from-SubtleHoverLight via-transparent to-CardHoverLight opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        
                        <div className='relative z-10 w-16 h-16 bg-gradient-to-br from-SubtleHoverLight to-CardHoverLight rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-CardHoverLight group-hover:to-SubtleHoverLight transition-all duration-300'>
                            <Image 
                                src={icon}
                                alt={title} 
                                className="w-8 h-8" 
                            />
                        </div>
                        
                        <div className='relative z-10'>
                            <h3 className='text-xl font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300 font-ovo'>
                                {title}
                            </h3>
                            
                            <p className='text-sm text-TextHoverLight leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300 font-ovo'>
                                {description}
                            </p>
                            
                            <a 
                                href={link} 
                                className='inline-flex items-center gap-2 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-all duration-300 group-hover:gap-3 font-ovo'
                            >
                                Contact Now
                                <svg 
                                    className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' 
                                    fill='none' 
                                    stroke='currentColor' 
                                    viewBox='0 0 24 24'
                                >
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                </svg>
                            </a>
                        </div>
                        
                        <div className='absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-SubtleHoverLight to-CardHoverLight rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500'></div>
                    </div>
                ))}
            </div>

            {/* Contact Form Section */}
            <div className='mt-20'>
                <h3 className='text-center text-3xl font-ovo mb-2'>
                    Send me a message
                </h3>
                <p className='text-center max-w-xl mx-auto mb-12 font-ovo text-TextHoverLight'>
                    Fill out the form below and I'll get back to you as soon as possible
                </p>

                <div className="max-w-2xl mx-auto bg-SubtleHoverLight rounded-3xl p-8">
                    <div className="space-y-6">
                        {/* Name and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group relative">
                                <input 
                                    type='text' 
                                    name='name'
                                    placeholder='Your Name' 
                                    value={formData.name}
                                    onChange={(e) => contactFormFunctions.handleInputChange(e, formData, setFormData)}
                                    className={inputClass}
                                    required
                                />
                                <div className='absolute inset-0 bg-gradient-to-br from-SubtleHoverLight to-transparent rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none'></div>
                            </div>

                            <div className="group relative">
                                <input 
                                    type='email' 
                                    name='email'
                                    placeholder='Your email' 
                                    value={formData.email}
                                    onChange={(e) => contactFormFunctions.handleInputChange(e, formData, setFormData)}
                                    className={inputClass}
                                    required 
                                />
                                <div className='absolute inset-0 bg-gradient-to-br from-SubtleHoverLight to-transparent rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none'></div>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="group relative">
                            <textarea 
                                name='message'
                                value={formData.message}
                                onChange={(e) => contactFormFunctions.handleInputChange(e, formData, setFormData)}
                                className={`${inputClass} min-h-[120px] resize-y`}
                                placeholder='Your message' 
                                required
                            />
                            <div className='absolute inset-0 bg-gradient-to-br from-SubtleHoverLight to-transparent rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none'></div>
                        </div>

                        {/* File Upload */}
                        <div className="group relative">
                            <div 
                                className={`relative w-full p-6 border-2 border-dashed rounded-2xl transition-all duration-500 cursor-pointer ${
                                    isDragOver ? 'border-gray-500 bg-white scale-105' : 'border-gray-300 hover:border-TextHoverLight hover:bg-white hover:-translate-y-1 hover:shadow-md hover:shadow-CardHoverLight'
                                }`}
                                onDragOver={(e) => contactFormFunctions.handleDragOver(e, setIsDragOver)}
                                onDragLeave={(e) => contactFormFunctions.handleDragLeave(e, setIsDragOver)}
                                onDrop={(e) => contactFormFunctions.handleDrop(e, setSelectedFile, setIsDragOver)}
                                onClick={() => document.getElementById('file-input').click()}
                            >
                                <input
                                    id="file-input"
                                    type="file"
                                    onChange={(e) => contactFormFunctions.handleFileSelect(e, setSelectedFile)}
                                    className="hidden"
                                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                                />
                                
                                {selectedFile ? (
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-gradient-to-br from-SubtleHoverLight to-CardHoverLight rounded-xl flex items-center justify-center">
                                                📄
                                            </div>
                                            <div>
                                                <p className="font-ovo text-gray-800 font-semibold">{selectedFile.name}</p>
                                                <p className="text-sm text-TextHoverLight">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                contactFormFunctions.removeFile(setSelectedFile);
                                            }}
                                            className="w-8 h-8 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center transition-colors duration-300"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-br from-SubtleHoverLight to-CardHoverLight rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:from-CardHoverLight transition-all duration-300 text-2xl">
                                            📁
                                        </div>
                                        <p className="font-ovo text-gray-800 font-semibold mb-2">Upload a file</p>
                                        <p className="text-sm text-TextHoverLight font-ovo">Drag and drop or click to browse</p>
                                        <p className="text-xs text-gray-400 mt-1 font-ovo">PDF, DOC, TXT, or images up to 10MB</p>
                                    </div>
                                )}
                                
                                <div className='absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-SubtleHoverLight to-CardHoverLight rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500'></div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="group relative">
                            <button 
                                type="submit"
                                onClick={(e) => contactFormFunctions.handleSubmit(e, formData, selectedFile)}
                                className='w-full p-4 mt-5 bg-gray-900 text-white rounded-2xl font-ovo font-semibold hover:bg-gray-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-CardHoverLight transition-all duration-500 relative overflow-hidden'
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Send Message 
                                    <Image 
                                        src={assets.right_arrow_white} 
                                        alt="arrow" 
                                        width={16} 
                                        height={16} 
                                        className="w-4 transition-transform duration-300 group-hover:translate-x-1" 
                                    />
                                </span>
                                
                                <div className='absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
                            </button>
                        </div>

                        <div className="text-center">
                            <p className="text-sm text-gray-500 font-ovo">
                                We'll get back to you within 24 hours
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;