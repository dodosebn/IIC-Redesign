'use client';
import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    
    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    return (
        <footer   className='bg-[#1e1e26] text-white py-8 px-4 lg:px-8'
        >
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div 
                    className='flex justify-center lg:justify-start'
                >
                <h1>IDEAISCAPITAL</h1>
                </div>

                <div 
                    className='flex justify-center'>
                    <ul className='grid grid-cols-2 gap-4'>
                        {["Home", "Journey"].map((item, index) => (
                            <li className="relative group" key={index} >
                                <span className="hover:text-green-400 cursor-pointer">
                                    {item}
                                </span>
                                <span 
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400"
                                   
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <div 
                    className='flex flex-col items-center lg:items-end gap-4'
                 >
                    <form onSubmit={handleSubmit} className='flex w-full max-w-xs'>
                        <input 
                            type="email" 
                            value={email}
                            onChange={handleEmailChange}
                            placeholder='Get updates' 
                            className='px-4 py-2 rounded-l-full w-full focus:border-2 focus:border-[#fff] focus:outline-none'
                            required
                        />
                        <button 
                           
                            type="submit" 
                            className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-full transition-colors'
                        >
                            Go
                        </button>
                    </form>
                    <div
                        className='text-sm text-gray-400'
              
                    >
            © IdeaIsCapital 2025. All rights reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;