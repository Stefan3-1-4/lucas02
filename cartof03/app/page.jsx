import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import KeenSliderComponent from './pages/KeenSliderComponent'
import SecondKeenSliderComponent from './pages/SecondKeenSliderComponent'

export default function Home() {
  return (
    <main className='w-full overflow-hidden'>
      <section className='flex sm:flex-col lg:flex-row-reverse lg:pt-56  lg:justify-between'>
       
      <div className='flex sm:justify-center sm:pt-14 '>
          <Image
              
            src="/images/potatoe.webp"
            alt="Potato image"
            width={300}
            height={200}
          />
        </div>

        <div div className='sm:mx-10 lg:max-w-xl '>
          <div className=''>
            <h2 className='sm: text-5xl justify-center text-center'>Hi I'm Lucas</h2>
            <p className='sm: justify-center text-center leading-7 mt-4 pt-4 text-zinc-600'>During my <strong className='text-white font-bold'>4 years</strong> as <strong className='text-white font-bold'>Front-End Software Engineer</strong>, My role has extended beyond coding to effective communication with various departments, to define new features and spearheading the development of new apps.</p>
          </div>
          <div className='flex flex-col justify-center text-center sm:flex-col md:flex-row md:justify-around md:space-x-4 md:mt-28'>
            <a className='sm:flex justify-center sm:mx-auto sm:mt-14 sm:max-w-fit md:m-0 font-bold rounded-full bg-white text-black p-2 px-8 '>Download Cv</a>
            <Link href="/experience" className='sm: flex justify-center sm:mt-7 md:m-0  text-violet-400'>See xperience</Link>
          </div>
        </div>

      </section>
      <section>
        <div>
          <div className='sm: flex-col mt-60 mx-20'>
            <div className='sm: justify-center text-center min-w-28 text-zinc-600 flex-grow-0'>
              <p>4 years of</p>
              <strong className='text-7xl text-white'>XP</strong>
              <p>working with JS universe</p>
            </div>
            

       

            <div className='flex-grow sm: mt-14'>
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
      <section className=''>
        <h2 className='sm: mx-auto text-3xl max-w-56 text-center'>Technologies i've been using...</h2>
        <div>
          <div className='infiniteKeensliderHere mt-10 '>
            <SecondKeenSliderComponent/>
          </div>
        </div>
      </section>
    </main>
  )
}
