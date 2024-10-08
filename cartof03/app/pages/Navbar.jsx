import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='z-10 sm:fixed sm:justify-center sm:bottom-28 sm:left-1/2 sm:transform -translate-x-1/2 lg:fixed lg:top-0 lg:mt-14'>
      <div className='sm: flex justify-between min-w-max p-6 bg-zinc-900 rounded-full'> 
          <Link href="/" className='px-4 text-violet-400'>About Me</Link>
          <Link href="/experience" className='px-4' >Experience</Link>
          <Link href="/futuregoals" className='px-4'>Future Goals</Link>
          <span className='flex space-x-3'>
            <a href=""> <img src="/images/gitPurpleNoBg.png" className='w-7 h-7' /></a>
            <a href=""> <img src="/images/linkedIn2n.png" className='w-7 h-7' /></a>
            <a href=""> <img src="/images/figma-removebg.png.png" className='w-7 h-7 rounded-full' /></a>
            <a href=""> <img src="/images/mediun.jpg" className='w-7 h-7 rounded-full' /></a>
          </span>
      </div>
    </div>
  )
}

