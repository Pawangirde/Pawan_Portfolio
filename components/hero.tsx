"use client"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for sticky navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">Pawan Girade</h1>
            <p className="text-2xl sm:text-3xl text-accent font-light">Frontend Developer</p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I build interactive, scalable, and production-grade applications using React.js, JavaScript, Node.js, AWS
            Lambda, GraphQL, and DynamoDB. Strong in component architecture, UI optimization, and clean code practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button
              onClick={() => handleScrollToSection("experience")}
              className="px-8 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              View My Work
            </button>
            <a
              href="mailto:pawangirde01@gmail.com"
              className="px-8 py-3 border border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-colors text-center"
            >
              Get in Touch
            </a>
          </div>

          <div className="pt-12 flex flex-col sm:flex-row gap-8 text-sm">
            <div>
              <p className="text-muted-foreground mb-2">LOCATION</p>
              <p className="font-medium">Wardha, Maharashtra</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">PHONE</p>
              <a href="tel:+917798318236" className="font-medium hover:text-accent transition-colors">
                +91 77983 18236
              </a>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">EMAIL</p>
              <a href="mailto:pawangirde01@gmail.com" className="font-medium hover:text-accent transition-colors">
                pawangirde01@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
