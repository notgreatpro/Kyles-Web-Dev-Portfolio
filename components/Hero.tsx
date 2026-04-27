import styles from './Hero.module.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContainer}>

        {/* Greeting */}
        <p className={styles.greeting}>👋 Hello, I'm</p>

        {/* Main Heading */}
        <h1 className={styles.heading}>
          <span className={styles.highlight}>Your Name</span>
        </h1>

        {/* Subheading / Role */}
        <h2 className={styles.subheading}>
          Full Stack Developer
        </h2>

        {/* Short Bio */}
        <p className={styles.bio}>
          I build clean, fast and user-friendly web applications.
          Passionate about creating digital experiences that make
          a difference.
        </p>

        {/* CTA Buttons */}
        <div className={styles.buttonGroup}>
          <a href="#projects" className={styles.primaryButton}>
            View My Work
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className={styles.socials}>
          
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            <FaGithub />
          
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            <FaLinkedin />
        </div>
      </div>
    </section>
  )
}

export default Hero