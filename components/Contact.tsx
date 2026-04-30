'use client'

import { useState } from 'react'
import styles from './Contact.module.css'
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    const mailtoLink = `mailto:kylejzarahan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContainer}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Get In Touch</span>
          <h2 className={styles.title}>
            Contact <span>Me</span>
          </h2>
          <div className={styles.accent} />
          <p className={styles.subtitle}>
            Have a project in mind, a job opportunity, or just want
            to say hi? I would love to hear your thoughts.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.contactGrid}>

          {/* Left — Info */}
          <div className={styles.contactInfo}>
            <div>
              <h3 className={styles.infoTitle}>Let's build business</h3>
              <p className={styles.infoText}>
                I'm open to any entry-level opportunities your team would like to have me. If so, I would love to connect with you!
              </p>
            </div>
            <a
              href="mailto:kylejzarahan@gmail.com"
              className={styles.contactCard}
            >
              <div className={styles.contactIconWrapper}>
                <FiMail />
              </div>
              <div className={styles.contactCardContent}>
                <span className={styles.contactCardLabel}>Email</span>
                <span className={styles.contactCardValue}>
                  kylejzarahan@gmail.com
                </span>
              </div>
            </a>

            <div className={styles.contactCard}>
              <div className={styles.contactIconWrapper}>
                <FiMapPin />
              </div>
              <div className={styles.contactCardContent}>
                <span className={styles.contactCardLabel}>Location</span>
                <span className={styles.contactCardValue}>
                  Winnipeg, Manitoba, Canada
                </span>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className={styles.socialsTitle}>Find me on</p>
              <div className={styles.socials}>
                <a
                  href="https://github.com/notgreatpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="hhttps://www.linkedin.com/in/kyle-arahan-174644380/"
                  target="_blank"
                  rel="LinkedIn"
                  className={styles.socialLink}
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>

        
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Start the conversation with me!</h3>
            <form className={styles.form} onSubmit={handleSubmit}>

           
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className={styles.formInput}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className={styles.formInput}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

         
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  className={styles.formInput}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

           
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me more..."
                  className={styles.formTextarea}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

            
              <button type="submit" className={styles.submitBtn}>
                <FiSend /> Send Message
              </button>

            </form>
          </div>
        </div>


        <div className={styles.footer}>
          <p>© {new Date().getFullYear()} Kyle Arahan. All rights reserved.</p>
        </div>

      </div>
    </section>
  )
}

export default Contact