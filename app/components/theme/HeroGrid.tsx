import { grid } from '@/app/assets'
import Image from 'next/image'
import React from 'react'

const HeroGrid = () => {
  return (
    <Image 
    src={grid} 
    alt="Grid image" 
    className=' bg-[#070E27] absolute -top-[0.015rem] left-0 z-0 w-full h-full object-contain object-top pointer-events-none'
    />
  )
}

export default HeroGrid