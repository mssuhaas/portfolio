import { getWorkExperience, getEducation, getPublications, getAchievements } from "@/lib/data"
import { ExperienceCard } from "@/components/experience-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SubtleBackground } from "@/components/subtle-background"
import { GradientHeading } from "@/components/gradient-heading"
import { GraduationCap, BookOpen } from "lucide-react"

export default function WorkPage() {
  const workExperience = getWorkExperience()
  const education = getEducation()
  const publications = getPublications()
  const achievements = getAchievements()

  return (
    <div className="container py-12 relative">
      <SubtleBackground />

      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <GradientHeading text="Work & Research" className="text-4xl md:text-5xl font-bold mb-4" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          My professional journey across software development, IoT, and research.
        </p>
      </div>

      <div className="space-y-16">
        {/* Work Experience */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {workExperience.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </section>
        
        {/* Achivements */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Achivements</h2>
          <div className="space-y-6">
            {achievements.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-md">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="font-heading">{edu.title}</CardTitle>
                      <CardDescription>
                        {edu.organizer} • {edu.location} • {edu.date}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


        {/* Education */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-md">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="font-heading">{edu.degree}</CardTitle>
                      <CardDescription>
                        {edu.institution} • {edu.location} • {edu.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-md">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="font-heading">{pub.title}</CardTitle>
                      <CardDescription>
                        {pub.publisher} • {pub.year}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Read Publication
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
