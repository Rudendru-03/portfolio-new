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
  {
    institution: 'Govt. Boys Senior Secondary School No. 1',
    degree: '9th - 12th',
    duration: '2014 - 2018',
    location: 'New Delhi, India',
    mapLink: 'https://www.google.com/maps?sca_esv=ddc993e4aae46b09&sxsrf=ADLYWILKP75DfSyjAFBiFGZ1I34RBWmCmg:1732609255710&gs_lp=Egxnd3Mtd2l6LXNlcnAiKnNhcnZvZGF5YSBiYWwgdmlkeWFsYXlhIG5vLiAxIHB1bmphYmkgYmFnaEgAUABYAHAAeAGQAQCYAQCgAQCqAQC4ARLIAQD4AQaYAgCgAgCYAwCSBwCgBwA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KbFXhz69Aw05MZEU6gMbTJSu&daddr=M4FH%2BH7M,+Rd+Number+57,+North+Avenue,+West+Punjabi+Bagh,+Punjabi+Bagh,+Delhi,+110026',
  },
]

export function Education() {
  return (
    <section id="education" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

