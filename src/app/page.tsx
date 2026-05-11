import { Skills } from '../component/Skills'
import { Projects } from '../component/Projects'
import { Services } from '../component/Services'
import { Education } from '../component/Education'
import { Experience } from '../component/Experience'
import { ContactForm } from '../component/ContactForm'
import Link from 'next/link'
import { Button } from '../component/ui/button'
import { Github, Linkedin, Code2 } from 'lucide-react'
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
                Hi 👋, I'm Rudendru Rahul
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Proficient Full Stack Developer in scalable, secure, and optimized development of applications.
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                <Link href="https://github.com/Rudendru-03" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/rudendru-rahul-366955201/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://leetcode.com/u/bumrah03/">
                  <Button variant="outline" size="icon">
                    <Code2 className="h-5 w-5" />
                    <span className="sr-only">LeetCode</span>
                  </Button>
                </Link>
              </div>
              <Button asChild>
                <Link href="https://docs.google.com/document/d/1wmgb6QyPARXq30p8R_6MSjlICPBTmUdM/edit?usp=sharing&ouid=105042896137619830928&rtpof=true&sd=true" download target="_blank" >
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

