import React, { ReactNode } from 'react';

interface BoxExplaProps {
  bgCol: string;
  children: ReactNode;
  textCol?: string;
  className?: string;
}

const BoxExpla: React.FC<BoxExplaProps> = ({ bgCol, children, textCol = 'black', className = '' }) => {
  return (
    <div 
      className={`overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${className}`} 
      style={{ 
        backgroundColor: bgCol,
        color: textCol
      }}
    >
      {children}
    </div>
  );
};

export default BoxExpla;