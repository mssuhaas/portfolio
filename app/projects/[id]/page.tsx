import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProjectById, getFeaturedProjects } from "@/lib/data"
import { ProjectCard } from "@/components/project-card"
import { cn } from "@/lib/utils"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  // Get other projects for the "More Projects" section
  const featuredProjects = getFeaturedProjects()
    .filter((p) => p.id !== params.id)
    .slice(0, 3)

  return (
    <div className="container py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/projects" className="inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-8">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <div className={cn("absolute inset-0 opacity-20 bg-gradient-to-br", project.color)} />
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground whitespace-pre-line">
                {project.longDescription || project.description}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="bg-muted/40 rounded-lg p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Year</p>
                  <p className="font-medium">{project.year}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Category</p>
                  <p className="font-medium">{project.tags[0]}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Links</h3>
              <div className="flex flex-col gap-3">
                {project.links.github && (
                  <Button variant="outline" asChild className="w-full justify-start">
                    <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Link>
                  </Button>
                )}
                {project.links.live && (
                  <Button asChild className="w-full justify-start">
                    <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Live Project
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Projects Section */}
      <div className="mt-24">
        <h2 className="text-2xl font-bold mb-8">More Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
