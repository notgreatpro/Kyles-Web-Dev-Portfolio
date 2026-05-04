'use client'

import { useState, useEffect } from 'react'
import { FiDownload} from 'react-icons/fi'
import DarkModeToggle from './DarkModeToggle'
import styles from './Navbar.module.css'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  {label: 'Education', href: '#education'},
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['about', 'skills', 'projects', 'education', 'contact']
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })
      setActiveSection(current || '')
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getLinkClass = (href: string) => {
    const section = href.replace('#', '')
    return activeSection === section ? styles.active : ''
  }

  const navClassName = [styles.navbar, scrolled ? styles.scrolled : ''].join(' ')

  return (
    <nav className={navClassName}>
      <div className={styles.navContainer}>

 
        <a href="#hero" className={styles.logo}>
        <img
          src="/logo/YaeLogo.png.jpg"
          alt="Kyle Arahan Logo"
          className={styles.logoImage}
        />
          Kyle Arahan<span>.</span>
        </a>

        <div className={styles.navRight}>
          <ul className={styles.navLinks}>
            {navItems.map((item) => {
              const linkClass = getLinkClass(item.href)
              return (
                <li key={item.label}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className={styles.navActions}>
            <DarkModeToggle />
            <a
              href="/Kyle-Arahan-Resume.pdf"
              download="Kyle-Arahan-Resume.pdf"
              className={styles.cvButton}
            >
              <FiDownload />
              Resume
            </a>
          </div>
        </div>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <span style={{
              fontSize: '1.25rem',
              color: 'var(--color-text-dark)',
              lineHeight: 1,
              fontWeight: 300
            }}>✕</span>
          ) : (
            <>
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </>
          )}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className={styles.mobileMenu}>
          {navItems.map((item) => {
            const linkClass = getLinkClass(item.href)
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
          <li>
            <a
              href="/Kyle-Arahan-Resume.pdf"
              download="Kyle-Arahan-Resume.pdf"
              className={styles.mobileCv}
              onClick={() => setIsOpen(false)}
            >
              <FiDownload />
              Resume
            </a>
          </li>
          <li style={{ marginTop: '0.5rem' }}>
            <DarkModeToggle />
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar