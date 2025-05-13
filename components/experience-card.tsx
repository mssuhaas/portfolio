import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

interface ExperienceCardProps {
  experience: {
    title: string
    company: string
    location: string
    period: string
    description: string
    achievements: string[]
    technologies: string[]
  }
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-md dark:hover:shadow-primary/5">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-md">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <CardTitle className="font-heading">{experience.title}</CardTitle>
            <CardDescription>
              {experience.company} • {experience.location} • {experience.period}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{experience.description}</p>

        <div>
          <h3 className="font-semibold mb-2 font-heading">Key Achievements:</h3>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {experience.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 font-heading">Technologies:</h3>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
