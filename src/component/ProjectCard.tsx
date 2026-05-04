import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

type DescriptionBullet = { text: string }

interface ProjectCardProps {
  title: string
  description: string | DescriptionBullet[]
  imageUrl: string
  /** Legacy single CTA when no GitHub / prod URLs are set */
  projectUrl?: string
  githubUrl?: string
  prodUrl?: string
}

function DescriptionContent({ description }: { description: string | DescriptionBullet[] }) {
  if (typeof description === 'string') {
    return <p className="text-gray-600 mb-4">{description}</p>
  }
  return (
    <ul className="text-gray-600 mb-4 list-disc space-y-1 pl-5 text-sm">
      {description.map((item, i) => (
        <li key={i}>{item.text}</li>
      ))}
    </ul>
  )
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
  prodUrl,
}: ProjectCardProps) {
  const hasProd = prodUrl && prodUrl.trim() !== ''
  const hasGithub = githubUrl && githubUrl.trim() !== ''

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <DescriptionContent description={description} />
        <div className="flex flex-wrap gap-2">
          {hasProd && (
            <Button asChild size="sm">
              <Link href={prodUrl!} target="_blank" rel="noopener noreferrer">
                Live site
              </Link>
            </Button>
          )}
          {hasGithub && (
            <Button asChild size="sm" variant="secondary">
              <Link href={githubUrl!} target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </Button>
          )}
          {!hasProd && !hasGithub && projectUrl && (
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 transition-colors"
            >
              View Project
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
