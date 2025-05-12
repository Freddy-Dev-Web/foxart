import React from 'react'
import Container from './Container'

interface HeadingsProps {
  title: string;
  subtitle: string
}

const Headings = ({title, subtitle}: HeadingsProps) => {
  return (
    <Container className={"bg-[#070E27] text-white `py-5 lg:py-10"}>
        <div 
        className="text-[0.875rem] leading-[1rem] font-light sm:text-[1rem] sm:leading-[1.25rem] md:text-[1.125rem] md:leading-[1.5rem] lg:text-[1.25rem] lg:leading-[2rem] text-[#7E8BB6] text-center uppercase">
         {title}
        </div>
        <h2 className='font-bold text-[1.5rem] leading-[2rem] sm:text-[2rem] sm:leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] lg:text-[3rem] lg:leading-[4rem] text-center'>{subtitle}</h2>
    </Container>
  )
}

export default Headings