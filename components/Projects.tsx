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
      'A mockup website design to understand how HTML and CSS used in a professional site back in 2011 by replicating exact functionalities. ',
    tech: ['HTML5', 'CSS3', 'VS Code'],
    github: '',
    image: '/project-images/Hayden-Mockup.png',
    featured: false,
  },
  {
    title: 'GreatPros BookStore',
    description:
      'A bookstore to implement responsive layouts, JavaScript features and functional contact page for questions or inquiries.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'VS Code'],
    github: 'https://github.com/notgreatpro/Web-Dev_Final_Project-GreatPro-s-BookStore',
    image: '/project-images/GreatProBookStore.png',
    featured: false,
  },
  {
    title: 'Teyvat Archives',
    description:
      'A Genshin Impact website designed for Genshin fans to browse Genshin characters including their in-game stats such as Voice Overs and Affiliations.',
    tech: ['Ruby on Rails', 'CSS3', 'CSV', 'API', 'VS Code'],
    github: 'https://github.com/notgreatpro/teyvat_archives',
    image: '/project-images/TeyvatArchives.png',
    featured: false,
  },
  {
    title: 'Yae Publishing House',
    description:
      'Another professional bookstore based on Genshin Impact Inazumas popular bookstore after the same name, designed for users to browse books with a functional payment system and a seperate admin system.',
    tech: ['Ruby on Rails', 'CSS3', 'JavaScript', 'Stripe', 'VS Code'],
    github: 'https://github.com/notgreatpro/yae_publishing_house',
    image: '/project-images/YaePublishingHouse.png',
    featured: true,
  },
   {
    title: 'Portfolio Website',
    description:
      'This responsive & professional portfolio fully designed to present my projects & work experiences; get to know my background and seeking hire from employers.',
    tech: ['React', 'CSS3', 'TypeScript', 'Next.js', 'Versel', 'VS Code'],
    github: 'https://github.com/notgreatpro/Kyles-Web-Dev-Portfolio',
    image: '/project-images/Portfolio.png',
    featured: false,
  },
  
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
            A section where I built front-end and back-end application systems.
          </p>
        </div>

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
                    Featured Project
                    </span>
                )}
                </div>

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