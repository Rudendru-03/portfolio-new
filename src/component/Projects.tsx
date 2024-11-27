import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../component/ui/card'
import { Button } from '../component/ui/button'

const projects = [
  {
    name: 'Project A',
    description: 'A full-stack web application for managing tasks and projects.',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/yourusername/project-a',
  },
  {
    name: 'Project B',
    description: 'An e-commerce platform built with Next.js and Stripe integration.',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/yourusername/project-b',
  },
  {
    name: 'Project C',
    description: 'A real-time chat application using WebSockets and React.',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/yourusername/project-c',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.name}>
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{project.name}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

