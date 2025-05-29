import React from 'react'
import BoxExpla from '../utils/boxExpla'
import LearnMore from '../utils/learnMore'
import Image from 'next/image'
import FilmMaking from '@/public/images/filmMaking.avif';

const explan = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-6xl mx-auto">
      {/* Box 1 - Filmmaking */}
      <BoxExpla bgCol='#000000' textCol='white'>
        <div className="flex flex-col h-full p-6 space-y-6 items-center justify-center">
          <div className="relative h-40 w-40 mx-auto overflow-hidden rounded-full border-2 border-white/20">
            <Image 
              src={FilmMaking} 
              alt='Film making' 
              fill
              className="object-cover grayscale-[30%]"
            />
          </div>
          <div className="text-center space-y-3">
            <h1 className="text-3xl font-bold tracking-wider">
              FILM WRITING
            </h1>
            <h3 className="text-lg font-light text-white/80 italic">
              'Join Our Creative FilmMaking'
            </h3>
            <div className="pt-4">
              <LearnMore path='/'  />
            </div>
          </div>
        </div>
      </BoxExpla>

      {/* Box 2 - Screenwriting */}
       <BoxExpla bgCol='#addbeb'>
        <div className="flex flex-col h-full p-6">
          <div className="relative h-32 w-32 mx-auto mb-6 overflow-hidden rounded-lg rotate-3 shadow-xl">
            <Image 
              src={FilmMaking} 
              alt='Media' 
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-extrabold text-gray-800">
              SCREEN WRITING
            </h1>
            <h3 className="text-lg font-medium text-gray-700 italic">
              'Craft compelling stories'
            </h3>
            <div className="pt-2">
              <LearnMore path='/' />
            </div>
          </div>
        </div>
      </BoxExpla>


      {/* Box 3 - Media */}
      <BoxExpla bgCol='#addbeb'>
        <div className="flex flex-col h-full p-6">
          <div className="relative h-32 w-32 mx-auto mb-6 overflow-hidden rounded-lg rotate-3 shadow-xl">
            <Image 
              src={FilmMaking} 
              alt='Media' 
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-extrabold text-gray-800">
              MEDIA
            </h1>
            <h3 className="text-lg font-medium text-gray-700 italic">
         'Shape narratives that matter'
         </h3>
            <div className="pt-2">
              <LearnMore path='/' />
            </div>
          </div>
        </div>
      </BoxExpla>

      {/* Box 4 - Dark Theme */}
      <BoxExpla bgCol='#000000' textCol='white'>
        <div className="flex flex-col h-full p-6 space-y-6 items-center justify-center">
          <div className="relative h-40 w-40 mx-auto overflow-hidden rounded-full border-2 border-white/20">
            <Image 
              src={FilmMaking} 
              alt='Film making' 
              fill
              className="object-cover grayscale-[30%]"
            />
          </div>
          <div className="text-center space-y-3">
            <h1 className="text-3xl font-bold tracking-wider">
              CINEMATIC ARTS
            </h1>
            <h3 className="text-lg font-light text-white/80 italic">
              'Master visual storytelling'
            </h3>
            <div className="pt-4">
              <LearnMore path='/'  />
            </div>
          </div>
        </div>
      </BoxExpla>
    </div>
  )
}

export default explan