import {ReactElement} from 'react'
import styles from './Skills.module.css'
import {FaReact, FaNodeJs, FaGithub, FaGitAlt, FaFigma, FaFileWord, FaFileExcel} from 'react-icons/fa'
import {SiJavascript, SiTypescript, SiHtml5, SiCss, SiNextdotjs, SiExpo, SiSupabase, SiPostgresql, SiLucid} from 'react-icons/si'
import {VscVscode} from 'react-icons/vsc'


interface Skill {
    name: string
    icon: ReactElement
}

interface SkillGroup {
    category: string
    skills: Skill[]
}

const skillsData: SkillGroup[] = [
    {
        category: 'Front-End Languages',
        skills: [
            {name: 'HTML', icon: <SiHtml5 color="#e34f26" />},
            {name: 'CSS', icon: <SiCss color="#1572b6" />},
            {name: 'Javascript', icon: <SiJavascript color="#f7df1e" />},
            {name: 'Typescript', icon: <SiTypescript color="#3178c6" />},
            {name: 'React', icon: <FaReact color="#61dafb" />},
            {name: 'React Native', icon: <FaReact color="#61dafb" />},
            {name: 'Next.js', icon: <SiNextdotjs color="#000000" />},
            {name: 'Expo', icon: <SiExpo color="#000000" />},
            {name: 'Expo Router', icon: <SiHtml5 color="#000000" />},
        ],
    },
    {
        category: 'Back-end',
        skills: [
            {name: 'Node.js', icon: <FaNodeJs color="#339933" />},
            {name: 'Supabase', icon: <SiSupabase color="#3ecf8e" />},
            {name: 'PostgreSQL', icon: <SiPostgresql color="#4169e1" />},
        ],
    },
    {
        category: 'Technology Tools',
        skills: [
            {name: 'Git', icon: <FaGitAlt color="#f05032" />},
            {name: 'GitHub', icon: <FaGithub color="#181717" />},
            {name: 'VS Code', icon: <VscVscode color="#007acc" />},
            {name: 'Figma', icon: <FaFigma color="#f24e1e" />},
            {name: 'MS Word', icon: <FaFileWord color="#2b579a" />},
            {name: 'MS Excel', icon: <FaFileExcel color="#217346" />},
            {name: 'Lucidchart', icon: <SiLucid color="#f96c26" />},
            {name: 'Expo Go', icon: <SiExpo color="#000000" />},
        ],
    },
]

const Skills = () => {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.skillsContainer}>

                <h2 className={styles.sectionTitle}>
                    My <span>Skills</span>
                </h2>
                <p className={styles.subtitle}>
                    Technologies and tools I used:
                </p>

                {skillsData.map((group: SkillGroup) => (
                    <div key={group.category} className={styles.category}>

                        <h3 className={styles.categoryTitle}>{group.category}</h3>

                        <div className={styles.skillsGrid}>
                            {group.skills.map((skill: Skill) => (
                                <div key={skill.name} className={styles.skillCard}>
                                    <span className={styles.skillIcon}>{skill.icon}</span>
                                    <span className={styles.skillName}>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills