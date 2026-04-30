'use client'

import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      setIsDark(true)
    }
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.setAttribute(
      'data-theme',
      next ? 'dark' : 'light'
    )
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      style={{
        background: 'none',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-pill)',
        padding: '0.4rem 0.75rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        color: 'var(--color-text-mid)',
        fontSize: '0.875rem',
        fontWeight: '600',
        transition: 'all var(--transition)',
        backgroundColor: 'var(--color-bg-white)',
      }}
    >
      {isDark ? <FiSun /> : <FiMoon />}
      {isDark ? 'Light' : 'Dark'}
    </button>
  )
}

export default DarkModeToggle