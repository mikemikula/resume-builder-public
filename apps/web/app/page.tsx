'use client'

import { 
  Header,
  Summary,
  Experience,
  Skills,
  Education,
  Certifications,
  Achievements,
  Contact,
  Footer 
} from '@/components'

export default function Home() {
  return (
    <article className="max-w-[1200px] mx-auto px-4">
      <Header />
      <main className="space-y-4">
        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
        <section id="summary" className="scroll-mt-16">
          <Summary />
        </section>
        <section id="experience" className="scroll-mt-16">
          <Experience />
        </section>
        <section id="skills" className="scroll-mt-16">
          <Skills />
        </section>
        <section id="education" className="scroll-mt-16">
          <Education />
        </section>
        <section id="certifications" className="scroll-mt-16">
          <Certifications />
        </section>
        <section id="achievements" className="scroll-mt-16">
          <Achievements />
        </section>
      </main>
      <Footer />
    </article>
  )
} 