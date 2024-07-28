import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='flex justify-center mt-4'>
      <div className='flex justify-between max-w-96 p-6 bg-zinc-900 rounded-full'> 
          <Link href="/" className='px-4 text-violet-400'>About Me</Link>
          <Link href="/experience" className='px-4' >Experience</Link>
          <Link href="/futuregoals" className='px-4'>Future Goals</Link>
      </div>
    </div>
  )
}

