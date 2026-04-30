import styles from './Contact.module.css'
import {FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contactContainer}>

                <h2 className={styles.sectionTitle}>
                    Get In <span>Touch with me</span>
                </h2>
                <p className={styles.subtitle}>
                    testing
                </p>

                <div className={styles.contactCards}>

                    <a
                        href="mailto:kylejzarahan@gmail.com"
                        className={styles.contactCard}
                    >
                        <FaEnvelope className={styles.contactIcon} />
                        <span className={styles.contactLabel}>Email</span>
                        <span className={styles.contactValue}>kylejzarahan@gmail.com</span>
                    </a>

                    <div className={styles.contactCard}>
                        <FaMapMarkerAlt className={styles.contactIcon} />
                        <span className={styles.contactLabel}>Location</span>
                        <span className={styles.contactValue}>Winnipeg, Manitoba, Canada</span>
                    </div>
                </div>


                <p className={styles.divider}>or find me on</p>

                <div className={styles.socials}>
                    <a
                        href="https://github.com/notgreatpro"
                        target="_blank"
                        rel="github"
                        className={styles.socialLink}
                    >
                        <FaGithub className={styles.socialIcon} />
                        Github
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel='linkedin'
                        className={styles.socialLink}
                    >
                        <FaLinkedin className={styles.socialIcon} />
                        LinkedIn
                    </a>
                </div>

                <div className={styles.footer}>
                    <p>© {new Date().getFullYear()} Kyle Arahan. All rights reserved.</p>
                </div>
            </div>
        </section>
    )
}

export default Contact