"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-balance">Let's Connect</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="mailto:pawangirde01@gmail.com"
            className="px-8 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Send Email
          </a>
          <Link
            href="https://linkedin.com/in/pawan-girade"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-colors"
          >
            LinkedIn Profile
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 py-8 border-t border-border">
          <Link href="https://github.com/Pawangirde" target="_blank" rel="noopener noreferrer">
            <Github size={24} className="text-muted-foreground hover:text-accent transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/pawan-girade" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} className="text-muted-foreground hover:text-accent transition-colors" />
          </Link>
          <Link href="mailto:pawangirde01@gmail.com">
            <Mail size={24} className="text-muted-foreground hover:text-accent transition-colors" />
          </Link>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          © 2025 Pawan Girade. Built with React, Next.js, and Tailwind CSS.
        </p>
      </div>
    </section>
  )
}
