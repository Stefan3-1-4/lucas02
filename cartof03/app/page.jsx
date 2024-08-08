import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import KeenSliderComponent from './pages/KeenSliderComponent'
import SecondKeenSliderComponent from './pages/SecondKeenSliderComponent'

export default function Home() {
  return (
    <main className='w-full overflow-hidden'>
      <section className='flex sm:flex-col lg:flex-row-reverse lg:pt-56  lg:justify-between xl:px-28 2xl:px-52'>
       
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
            <h2 className=' text-5xl justify-center text-center 2xl:text-left 2xl:text-7xl'>Hi I'm Lucas</h2>
            <p className='2xl:text-xl 2xl:leading-10 2xl:mt-12 2xl:text-left justify-center text-center leading-7 mt-4 pt-4 text-zinc-600'>During my <strong className='text-white font-bold'>4 years</strong> as <strong className='text-white font-bold'>Front-End Software Engineer</strong>, My role has extended beyond coding to effective communication with various departments, to define new features and spearheading the development of new apps.</p>
          </div>
          <div className='2xl:justify-start 2xl:mt-20 flex flex-col justify-center text-center sm:flex-col md:flex-row md:justify-around md:space-x-4 md:mt-28'>
            <a className='sm:flex justify-center sm:mx-auto sm:mt-14 sm:max-w-fit md:m-0 font-bold rounded-full bg-white text-black p-2 px-8 '>Download Cv</a>
            <Link href="/experience" className='sm: flex justify-center sm:mt-7 md:m-0  text-violet-400'>See xperience</Link>
          </div>
        </div>

      </section>
      <section className='2xl:mt-72 2xl:mx-28'>
        <div>
          <div className='sm:flex-col mt-60 mx-20 xl:flex-grow-0 xl:flex xl:flex-row'>
            <div className='sm: justify-center text-center xl:w-2/3 xl:flex-col xl:flex xl:max-w-fit min-w-28 2xl:m-14 2xl:mt-0 2xl:flex-col 2xl:items-start 2xl:mr-28 text-zinc-600 flex-grow-0'>
              <p>4 years of</p>
              <strong className='text-7xl text-white'>XP</strong>
              <p className='2xl:min-w-44'>working with JS universe</p>
            </div>
            

       

            <div className='flex-grow sm: mt-14 xl:mt-0'>
              <KeenSliderComponent/>
            </div>
          </div>
        </div>
      </section>

      <section className='flex justify-center 2xl:mt-28'>
        <div className='place-content-center mt-40 bg-gradient-to-b from-violet-400 via-violet-500 bg-clip-text text-transparent'>
          <h2 className='text-8xl text-center mb-20 font-bold'>Javascript</h2>
          <h2 className='2xl:mt-44 text-8xl text-center mb-20 font-bold'>React</h2>
          <h2 className='2xl:mt-44 text-8xl text-center mb-20 font-bold'>Cofee</h2>
        </div>
      </section>
      <section className=''>
        <h2 className='sm: mx-auto text-3xl max-w-56 text-center'>Technologies i've been using...</h2>
        <div>
          <div className='infiniteKeensliderHere mt-10 '>
            <SecondKeenSliderComponent className="max-h-fit"/>
          </div>
        </div>
      </section>
    </main>
  )
}
