import React from 'react'
import TransitionLink from './transitionLink';
interface LearnProps {
    path: string;
}

const LearnMore: React.FC<LearnProps> = ({path}) => {
  return (
  <TransitionLink href={path}>
      <button className='bg-gray-700 hover:bg-gray-600 text-[#f1f1f1] font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-700/40'>
        Learn More
      </button>
    </TransitionLink>
  )
}

export default LearnMore;