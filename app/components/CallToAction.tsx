import React from 'react'
import Container from './Container'
import Button from './Button'
import Image from 'next/image'
import { icoArrowRight } from '../assets'

const CallToAction = ({ minify = false}) => {
  return (
    <section className='bg-[#070E27]'>
        <Container className="relative">
            <div className='text-white max-w-4xl mx-auto py-5 lg:py-10'>
              <div 
              className={` rounded-xl lg:rounded-3xl bg-gradient-to-tl from-[#0059F7] to-[#00308F] p-6 lg:p-16 gap-8
                ${!minify ? "flex flex-col items-center" : "flex flex-col items-center justify-between lg:flex lg:flex-row lg:items-center"}
              `}>
              <div 
              className="space-y-4 text-center">
                <div 
                className='text-[0.875rem] leading-[1rem] font-light sm:text-[1rem] sm:leading-[1.25rem] md:text-[1.125rem] md:leading-[1.5rem] lg:text-[1.25rem] lg:leading-[2rem] text-[#FFFFFF] opacity-50'>
                  Ready to start ?
                </div>
                <h3 
                className="font-bold text-[1.25rem] leading-[1.5rem] sm:text-[1.5rem] sm:leading-[2rem] md:text-[2rem] md:leading-[2.25rem] lg:text-[2.25rem] lg:leading-[2.5rem]">
                  Start your free trial today!
                </h3>
              </div>
              <Button href="" theme="primary" className="flex items-center justify-center gap-1">
                <span>Get Started</span>
                <Image src={icoArrowRight} alt="Arrow Right" width={24} height={24} />
              </Button>
              </div>
            </div>
        </Container>
    </section>
  )
}

export default CallToAction