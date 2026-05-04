import { Card, CardContent, CardHeader, CardTitle } from '../component/ui/card'
import Link from 'next/link'

const education = [
  {
    institution: 'Netaji Subhas University of Technology',
    degree: 'Bachelor of Technology in Electrical Engineering',
    duration: '2019 - 2023',
    location: 'New Delhi, India',
    mapLink: 'https://www.google.com/maps/place/Netaji+Subhas+University+of+Technology/@28.6110155,77.0383555,790m/data=!3m1!1e3!4m6!3m5!1s0x390d05dd375e5a13:0x108adaa3abe4bd07!8m2!3d28.6109375!4d77.0384531!16zL20vMDRybHFy?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D',
  },
]

export function Education() {
  return (
    <section id="education" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {education.map((edu) => (
            <Card key={edu.institution}>
              <CardHeader>
                <CardTitle>
                  <Link href={edu.mapLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {edu.institution}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{edu.degree}</p>
                <p className="text-muted-foreground">{edu.duration}</p>
                <p className="text-muted-foreground">{edu.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

