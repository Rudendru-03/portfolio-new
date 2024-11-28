import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../component/ui/card'
import { Button } from '../component/ui/button'


const projects = [
  {
    name: 'SORTING-VISUALIZATION',
    description: 'This project visualizes how various sorting algorithms work, such as Bubble Sort, Merge Sort, Insertion Sort, and Quick Sort. It provides an interactive and educational way to understand the step-by-step execution of these algorithms.',
    image: '/images/sorting-img.png',
    github: 'https://github.com/Rudendru-03/SORTING-VISUALIZATION',
  },
  {
    name: 'Weather-App',
    description: 'This application allows users to view the weather for any location in India. It includes details like temperature, humidity, and weather conditions. The app is visually appealing, with a modern UI and a responsive design for seamless use across devices.',
    image: '/images/weather-img.png',
    github: 'https://github.com/Rudendru-03/Weather-App',
  },
  {
    name: 'Video-Search-Engine',
    description: 'Using the YouTube API, this project enables users to search for videos, view their details, and play them. The application features a sleek shimmer effect for loading states and provides a rich user experience with detailed video metadata displayed in an intuitive format.',
    image: '/images/youtube-img.png',
    github: 'https://github.com/Rudendru-03/Video-Search-Engine',
  },
  {
    name: '2048_Games',
    description: 'A classic 2048 game built with HTML, CSS, and JavaScript. The project includes smooth animations, an intuitive grid design, and responsive controls for a fun and engaging experience.',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/Rudendru-03/2048_Games',
  },
  {
    name: 'Portfolio',
    description: "This is a personal portfolio website built with Next.js. It features a dark and light mode switch, a responsive design for all devices, and an integrated contact form that sends messages directly to the developer's email. The portfolio highlights skills, projects, and experience effectively.",

    image: '/images/portfolio.png',
    github: 'https://github.com/Rudendru-03/portfolio-new',
  },
  {
    name: 'Mini-Swiggy',
    description: "This project uses Swiggy's live API to implement features like restaurant search and a cart to track added items. Redux is utilized for state management, while the application features advanced styling effects to enhance user experience.",
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/yourusername/project-c',
  },
  {
    name: 'Netflix-Gpt',
    description: 'This project is a Netflix-like clone with added functionality of login and logout implemented using Firebase. For video suggestions, ChatGPT has been integrated, making the experience dynamic and interactive.',
    image: '/images/netflix.png',
    github: 'https://github.com/Rudendru-03/Netflix-Gpt',
  },
  {
    name: 'nextJs-dashboard',
    description: 'A dashboard-like application built to learn the basics of Next.js. It explores foundational features like server-side rendering, dynamic routing, and API integration.',
    image: '/images/dashboard.png',
    github: 'https://github.com/Rudendru-03/nextJs-dashboard',
  },
  {
    name: 'chat-pdf',
    description: "This application allows users to upload PDF documents and interact with them using ChatGPT. Users can ask questions about the content of the uploaded PDF, and the AI responds based on the document's information.Built with Next.js and integrated with ChatGPT for dynamic AI- driven interaction.",
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/Rudendru-03/chatpdf-Project',
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
                  width={400}
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

