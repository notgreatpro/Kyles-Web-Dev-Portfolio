import styles from './About.module.css'

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.aboutContainer}>
                

                <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                        🧑‍💻
                    </div>
                </div>

                <div>
                    <h2 className={styles.sectionTitle}>
                        About <span>Me</span>
                    </h2>
                    
                    <p className={styles.bio}>
                        hello world
                    </p>

                    <p className={styles.bio}>
                        Idk
                    </p>

                    <div className={styles.infoGrid}>
                        <p className={styles.infoItem}>
                            <span> Name: </span> Kyle Arahan
                        </p>
                        <p className={styles.infoItem}>
                            <span> Location: </span> Winnipeg, Canada
                        </p>
                        <p className={styles.infoItem}>
                            <span>Role: </span> Full Stack Web Developer
                        </p>
                        <p className={styles.infoItem}>
                            <span> Availability: </span> Open to work
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About