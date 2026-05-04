import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../component/ui/card"
import { Badge } from "../component/ui/badge"

type DescriptionBullet = { text: string }

type ExperienceItem = {
  company: string
  link: string
  position: string
  duration: string
  description: DescriptionBullet[]
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "OAK Network",
    link: "https://oak-network.com/",
    position: "Full Stack Developer",
    duration: "Apr 2024 - Dec 2025",
    description: [
      {
        text: "Architected, secured, and versioned high-throughput RESTful APIs (handling 5k+ requests/min) using Node.js/Express and FastAPI, implementing secure role-based access control (RBAC) and Microsoft Entra ID authentication.",
      },
      {
        text: "Drove 35% performance improvements by optimizing PostgreSQL queries and implementing advanced, multi-tier caching strategies (e.g., Redis) to handle high-throughput demands.",
      },
      {
        text: "Enforced data integrity and security across 50+ API endpoints by implementing robust input validation, data sanitization, and structured logging practices.",
      },
      {
        text: "Optimized data retrieval and system responsiveness for large datasets (1M+ records) by implementing efficient server-side pagination and filtering mechanisms across core application resources.",
      },
      {
        text: "Enhanced front-end performance and user experience, reducing render times by 40% through React optimization techniques, implementing responsive UI design, and managing complex application state with Redux Toolkit.",
      },
    ],
    skills: ["React", "Node.js", "TypeScript", "FastAPI", "OAuth", "Redux", "API Design", "Postgresql", "JavaScript", "Git", "Debugging"],
  },
  {
    company: "ApnaCam",
    link: "https://apnacam.com/?srsltid=AfmBOopnOxwTG5c-tOF3wCESM1oSIv0p9LtUc2m83Hjl6VLB33iSR9b5",
    position: "Full Stack Developer",
    duration: "Apr 2023 - Mar 2024",
    description: [
      {
        text: "Developed and optimized responsive user interfaces for 3 key features using React.js, ensuring cross-browser compatibility and a seamless user experience across different devices.",
      },
      {
        text: "Managed complex application state across 15+ application screens using Redux Toolkit, implementing efficient data flow patterns to improve application maintainability and scalability.",
      },
      {
        text: "Identified and resolved 8 major frontend performance bottlenecks, reducing initial load times by 2 seconds and minimizing unnecessary re-renders for a more responsive UI.",
      },
    ],
    skills: ["JavaScript", "React.js", "MySQL", "HTML", "CSS", "Tailwind Css", "MongoDB", "Nodejs", "Git", "Debugging"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.position}</CardTitle>
                <p className="text-sm font-medium text-foreground">{exp.company}</p>
                <Link
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Company website
                </Link>
                <p className="text-sm text-muted-foreground">{exp.duration}</p>
              </CardHeader>
              <CardContent>
                <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item.text}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
