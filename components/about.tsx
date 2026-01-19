"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">About</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-balance">Education</h3>
            
            <div className="space-y-0">
              <div className="border-l-2 border-accent pl-8 pb-8">
                <div className="mb-2">
                  <h4 className="text-xl font-bold">Master of Computer Applications (MCA)</h4>
                  <p className="text-accent font-medium">Ranibai Agnihotri College of CS & IT, Wardha (RTMNU)</p>
                </div>
                <p className="text-muted-foreground text-sm">Graduated: August 2022 | Grade: 75%</p>
              </div>
              
              <div className="border-l-2 border-accent pl-8">
                <div className="mb-2">
                  <h4 className="text-xl font-bold">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-accent font-medium">Ranibai Agnihotri College of CS & IT, Wardha (RTMNU)</p>
                </div>
                <p className="text-muted-foreground text-sm">Graduated: August 2020 | Grade: 62%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

