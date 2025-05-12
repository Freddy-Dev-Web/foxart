import React from 'react'
import Container from './Container'
import Button from './Button'
import Image from 'next/image'
import { uiInterface } from '../assets'
import HeroGrid from './theme/HeroGrid'

const Hero = () => {
  return (
    <section className='relative bg-[#070E27]'>
        <Container className="relative bg-[#070E27] text-white z-10 pt-10 lg:py-14 space-y-16">
            <div className="text-center max-w-2xl mx-auto px-16 lg:px-0 space-y-7">
            <h1 
            className='font-bold text-[2rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[5rem]'>
                Build 
                <span className='bg-gradient-to-b from-[#0059F7] to-[#689EFF] bg-clip-text text-transparent'> Modern</span> Saas for startups
            </h1>
            <p className='text-[0.875rem] leading-[1rem] font-light sm:text-[1rem] sm:leading-[1.25rem] md:text-[1.125rem] md:leading-[1.5rem] lg:text-[1.25rem] lg:leading-[2rem] text-[#7E8BB6]'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident iure eum illum magni ut recusandae voluptates? Neque mollitia quis voluptate?
            </p>
            <Button className="" theme="primary" href="/#pricing">
                Pricing and plans
            </Button>
            </div>

            <Image src={uiInterface} alt="Ui interface" />
        </Container>

        <HeroGrid />
    </section>
  )
}

export default Hero