import styles from './Projects.module.css'
import { FaGithub } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  image?: string
  featured?: boolean
}

const projectsData: Project[] = [
  {
    title: 'Hayden Planetarium Mockup',
    description:
      'A mockup website from a 2011 NASA website replicating the Planetarium to replicate every details that exist on the NASA website.',
    tech: ['HTML5', 'CSS3', 'VS Code'],
    github: '',
    image: '/project-images/Hayden-Mockup.png',
    featured: false,
  },
  {
    title: 'GreatPros BookStore',
    description:
      'A simple BookStore website to display a home page with a navigation bar, a shop full of books and a contact page. Fully built with HTML, CSS and Javascript.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'VS Code'],
    github: 'https://github.com/notgreatpro/Web-Dev_Final_Project-GreatPro-s-BookStore',
    image: '/project-images/GreatProBookStore.png',
    featured: false,
  },
  {
    title: 'Teyvat Archives',
    description:
      'A simple BookStore website to display a home page with a navigation bar, a shop full of books and a contact page. Fully built with HTML, CSS and Javascript.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'VS Code'],
    github: 'https://github.com/notgreatpro/Web-Dev_Final_Project-GreatPro-s-BookStore',
    image: '/project-images/TeyvatArchives.png',
    featured: false,
  }
]

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsContainer}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>My Work</span>
          <h2 className={styles.title}>
            Featured <span>Projects</span>
          </h2>
          <div className={styles.accent} />
          <p className={styles.subtitle}>
            A selection of projects I've built
          </p>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projectsData.map((project: Project) => (
            <div key={project.title} className={styles.projectCard}>
                <div className={styles.projectImageWrapper}>
                <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                />
                <div className={styles.projectImageOverlay} />
                {project.featured && (
                    <span className={styles.featuredBadge}>
                    ⭐ Featured
                    </span>
                )}
                </div>

                {/* Content */}
                <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>
                    {project.title}
                </h3>
                <p className={styles.projectDescription}>
                    {project.description}
                </p>

                {/* Tech Tags */}
                <div className={styles.techStack}>
                    {project.tech.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                        {tech}
                    </span>
                    ))}
                </div>
                <div className={styles.projectLinks}>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.linkBtn} ${styles.primaryLink}`}
                    >
                    <FaGithub /> Source Code
                    </a>
                </div>
                </div>

                </div>
            ))}
            </div>

      </div>
    </section>
  )
}

export default Projects