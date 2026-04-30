import styles from './Projects.module.css'
import {FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
    title: string
    description: string
    tech: string[]
    github: string
    live: string
    image: string
}

const projectData: Project[] = [
    {
        title: 'Hayden Planetarium Mockup Project',
        description: 
        'This project is a mockup website from a 2011 NASA website learning the Planetarium to replicate every details that what the NASA website looks like by using HTML and CSS',
        tech: ['HTML5', ' CSS3', 'VS Code'],
        github: 'There is no GitHub respository for this project',
        live: 'http://127.0.0.1:3001/P1%20Starting%20Files/project1.html?vscode-livepreview=true#',
        image: '/project-images/Hayden-Mockup.png'
    },
    {
        title: 'GreatPros BookStore',
        description:
        'A simple BookStore website to display home page with navigation bar; a shop full of books and a contact page. This is fully built with HTML, CSS and Javascript implemented',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'VS Code'],
        github: 'https://github.com/notgreatpro/Web-Dev_Final_Project-GreatPro-s-BookStore',
        live: 'Currently there is no live demo regarding this website',
        image: 'Could not show website image'
    }




]




const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.projecrsContainer}>

                <h2 className={styles.sectionTitle}>
                    My <span>Projects</span>
                </h2>
                <p className={styles.subtitle}>
                    All of my projects I built both personal and academic purposes
                </p>

                <div className={styles.projectsGrid}>
                    {projectData.map((project: Project) => (

                        <div key={project.title} className={styles.projectCard}>
                            <img
                            src={project.image}
                            alt={project.title}
                            className={styles.projectImage}
                            />

                            <div className={styles.projectContent}>

                                <h3 className={styles.projectTitle}>{project.title}</h3>

                                <p className={styles.projectDescription}>{project.description}</p>

                                <div className={styles.techStack}>
                                    {project.tech.map((tech) => (
                                        <span key= {tech} className={styles.techTag}>{tech}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.projectLinks}>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="Github"
                                        className={`${styles.linkButton} ${styles.secondaryLink}`}
                                    >
                                        <FaGithub /> Github
                                    </a>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="Live"
                                        className={`${styles.linkButton} ${styles.primaryLink}`}
                                    >
                                        <FaExternalLinkAlt /> Live Website Demo
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