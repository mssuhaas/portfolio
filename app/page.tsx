import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GradientHeading } from "@/components/gradient-heading"
import { SubtleBackground } from "@/components/subtle-background"
import { ProjectCard } from "@/components/project-card"
import { getPersonalData, getFeaturedProjects } from "@/lib/data"

export default function Home() {
  const personalData = getPersonalData()
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="flex flex-col gap-24 py-8 md:py-16 overflow-hidden">
      <SubtleBackground />

      {/* Hero Section */}
      <section className="container relative pt-8 md:pt-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <GradientHeading
            text={`Hello, I'm ${personalData.name}`}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          />

          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">{personalData.title}</h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{personalData.tagline}</p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/projects">Explore My Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 md:mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 pointer-events-none" />
          <div className="flex justify-center items-center overflow-hidden max-h-[50vh]">
            <Image
              src="/placeholder.svg?height=800&width=1600&text=Workspace"
              alt="Workspace"
              width={1600}
              height={800}
              className="w-full object-cover rounded-lg opacity-80"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Approach</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <blockquote className="text-xl italic font-heading">"{personalData.quotes[1]}"</blockquote>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <blockquote className="text-xl italic font-heading">"{personalData.quotes[2]}"</blockquote>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 space-y-6 text-muted-foreground">
            <p>{personalData.bio}</p>
          </div>

          <div className="mt-8 text-center">
            <Button variant="link" asChild>
              <Link href="/about" className="inline-flex items-center">
                Learn more about my approach
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My work spans multiple disciplines, combining technical skills with thoughtful design.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Software Development</h3>
              <p className="text-muted-foreground">
                Creating clean, maintainable code that solves real problems. I focus on building software that's both
                powerful and easy to understand.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">IoT Systems</h3>
              <p className="text-muted-foreground">
                Designing connected devices that bridge the digital and physical worlds. I create IoT solutions that
                integrate seamlessly into their environments.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Research & Analysis</h3>
              <p className="text-muted-foreground">
                Investigating complex problems and developing innovative solutions. I combine rigorous analysis with
                creative thinking to tackle challenging issues.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              A selection of my most thoughtful work that explores the intersection of technology and ideas.
            </p>
          </div>
          <Button asChild className="mt-4 md:mt-0">
            <Link href="/projects" className="inline-flex items-center">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Build Something Meaningful</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing new ideas, creative collaborations, or opportunities to create
            technology that matters.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button size="lg" asChild className="rounded-full">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full">
              <Link href="/projects">Explore My Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
