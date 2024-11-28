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
    company: "Tech Innovators Inc.",
    position: "Software Developer",
    duration: "Jan 2022 - Present",
    description: "Developed and maintained web applications using React and Node.js. Implemented new features and optimized existing codebase for better performance.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB"]
  },
  {
    company: "Digital Solutions Ltd.",
    position: "Junior Web Developer",
    duration: "Jun 2020 - Dec 2021",
    description: "Assisted in the development of responsive websites and contributed to the company's internal tools using JavaScript and PHP.",
    skills: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"]
  },
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

