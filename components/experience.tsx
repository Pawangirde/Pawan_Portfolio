"use client"

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Inventive Enterprices Pvt Ltd",
      period: "Dec 2023 - Present",
      description: "Led frontend development of production applications",
      achievements: [
        "Developed modular, reusable UI components using React and TypeScript",
        "Improved UI rendering performance and reduced redundant re-renders",
        "Integrated REST APIs with proper error handling and secure token flow",
        "Built responsive layouts and dashboards with mobile-first optimization",
      ],
    },
    
    {
      title: "Developer Intern",
      company: "Accenture",
      period: "Mar 2023 – Jun 2023",
      description: "Developed banking UI components and integrations",
      achievements: [
        "Developed reusable frontend components following banking UI standards",
        "Integrated Node.js APIs into frontend modules",
        "Participated in agile sprints and peer code reviews",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-accent pl-8 pb-8 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <p className="text-muted-foreground text-sm">{exp.period}</p>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, aidx) => (
                  <li key={aidx} className="flex gap-3 text-sm">
                    <span className="text-accent mt-1">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
