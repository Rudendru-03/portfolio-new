import { Skills } from '../component/Skills'
import { Projects } from '../component/Projects'
import { Services } from '../component/Services'
import { Education } from '../component/Education'
import { Experience } from '../component/Experience'
import { ContactForm } from '../component/ContactForm'
import Link from 'next/link'
import { Button } from '../component/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
import Script from 'next/script'

export default function Home() {
  // const currentYear = new Date().getFullYear();s

  return (
    <>
      <Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Rudendru Rahul",
          "url": "https://www.rudendrurahul.com",
          "sameAs": [
            "https://github.com/rudendrurahul",
            "https://linkedin.com/in/rudendrurahul",
            "https://twitter.com/rudendrurahul"
          ],
          "jobTitle": "Full Stack Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Self-employed"
          }
        })
      }} />
      <div className="min-h-screen">
        <section id="home" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Rudendru Rahul - Full Stack Developer
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Passionate about creating innovative web solutions using React, Next.js, and modern technologies.
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                <Link href="https://github.com/rudendrurahul" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/rudendrurahul" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:rudendru0310@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
              <Button asChild>
                <Link href="/rudendru-rahul-resume.pdf" download>
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Education />

        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Rudendru Rahul</h2>
            <div className="max-w-md mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

