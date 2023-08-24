import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Motiavtions:</h5>
      <h2>you need to know!</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Let's Start Coding</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"Coding is the language that empowers me to turn imagination into reality."</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"In the world of coding, every obstacle is a puzzle, and every solution is a triumph."</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"With each line of code, I sculpt a piece of the future."</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"Coding isn't just about commands; it's about creating a symphony of logic and innovation."</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"The keyboard is my canvas, and code is the artistry that paints my dreams.".</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"Coding fuels my curiosity, challenges my intellect, and propels me towards endless possibilities."</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Ignore Everyone and Start Growing!</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"The path to success begins when you silence the noise around you and focus on your personal growth."</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
"Embrace your journey and ignore the doubters; your growth is your own masterpiece."</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"Don't let others' opinions overshadow your potential. Tune out the distractions and pave your way to greatness."</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"In the garden of growth, weeds of negativity can hinder your progress. Pluck them out and let your ambitions flourish."</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"The world's most successful individuals were often the ones who ignored the naysayers and followed their own path."</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"Rise above the chatter, for your aspirations deserve your undivided attention. Your journey to growth starts with self-belief."</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"Amidst the noise of conformity, your unique journey to growth demands the courage to tune out and follow your heart."</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Start Creating Whatever You Want!</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"Start creating without limits, for within your imagination lies boundless potential".</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"The journey of creation begins with a single step – take it and watch your ideas flourish."</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"Embrace the blank canvas of possibility and paint your aspirations into reality."</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"Don't wait for the perfect moment; create it through your passion and ingenuity."</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"In the realm of creation, every endeavor adds to your masterpiece of self-expression."</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"The world craves your unique creations, so unleash your creativity and let it inspire."</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services