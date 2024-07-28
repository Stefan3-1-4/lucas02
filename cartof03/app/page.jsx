import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import KeenSliderComponent from './pages/KeenSliderComponent'

export default function Home() {
  return (
    <main>
      <section className='flex justify-between items-center space-x-4 px-24 mt-10'>
       
        <div div className='max-w-96'>
          <div>
            <h2 className='text-5xl'>Hi I'm Lucas</h2>
            <p className='pt-4 text-zinc-600'>During my <strong className='text-white font-bold'>4 years</strong> as <strong className='text-white font-bold'>Front-End Software Engineer</strong>, My role has extended beyond coding to effective communication with various departments, to define new features and spearheading the development of new apps.</p>
          </div>
          <div className='flex justify-between mt-4'>
            <button className='rounded-full bg-white text-black p-2 px-8'>Download Cv</button>
            <Link href="/experience" className='text-violet-400'>See xperience</Link>
          </div>
        </div>

        <div>
          <Image
            
            src="/images/potatoe.webp"
            alt="Potato image"
            width={300}
            height={200}
          />
        </div>
      </section>
      <section>
        <div>
          <div className='flex mt-60 mx-20'>
            <div className='min-w-28 text-zinc-600 flex-grow-0'>
              <p>4 years of</p>
              <strong className='text-7xl text-white'>XP</strong>
              <p>working with JS universe</p>
            </div>
            

            <div className='min-w-28'></div>

            <div className='flex-grow'>
              <KeenSliderComponent/>
            </div>
          </div>
        </div>
      </section>

      <section className='flex justify-center'>
        <div className='place-content-center mt-40 bg-gradient-to-b from-violet-400 via-violet-500 bg-clip-text text-transparent'>
          <h2 className='text-8xl text-center mb-20 font-bold'>Javascript</h2>
          <h2 className='text-8xl text-center mb-20 font-bold'>React</h2>
          <h2 className='text-8xl text-center mb-20 font-bold'>Cofee</h2>
        </div>
      </section>
      <section>
        <h2>Technologies i've been using</h2>
        <div>
          <div className='infiniteKeensliderHere'></div>
        </div>
      </section>
    </main>
  )
}
