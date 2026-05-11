import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../component/ui/card'
import { Button } from '../component/ui/button'

type DescriptionBullet = { text: string }

type Project = {
  name: string
  description: DescriptionBullet[]
  image: string
  prodLink: string
  github: string
}

const projects: Project[] = [
  {
    name: 'AI resume analyzer and chat',
    description: [
      { text: 'Career Tools: ATS scoring and skill extraction, helping candidates identify gaps for 2x better recruiter visibility.' },
      { text: 'JD Matching: Aligns resumes with job descriptions (90%+ accuracy) to surface missing skills and reduce guesswork.' },
      { text: 'Interview Readiness: Generates targeted technical and managerial questions from resumes for real‑world scenarios.' },
      { text: 'AI Infra: Combines Gemini with vector search for 30% cost-effective performance, utilizing MongoDB Atlas for secure auth and Vercel/Render for resilient handling and optimized concurrency in the free-tier environment.' },
    ],
    image: '/images/ai-resume-analyzer.png',
    prodLink: 'https://resume-analyzer-and-chat.vercel.app/',
    github: 'https://github.com/Rudendru-03/Resume-analyzer-and-chat',
  },
  {
    name: 'Employee Management portal',
    description: [
      { text: 'End‑to‑end Employee Portal supporting 200+ employees with auth, RBAC, onboarding, attendance, leave, payroll, and announcements.' },
      { text: 'Backend achieving 99.9% uptime using Node.js, Express, MongoDB Atlas, Redis, and deployed on Render.' },
      { text: 'Notification system powered by SendGrid + BullMQ, delivering 1000+ async email alerts per day with retry/backoff.' },
      { text: 'ReactJS frontend with Context API and TailwindCSS on Vercel, resulting in 90+ PageSpeed score for responsive UX.' },
    ],
    image: '/images/employee-portal.png',
    prodLink: 'https://employee-management-frontend-sooty-six.vercel.app/',
    github: 'https://github.com/Rudendru-03/Employee-Management',
  },
  {
    name: 'E-Commerce',
    description: [
      { text: 'Full-stack e-commerce platform using React.js, Express, and MySQL, featuring a product catalog of 100+ items, a shopping cart, and secure Google OAuth authentication.' },
      { text: 'Developed a robust Order Management System (OMS) handling 50+ simultaneous orders with Payment Gateway integration and an admin dashboard for analytics.' },
      { text: 'Implemented user profiles, wishlist, and an efficient workflow that reduced processing time by 15% to ensure a scalable and secure experience.' },
    ],
    image: '',
    prodLink: '',
    github: 'https://github.com/Rudendru-03/Ecommercec-backend',
  },
  {
    name: 'SORTING-VISUALIZATION',
    description: [
      { text: 'This project visualizes how various sorting algorithms work, such as Bubble Sort, Merge Sort, Insertion Sort, and Quick Sort. ' },
      { text: 'It provides an interactive and educational way to understand the step-by-step execution of these algorithms.' },
    ],
    image: '/images/sorting-img.png',
    prodLink: 'https://rudendru-03.github.io/SORTING-VISUALIZATION/',
    github: 'https://github.com/Rudendru-03/SORTING-VISUALIZATION',
  },
  {
    name: 'Video-Search-Engine',
    description: [
      { text: 'Using the YouTube API, this project enables users to search for videos, view their details, and play them.' },
      { text: 'The application features a sleek shimmer effect for loading states and provides a rich user experience with detailed video metadata displayed in an intuitive format.' },
    ],
    image: '/images/youtube-img.png',
    prodLink: '',
    github: 'https://github.com/Rudendru-03/Video-Search-Engine',
  },
  {
    name: 'Netflix-Gpt',
    description: [
      { text: 'This project is a Netflix-like clone with added functionality of login and logout implemented using Firebase.' },
      { text: 'For video suggestions, ChatGPT has been integrated, making the experience dynamic and interactive.' },
    ],
    image: '/images/netflix.png',
    prodLink: '',
    github: 'https://github.com/Rudendru-03/Netflix-Gpt',
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
                <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm">
                  {project.description.map((item, i) => (
                    <li key={i}>{item.text}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {project.prodLink.trim() !== '' && (
                  <Button asChild variant="default">
                    <Link href={project.prodLink} target="_blank" rel="noopener noreferrer">
                      Live site
                    </Link>
                  </Button>
                )}
                <Button asChild variant="secondary">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
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
