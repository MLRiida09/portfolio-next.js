"use client";
import React, { useState } from 'react';
import { contactFormFunctions } from '@/Assets/assets';

const ContactForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const inputClass = "w-full p-4 rounded-2xl border-2 border-gray-300 bg-white focus:outline-none focus:border-gray-500 focus:shadow-lg focus:shadow-gray-200 transition-all duration-500 hover:border-TextHoverLight hover:shadow-md hover:shadow-gray-100 hover:-translate-y-1 font-ovo text-gray-800 placeholder-gray-500";

    return (
        <div className="w-full px-[12%] py-10 bg-white">
            <div className="max-w-2xl mx-auto">
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
                                isDragOver ? 'border-gray-500 bg-SubtleHoverLight scale-105' : 'border-gray-300 hover:border-TextHoverLight hover:bg-SubtleHoverLight hover:-translate-y-1 hover:shadow-md hover:shadow-CardHoverLight'
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
                                    <div className="w-16 h-16 bg-gradient-to-br from-SubtleHoverLight to-CardHoverLight rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:from-CardHoverLight group-hover:text-grey-100 transition-all duration-300 text-2xl">
                                        📁
                                    </div>
                                    <p className="font-ovo text-gray-800 font-semibold mb-2">Upload a file</p>
                                    <p className="text-sm text-TextHoverLight">Drag and drop or click to browse</p>
                                    <p className="text-xs text-gray-400 mt-1">PDF, DOC, TXT, or images up to 10MB</p>
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
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
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
    );
};

export default ContactForm;