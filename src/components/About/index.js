import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faGitAlt,
  faJsSquare,
  faNodeJs,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'

import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const aboutMe = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutMe}
              idx={15}
            />
          </h1>
          <p>
            I'm an Experienced Full Stack Developer with expertise in coding,
            testing, and maintenance of software systems. Equipped with a
            diverse and promising skill-set and proficiency in various
            platforms, and languages.
          </p>
          <p>
            I can effectively self-manage independent projects, as well as
            collaborate as part of a productive team.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5BD4F4" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faSass} color="#CF649A" />
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faBootstrap} color="#760FF0" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#75AC64" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
