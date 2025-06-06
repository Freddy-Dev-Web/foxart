import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { branding } from '../constants'

const Brading = () => {
  return (
    <section className="bg-[#070E27]">
        <Container className="relative">
            <div className="flex flex-wrap items-center justify-between lg:gap-1 max-w-5xl w-full mx-auto py-5 lg:py-8">
                {branding.map((brand, index) => (
            <div 
            key={brand.id}
            className={`flex w-1/2 justify-center sm:w-1/4 md:w-1/4 lg:w-1/6 lg:p-1
                ${
                    branding.length % 2 !== 0 && index === branding.length - 1
                    ? "hidden lg:flex"
                    : ""
                }
                `}
            >
                <Image src={brand.image} width={180} height={96} alt={brand.alt} />
            </div>
            ))}
            </div>
        </Container>
    </section>
  )
}

export default Brading