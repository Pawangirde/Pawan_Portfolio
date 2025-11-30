"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { label: "ABOUT", id: "about" },
    { label: "EXPERIENCE", id: "experience" },
    { label: "PROJECTS", id: "projects" },
    { label: "SKILLS", id: "skills" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-accent">PG</div>
          <div className="flex items-center gap-8">
            <div className="hidden sm:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-accent border-b-2 border-accent pb-1"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
              <Link href="mailto:pawangirde01@gmail.com">
                <Mail size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
