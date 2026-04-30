import styles from './Hero.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'

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
          Full Stack Web Developer
        </p>

        {/* Accent */}
        <div className={styles.accent} />

        {/* Bio */}
        <p className={styles.bio}>
          testing
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
            href="hhttps://www.linkedin.com/in/kyle-arahan-174644380/"
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