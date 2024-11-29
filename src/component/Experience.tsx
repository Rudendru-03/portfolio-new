import { Card, CardContent, CardHeader, CardTitle } from "../component/ui/card"
import { Badge } from "../component/ui/badge"

type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
  description: string;
  skills: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "BterAi",
    position: "Software Developer",
    duration: "Jan 2024 - Sep 2024",
    description: "Developed and integrated React.js and Redux components, built RESTful APIs with Express and Postgres, implemented Stripe and Kafka, ensured code quality with unit tests and Swagger, and resolved complex bugs in video calling and chatbot projects to enhance peer-to-peer communication stability.",
    skills: ["React", "Node.js", "TypeScript", "Postgresql", "JavaScript", "Git", "Debugging"]
  },
  {
    company: "ApnaCam",
    position: "Full Stack Developer",
    duration: "Jun 2023 - Jan 2024",
    description: "Developed frontend interfaces and backend logic, implemented secure RESTful APIs with authentication and authorization using Express.js, and optimized state management in React.js with Redux Toolkit for improved scalability and maintainability.",
    skills: ["JavaScript", "React.js", "MySQL", "HTML", "CSS", "Tailwind Css", "MongoDB", "Firebase", "Git", "Debugging"]
  },
  {
    company: "Techara",
    position: "Frontend Developer",
    duration: "Feb 2023 - Apr 2023",
    description: "Developed a responsive and user-friendly dashboard using React.js and Ant Design, delivering an intuitive interface for efficient data visualization and management.",
    skills: ["React js", "React Native", "JavaScript", "Node.js", "MySQL", "Git", "HTML", "CSS"]
  }
  // Add more experiences as needed
];

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.position}</CardTitle>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.duration}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

