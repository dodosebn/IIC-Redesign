'use client';
import React, { useState } from 'react';
import TransitionLink from '../utils/transitionLink';
import path from 'path';

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
                        {[{name: 'Home', id: 1, path: '#Home'}, {name: 'Journey', id: 2, path: '#journey'}].map((item) => (
                            <li className="relative group" key={item.id} >
                                <TransitionLink href={item.path}>
                                <span className="hover:text-blue-400 cursor-pointer ">
                                    {item.name}
                                </span>
                                </TransitionLink>
                                <span 
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400"
                                   
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
                            placeholder="Stay informed – enter your email" 
                            className='px-4 py-2 rounded-l-full w-full border-1 border-[#fff] focus:outline-none'
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