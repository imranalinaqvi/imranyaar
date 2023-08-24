import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG_3274.jpg'
import IMG2 from '../../assets/IMG_3065.jpg'
import IMG3 from '../../assets/IMG_3237.jpg'
import IMG4 from '../../assets/IMG_2992.jpg'
import IMG5 from '../../assets/IMG_3304.jpg'
import IMG6 from '../../assets/IMG_3026.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: '“STARS, UNIVERSES, AND BEYOND: A CONVERSATION BETWEEN IMAM JAFFAR AL-SADIQ AND JABBIR BIN HAYYAN”.',
    github: 'https://imamandscience.com/',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: '“EVERYTHING IS IN MOTION: A CONVERSATION BETWEEN IMAM JAFFAR AL-SADIQ AND JABBIR BIN HAYYAN”',
    github: 'https://imamandscience.com/',
    demo: 'https://imamandscience.com/everything-is-in-motion/ '
  },
  {
    id: 3,
    image: IMG3,
    title: 'AQEEQ STONE SECRETS: HEALTH AND SPIRITUAL ADVANTAGES OF RING WEARING | WAYS OF WEARING A RING:',
    github: 'https://imamandscience.com/',
    demo: 'https://imamandscience.com/aqeeq-stone-secrets/'
  },
  {
    id: 4,
    image: IMG4,
    title: '“THE SUPERMAN IN ISLAM: A BOOK ON IMAM JAFFAR AL-SADIQ (A)”',
    github: 'https://imamandscience.com/',
    demo: 'https://imamandscience.com/the-superman-in-islam-a-book-on-imam-jaffar-al-sadiq-a/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'A CONVERSATION BETWEEN IMAM MUHAMMAD BAQIR (A.S) AND A CHRISTIAN SCHOLAR.',
    github: 'https://imamandscience.com/',
    demo: 'https://imamandscience.com/a-conversation-between-imam-muhammad-baqir/'
  },
  {
    id: 6,
    image: IMG6,
    title: '“HOW MANY PLANETS EXIST?: EXPLORING FROM QURANIC INSIGHTS”',
    github: 'https://imamandscience.com/',
    demo: 'https://imamandscience.com/how-many-planets-exist-exploring-from-quranic-insights/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Blogging website</h5>
      <h2>Topics:</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Website</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Read the blog</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio