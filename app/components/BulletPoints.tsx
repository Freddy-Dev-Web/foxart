import React from 'react'
import Container from './Container'
import Headings from './Headings'
import { bulletPoints } from '../constants'
import Image from 'next/image'


const BulletPoints = () => {
  return (
    <>
    <div className="bg-[#070E27]">

    <Headings title="foxart" subtitle="How does it work?" />
    <Container className="bg-[#070E27] text-white">
      <div 
      className="w-full max-w-6xl mx-auto py-5 lg:py-10 space-y-10 lg:space-y-24">
        {bulletPoints.map((bulletPoint) => (
          <div 
          key={bulletPoint.id} 
          className={`
            flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20
            ${bulletPoint.id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
          `}>
            <div className="w-full flex justify-center lg:w-5/12">
              <Image 
              src={bulletPoint.image} 
              alt={bulletPoint.alt} 
              width={bulletPoint.width} 
              height={bulletPoint.height} 
              className="px-20 lg:px-0"
              />
            </div>
            <div className="w-full lg:w-5/12 space-y-5 text-center lg:text-left">
              <h3 
              className='font-bold text-[1.25rem] leading-[1.5rem] sm:text-[1.5rem] sm:leading-[2rem] md:text-[2rem] md:leading-[2.25rem] lg:text-[2.25rem] lg:leading-[2.5rem]'>
                {bulletPoint.title}
              </h3>
              <p className="text-[0.875rem] leading-[1rem] font-light sm:text-[1rem] sm:leading-[1.25rem] md:text-[1.125rem] md:leading-[1.5rem] lg:text-[1.25rem] lg:leading-[2rem] text-[#7E8BB6]">
                {bulletPoint.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
    </div>
    </>
  )
}

export default BulletPoints