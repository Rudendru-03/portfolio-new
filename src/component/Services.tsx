import { Code, Server, Globe } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../component/ui/card'

const services = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end web application development using modern technologies.',
    icon: Globe,
  },
  {
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with React and Next.js.',
    icon: Code,
  },
  {
    title: 'Backend Development',
    description: 'Building robust and scalable server-side applications and APIs.',
    icon: Server,
  },
]

export function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <service.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

