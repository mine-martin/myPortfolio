import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect, useState } from 'react'

const Contact = () => {
  const contactMe = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactMe}
              idx={15}
            />
          </h1>
          <p>
            Feel free to get in touch with me. I'm open to opportunities,
            discussions, collaborations, and being part of a team that
            positively impacts society.
          </p>
          <div className="contact-form">
            <form action="">
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND " />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
