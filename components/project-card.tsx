import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    links: {
      live?: string
      github?: string
    }
    color: string
    year: number
  }
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden group transition-all duration-300 hover:shadow-md dark:hover:shadow-primary/5",
        featured ? "md:col-span-2 lg:col-span-1" : "",
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br",
            project.color,
          )}
        />
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            {project.year}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6 flex flex-col h-[calc(100%-56.25%)]">
        <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
        <div className="flex gap-2 mt-auto">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/projects/${project.id}`}>Details</Link>
          </Button>
          {project.links.github && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-3.5 w-3.5" />
                Code
              </Link>
            </Button>
          )}
          {project.links.live && (
            <Button size="sm" asChild>
              <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                <ArrowUpRight className="mr-1 h-3.5 w-3.5" />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
