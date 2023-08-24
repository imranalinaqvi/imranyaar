import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar2.jpg'
import AVTR2 from '../../assets/images.jpeg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/b7a45b2eee55312d46fbd3153b3999b1.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Rimsha Naqvi',
    review: 'KOI MUJH KO GIRA NAHI SAKHTA MUJH KO ABBAS (A) NE SAMBHALA HAI.'
  },
  {
    avatar: AVTR2,
    name: 'Quran[20:46]',
    review: 'Do not afraid; I am with you all the time, listening and seeing.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Believe in yourself even when no one else does. If someone tells you that you cant do it, prove them wrong.'
  },
  {
    avatar: AVTR4,
    name: 'MINE',
    review: '"When things are getting wrong, remember that its often the most beautiful part of your journey. During these times, you will grow stronger and acquire valuable lessons. Embrace and enjoy these moments, as they hold hidden beauty waiting to be discovered."'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>The Lines Which Always Motivates ME!</h5>
      <h2>It's All About The Love And Believe.</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials