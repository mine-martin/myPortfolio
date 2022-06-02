import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logopreload.png'
import './index.scss'
import AnimatedLetters from '../../components/AnimatedLetters/index'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const greetingArray = ['H', 'i', ',']
  const greetingArray2 = ['I', "'", 'm']
  const nameArray = ['a', 'r', 't', 'i', 'n']
  const jobArray = ['F', 'u', 'l', 'l']
  const jobArray2 = ['S', 't', 'a', 'c', 'k']
  const jobArray3 = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '. ']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greetingArray}
              idx={0}
            />{' '}
            <br />{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greetingArray2}
              idx={5}
            />
            <img src={LogoTitle} alt="developer logo" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={10}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray2}
              idx={19}
            />{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray3}
              idx={24}
            />{' '}
          </h1>
          <h2>FullStack Developer / Software Developer / JavaScript </h2>
          <Link to="contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Home
