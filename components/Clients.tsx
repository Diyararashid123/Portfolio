import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { socialMedia, testimonials } from '@/data'

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from{' '}
        <span className="text-purple">Satisfied clients & companies</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
       
        <InfiniteMovingCards items={testimonials} direction='right' speed='slow'/>

    
      </div>
    </section>
  )
}

export default Clients