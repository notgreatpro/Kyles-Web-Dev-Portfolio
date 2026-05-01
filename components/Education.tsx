import styles from './Education.module.css'
import { FiCalendar } from 'react-icons/fi'

interface Education {
  school: string
  degree: string
  startDate: string
  endDate: string
  description: string
  current?: boolean
}

const educationData: Education[] = [
  {
    school: 'ACE Project Space | RRC Polytech',
    degree: 'Full Stack Web Developer | Co-op position',
    startDate: 'Jan 5, 2026',
    endDate: 'May 1, 2026',
    current: false,
    description:
      'Integrated a mobile application for a external client on the colleges project space with a professional team setting. The app is built using React Native, Typescript, CSS, Supabase with PostgreSQL and tools such as Expo and Expo Go. Heavily focused on team collaboration and attention to detail while working with client communication.',
  },
  {
    school: 'RRC Polytech',
    degree: 'Full Stack Web Development',
    startDate: 'Jan 5, 2025',
    endDate: 'May 1, 2026',
    current: false,
    description:
      'Gain hands-on experience with strong front-end applications (UI/UX) and database management systems with problem solving & attention to detail. ',
  },
]

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.educationContainer}>

        
        <div className={styles.header}>
          <span className={styles.label}>My Background</span>
          <h2 className={styles.title}>
            My <span>Education</span>
          </h2>
          <div className={styles.accent} />
          <p className={styles.subtitle}>
            My post-secondary education insitutions & work experiences.
          </p>
        </div>

       
        <div className={styles.timeline}>
          {educationData.map((edu: Education) => (
            <div key={edu.school} className={styles.timelineItem}>

             
              <div className={styles.timelineDot} />

              
              <div className={styles.card}>

                
                <div className={styles.cardTop}>
                  <div>
                    <p className={styles.school}>{edu.school}</p>
                    <p className={styles.degree}>{edu.degree}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                    <span className={styles.dateBadge}>
                      <FiCalendar />
                      {edu.startDate} — {edu.endDate}
                    </span>
                    {edu.current && (
                      <span className={styles.statusBadge}>
                        <span className={styles.statusDot} />
                        Currently Enrolled
                      </span>
                    )}
                  </div>
                </div>

                
                <div className={styles.cardDivider} />

                
                <p className={styles.description}>
                  {edu.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education