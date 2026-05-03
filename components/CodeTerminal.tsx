'use client'

import { useEffect, useState } from 'react'
import styles from './CodeTerminal.module.css'

const lines = [
  { text: 'import { fullStackDeveloper } from "react"', delay: 0 },
  { text: '', delay: 300 },
  { text: 'const WebDeveloper = {', delay: 600 },
  { text: '  name: "Kyle Arahan",', delay: 900 },
  { text: '  location: "Winnipeg, Canada",', delay: 1200 },
  { text: '  role: "Full Stack Developer",', delay: 1500 },
  { text: '  education: "RRC Polytech",', delay: 1800 },
  { text: '  languages: [', delay: 2100 },
  { text: '    "JavaScript", "TypeScript",', delay: 2400 },
  { text: '    "HTML5", "CSS3",', delay: 2700 },
  { text: '    "React", "Next.js",', delay: 3000 },
  { text: '    "Supabase",', delay: 3300 },
  { text: '    "PostgreSQL",', delay: 3600 },
  { text: '  ],', delay: 3900 },
  { text: '  hobbies: [', delay: 4200 },
  { text: '    "Gaming", "Aviation",', delay: 4500 },
  { text: '    "City Planning",', delay: 4800 },
  { text: '  ],', delay: 5100 },
  { text: '  availability: true,', delay: 5400 },
  { text: '}', delay: 5700 },
  { text: '', delay: 6000 },
  { text: 'export default WebDeveloper', delay: 6300 },
]

const CodeTerminal = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [cursorLine, setCursorLine] = useState(0)

  useEffect(() => {
    lines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index])
        setCursorLine(index)
      }, line.delay)
    })
  }, [])

  const getColor = (text: string) => {
    if (text.startsWith('import') || text.startsWith('export')) return styles.keyword
    if (text.startsWith('const') || text.trim() === '}') return styles.keyword
    if (text.trim().startsWith('"')) return styles.string
    if (text.includes('[') || text.trim() === '],') return styles.bracket
    if (text.includes(':')) return styles.property
    return styles.default
  }

  return (
    <div className={styles.terminal}>

   
      <div className={styles.terminalHeader}>
        <div className={styles.terminalDots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <span className={styles.terminalTitle}>kyle_arahan.tsx</span>
      </div>

      
      <div className={styles.terminalBody}>
        {lines.map((line, index) => (
          <div
            key={index}
            className={`${styles.line} ${
              visibleLines.includes(index) ? styles.visible : styles.hidden
            }`}
          >
            
            <span className={styles.lineNumber}>{index + 1}</span>

          
            <span className={getColor(line.text)}>
              {line.text}
            </span>

         
            {cursorLine === index &&
              visibleLines.length < lines.length && (
                <span className={styles.cursor} />
              )}
          </div>
        ))}

       
        {visibleLines.length === lines.length && (
          <div className={styles.line}>
            <span className={styles.lineNumber}>
              {lines.length + 1}
            </span>
            <span className={styles.cursor} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CodeTerminal