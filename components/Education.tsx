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
    school: 'RRC Polytech',
    degree: 'Full Stack Web Development',
    startDate: 'Jan 2025',
    endDate: 'Apr 2026',
    current: true,
    description:
      'Add your description here — for example: Studied full stack web development covering front-end and back-end technologies. Worked on real-world projects using React, Next.js, Node.js, and Supabase. Gained hands-on experience building web and mobile applications.',
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
            My academic journey and qualifications
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