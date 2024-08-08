import React from 'react'

export default function thisisyesyesyesfooter() {
  return (
    <footer className='mx-20 mb-56 mt-7'>
        <section className=''>
            <div className='flex justify-between rounded-full bg-zinc-900 p-7'>
                <strong className='text-zinc-600'>Follow me</strong>
                <span className='flex space-x-7'>
                  <a href=""> <img src="/images/gitPurpleNoBg.png" className='w-7 h-7' /></a>
                  <a href=""> <img src="/images/linkedIn2n.png" className='w-7 h-7' /></a>
                  <a href=""> <img src="/images/figma-removebg.png.png" className='w-7 h-7 rounded-full' /></a>
                  <a href=""> <img src="/images/mediun.jpg" className='w-7 h-7 rounded-full' /></a>
                </span>
            </div>
        </section>
        <p className='pt-7 pl-7'>vigads © 2024</p>
    </footer>
  )
}
