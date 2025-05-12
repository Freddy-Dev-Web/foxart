import React from 'react'
import Container from './Container'
import { features } from '../constants'
import Image from 'next/image'

const Features = () => {
  return (
    <section className='bg-[#070E27]'>
        <Container className="">
            <div className='max-w-4xl mx-auto py-5 lg:py-10'>
                <div className="space-y-4 mb-8 text-center lg:text-start">
                    <h2 className="font-bold text-[1.5rem] leading-[2rem] sm:text-[2rem] sm:leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] lg:text-[3rem] lg:leading-[4rem] text-white">Features</h2>
                    <p className="text-[0.75rem] leading-[1rem] font-light sm:text-[0.875rem] sm:leading-[1.25rem] md:text-[1rem] md:leading-[1.5rem] lg:text-[1rem] lg:leading-[1.5rem] text-[#7E8BB6]">
                        Our landing page template works seamlessly on all devices.
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 gap-5 lg:gap-10'>
                    {features.map((feature) => (
                        <div 
                        key={feature.id}
                        className='border border-[#1c243f] hover:bg-[#081131] rounded-xl px-8 space-y-8 lg:rounded-2xl cursor-pointer duration-300 ease-in-out'
                        >
                            <Image src={feature.image} alt={feature.alt} width={48} height={48} className='mt-4' />
                        <div className='mb-4'>
                            <h3 
                            className='font-bold text-[1rem] leading-[1.25rem] sm:text-[1.25rem] sm:leading-[1.5rem] md:text-[1.5rem] md:leading-[1.75rem] lg:text-[1.5rem] lg:leading-[2rem] text-white'>
                                {feature.title}
                            </h3>
                            <p className='text-[0.75rem] leading-[1rem] font-light sm:text-[0.875rem] sm:leading-[1.25rem] md:text-[1rem] md:leading-[1.5rem] lg:text-[1rem] lg:leading-[1.5rem] text-[#CCD2E9]'>
                                {feature.text}
                            </p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Features