import Link from 'next/link';
import React from 'react'

interface LearnProps {
    path: string;
}

const LearnMore: React.FC<LearnProps> = ({path}) => {
  return (
    <Link href={path}>
      <button className='bg-gray-700 hover:bg-gray-600 text-[#f1f1f1] font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-700/40'>
        Learn More
      </button>
    </Link>
  )
}

export default LearnMore;