import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { social } from '../constants'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="bg-[#162044] text-white py-5 lg:py-12">
        <Container className=" flex flex-col gap-3 lg:flex-row lg:gap-1 items-center justify-between text-[0.625rem] leading-[0.875rem] font-light sm:text-[0.75rem] sm:leading-[1rem] md:text-[0.875rem] md:leading-[1.25rem] lg:text-[0.875rem] lg:leading-[1.5rem] text-[#CCD2E9]">
            <div className="flex items-center gap-4">
            {social.map((link) => (
                <Link key={link.id} title={link.alt} href={link.link} target="_blank" rel="noreferrer">
                    <Image src={link.ico} alt={link.alt} width={20} height={20} />
                </Link>
            ))}
            </div>
            <div className="space-x-4">
                <Link href="#/" target="_blank" rel="noreferrer">
                Terms & Conditions
                </Link>
                <Link href="#/" target="_blank" rel="noreferrer">
                Privacy Policy
                </Link>
            </div>
            <div >
                &copy; 2025 All right reserved{" "}
                <Link href="#/" target="_blank" rel="noreferrer">
                Remote Monkey
                </Link>
            </div>
        </Container>
    </div>
  )
}

export default Footer