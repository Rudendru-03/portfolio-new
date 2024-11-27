import ProjectCard from '../../component/ProjectCard'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js and Stripe integration.",
    imageUrl: "/placeholder.svg",
    projectUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A React-based task management application with real-time updates.",
    imageUrl: "/placeholder.svg",
    projectUrl: "#"
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

