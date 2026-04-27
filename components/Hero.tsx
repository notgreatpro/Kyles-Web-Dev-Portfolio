import styles from './Hero.module.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContainer}>

        {/* Greeting */}
        <p className={styles.greeting}>I'm</p>

        {/* Main Heading */}
        <h1 className={styles.heading}>
          <span className={styles.highlight}>Kyle Arahan</span>
        </h1>

        {/* Subheading / Role */}
        <h2 className={styles.subheading}>
          Full Stack Web Developer
        </h2>

        {/* Short Bio */}
        <p className={styles.bio}>
          testing
        </p>

        {/* CTA Buttons */}
        <div className={styles.buttonGroup}>
          <a href="#projects" className={styles.primaryButton}>
            View My Projects
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Contact Me
          </a>
        </div>

   
            <div className={styles.socials}>

            <a
                href="https://github.com/notgreatpro"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
            >
                <FaGithub />
            </a>

            <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
            >
                <FaLinkedin />
            </a>
            </div>
      </div>
    </section>
  )
}

export default Hero