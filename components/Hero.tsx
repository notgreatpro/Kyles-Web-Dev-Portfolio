'use client'

import styles from './Hero.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContainer}>

        {/* Heading */}
        <h1 className={styles.heading}>
          Hi, I'm{' '}
          <span className={styles.highlight}>Kyle Arahan</span>
        </h1>

        {/* Role */}
       <p className={styles.role}>
        <TypeAnimation
          sequence={[
            'Full Stack Web Developer',
            5000,
            'Mobile App Developer',
            5000,
            'Front-End Developer',
            5000,
            'Back-End Developer',
            5000,
            'Software Developer',
            5000,
          ]}
          wrapper="span"
          speed={20}
          deletionSpeed={20}
          repeat={Infinity}
          cursor={true}
        />
      </p>

        {/* Accent */}
        <div className={styles.accent} />

        {/* Bio */}
        <p className={styles.bio}>
          A Full Stack Web Developer mainly focusing on building responsive websites, front-end/back-end applications and mobile-based applications. I enjoy turning simple websites into a robust deployed application with in-hands user experience.
        </p>

        {/* Buttons */}
        <div className={styles.buttonGroup}>
          <a href="#projects" className={styles.primaryBtn}>
            View My Projects <FiArrowRight />
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Contact Me
          </a>
        </div>

        {/* Socials */}
        <div className={styles.socials}>
          <a
            href="https://github.com/notgreatpro"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kyle-arahan-174644380/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>Technologies & Tools Used</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Projects Built</span>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span>scroll</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>

    </section>
  )
}

export default Hero