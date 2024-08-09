import React from 'react'

export default function FutureGoals() {
  return (
    <section className='flex text-zinc-600 space-y-7 sm:flex-col sm:mx-14 sm:mt-7 lg:mt-44'>
      <div className='rounded-2xl border-2 bg-zinc-900 border-zinc-600 xl:flex xl:justify-between xl:leading-10 sm:p-14 sm:pt-7 xl:text-xl'>
        <div className=''>
          <h2 className='text-white xl:text-3xl xl:font-bold'>Something</h2>
          <span className='text-violet-400 '>something2x</span>
          <p>time date</p>
          
        </div>
        <div className='text-green-400 xl:text-center xl:pt-12'>
          <a href="somwhere">Somewhere</a>
        </div>
      </div>
      <div className='rounded-2xl border-2 bg-zinc-900 border-zinc-600 xl:leading-10 sm:p-14 sm:pt-7 xl:text-xl'>
        <h2 className='text-white xl:text-3xl xl:font-bold'>Somethng Else</h2>
        <span className='text-violet-400 '>Lorem ipsum dolor Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing </span>
        <p>time date</p>
      </div>
      <div className='rounded-2xl border-2 bg-zinc-900 border-zinc-600 xl:leading-10 sm:p-14 sm:pt-7 xl:text-xl'>
        <h2 className='text-white xl:text-3xl xl:font-bold'>Something Else@2</h2>
        <span className='text-violet-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi</span>
        <p>time date</p>
      </div>

    </section>
  )
}
