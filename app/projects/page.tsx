import { getProjects } from "@/lib/data"
import { ProjectCard } from "@/components/project-card"
import { SubtleBackground } from "@/components/subtle-background"
import { GradientHeading } from "@/components/gradient-heading"

export default function ProjectsPage() {
  const projects = getProjects()

  return (
    <div className="container py-12 relative">
      <SubtleBackground />

      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <GradientHeading text="My Projects" className="text-4xl md:text-5xl font-bold mb-4" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A collection of thoughtful work spanning software development, IoT, and research.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
