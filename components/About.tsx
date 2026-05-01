import styles from './About.module.css'
import { FiDownload, FiMail, FiUser } from 'react-icons/fi'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>


        <div className={styles.imageWrapper}>

          {/* 
            When you have a real photo:
            Replace the div below with:
            <img
              src="/kyle-profile.jpg"
              alt="Kyle Arahan"
              className={styles.profileImage}
            />
          */}
          <div className={styles.imagePlaceholder}>
            <div className={styles.placeholderIcon}>
              <FiUser />
            </div>
            <span className={styles.placeholderText}>
              Your Photo Here
            </span>
          </div>


          <div className={styles.expBadge}>
            <strong>2+</strong>
            <span>Years of<br />Experience</span>
          </div>

        </div>

 
        <div className={styles.content}>

 
          <span className={styles.label}>
            About Me
          </span>

    
          <h2 className={styles.title}>
            Passionate Full Stack<br />
            <span>Mobile & Software Developer</span>
          </h2>


          <div className={styles.accent} />

   
          <p className={styles.bio}>
            Ever since Computer Science course in High School, I was passionate of creating websites creating into a fully functional and robust applications that everyone freely access. I enjoy prioritize the uses of features to help the user experience of a web page.
          </p>
          <p className={styles.bio}>
            Outside of web development, I have couple of past hobbies such as gaming (especially Genshin Impact my favourite anime RPG) and some aviation genre (plane spotting. My favourite plane types are Boeing 747 & Airbus A380s).
          </p>
          <p className={styles.bio}>
           I'm also more interest into the city planning genre to understand the current issues every city around the world with poor city planning infastructure; environment concerns and prioritize on private vehicles over public transportation. I started playing Cities: Skylines, a city-simulation game to build custom cities and it helps me plan traffic and the efficient uses of public transportation.
          </p>

         
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Name</span>
              <span className={styles.infoValue}>Kyle Arahan</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>Winnipeg, Canada</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Role</span>
              <span className={styles.infoValue}>Full Stack Web Developer</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Availability</span>
              <span className={styles.infoValue}>Open to entry-level positions</span>
            </div>
          </div>

          {/* Buttons */}
          <div className={styles.actions}>
            <a
              href="/Kyle-Arahan-Resume.pdf"
              download="Kyle-Arahan-Resume.pdf"
              className={styles.primaryBtn}
            >
              <FiDownload /> Download CV
            </a>
            <a
              href="#contact"
              className={styles.secondaryBtn}
            >
              <FiMail /> Get In Touch
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About