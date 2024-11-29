import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../component/ui/card"
import { Progress } from "../component/ui/progress"

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "C++", proficiency: 80 },
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "Python", proficiency: 75 },
    ]
  },
  {
    category: "Core Development",
    skills: [
      { name: "HTML", proficiency: 95 },
      { name: "CSS", proficiency: 90 },
    ]
  },
  {
    category: "Styling",
    skills: [
      { name: "Tailwind CSS", proficiency: 85 },
      { name: "shadcn/ui", proficiency: 80 },
    ]
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React.js", proficiency: 90 },
      { name: "Node.js", proficiency: 85 },
      { name: "Next.js", proficiency: 80 },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "SQL", proficiency: 75 },
      { name: "MySQL", proficiency: 70 },
      { name: "MongoDB", proficiency: 80 },
    ]
  },
  {
    category: "Computer Science",
    skills: [
      { name: "Operating System", proficiency: 75 },
      { name: "Network", proficiency: 70 },
      { name: "DBMS", proficiency: 80 },
    ]
  },
  {
    category: "Debugging",
    skills: [
      { name: "Chrome DevTools", proficiency: 85 },
      { name: "VS Code Debugger", proficiency: 80 },
    ]
  },
  {
    category: "Version Control",
    skills: [
      { name: "Git", proficiency: 90 },
    ]
  },
]

export const Skills = () => {
  return (
    <section id="skills" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm font-medium">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="w-full" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

