import React, { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children , className}: ContainerProps) => {
  return (
    <div className={`max-w-[80rem] mx-auto px-8 md:px-20 lg:px-30
    ${className || ""}`}
    >
        {children}
    </div>
  )
}

export default Container