"use client"

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "AWS Lambda", "REST APIs", "GraphQL"],
    },
    {
      category: "Database",
      skills: ["DynamoDB", "SQL", "Data Modeling"],
    },
    {
      category: "Tools & Languages",
      skills: ["Git", "Postman", "VS Code", "Core Java", "RPA"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold mb-4 text-accent">{cat.category}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, sidx) => (
                  <li key={sidx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="text-muted-foreground">{skill}</span>
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
