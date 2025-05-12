import React from 'react'
import Container from './Container'
import Headings from './Headings'
import { pricing } from '../constants'
import Image from 'next/image'
import { icoCheck } from '../assets'
import Button from './Button'

const Pricing = () => {
  return (
    <div id="pricing" className='bg-[#070E27] text-white'>
        <Headings 
        title="foxart" 
        subtitle="pricing" />
        <Container className="">
            <div className=' grid lg:grid-cols-3 gap-5 lg:gap-10'>
            {pricing.map((price) => (
                <div key={price.id} className={price.featured ? "" : "lg:mt-14"}>
                    <div
                className={`
                    rounded-xl lg:rounded-2xl p-6 lg:p-12 text-center lg:text-start
                    ${price.featured ? "bg-[#162044]" : "bg-[#081131]"}
                    `}
                >
                    <div className="text-[0.875rem] leading-[1rem] font-light sm:text-[1rem] sm:leading-[1.25rem] md:text-[1.125rem] md:leading-[1.5rem] lg:text-[1.25rem] lg:leading-[2rem] text-[#7E8BB6] uppercase">
                    {price.plan}
                    </div>
                    <div className="space-y-3">
                        <span className="font-bold text-[1.75rem] leading-[2rem] sm:text-[2.5rem] sm:leading-[3rem] md:text-[3rem] md:leading-[3.5rem] lg:text-[3.5rem] lg:leading-[4rem] text-[#7E8BB6]">$</span>
                        <span className="font-bold text-[1.75rem] leading-[2rem] sm:text-[2.5rem] sm:leading-[3rem] md:text-[3rem] md:leading-[3.5rem] lg:text-[3.5rem] lg:leading-[4rem]">{price.amount}  </span>
                    </div>
                    <hr className={`border-t mt-7 mb-4 lg:mt-16 lg:mb-8 ${
                        price.featured ? "border-[#4E5A85]" : "bg-[#1c243f]"
                    }`} />
                    <div className="space-y-4 pb-8">
                    {price.features.map((feature, index) => (
                        <div key={index} className="flex items-center justify-center lg:justify-start gap-3">
                            <Image src={icoCheck} alt="Icon Check" width={24} height={24} />
                            <div className="text-[0.75rem] leading-[1rem] font-light sm:text-[0.875rem] sm:leading-[1.25rem] md:text-[1rem] md:leading-[1.5rem] lg:text-[1rem] lg:leading-[1.5rem] text-[#CCD2E9]">{feature}</div>
                        </div>
                    ))}
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <Button href="" theme={price.featured ? "primary" : "secondary"} className="">
                            {price.amount > 0 ? "Buy this plan" : "Get started for free"}
                        </Button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default Pricing