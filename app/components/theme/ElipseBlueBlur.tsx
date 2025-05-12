import { elipseBlueBlur } from '@/app/assets'
import Image from 'next/image'
import React from 'react'

const ElipseBlueBlur = () => {
  return (
    <Image src={elipseBlueBlur} 
    alt="image ElipseBlueBlur" 
    className='absolute -top-[14rem] -left-[7rem] z-0 pointer-event-none'
    />

  )
}

export default ElipseBlueBlur