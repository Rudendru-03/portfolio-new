import Skills from "../component/Skills"
import { Projects } from '../component/Projects'
import { Services } from '../component/Services'
import { Education } from '../component/Education'
import { ContactForm } from '../component/ContactForm'
import { Experience } from '../component/Experience'
import Link from 'next/link'
import { SiLeetcode } from 'react-icons/si'
import { Button } from '../component/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section id="home" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4">
              Hey 👋, I'm Rudendru Rahul
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Passionate technology enthusiast aspiring to build a rewarding career in software engineering.
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
              <Link href="https://leetcode.com/u/bumrah03/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <SiLeetcode size={24} />
                  <span className="sr-only">Leetcode</span>
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
              <Link href="/rudendru.pdf" download>
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
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

