import Image from "next/image"
import { getPersonalData } from "@/lib/data"
import { SubtleBackground } from "@/components/subtle-background"
import { GradientHeading } from "@/components/gradient-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const personalData = getPersonalData()

  return (
    <div className="container py-12 relative">
      <SubtleBackground />

      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <GradientHeading text="About Me" className="text-4xl md:text-5xl font-bold mb-4" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          The story behind my approach to technology and creation.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-primary/5">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Alex+Morgan"
                alt="Profile"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading">{personalData.name}</h2>
              <p className="text-muted-foreground">{personalData.tagline}</p>

              <div className="pt-4 space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personalData.skills.technical.slice(0, 6).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Conceptual Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personalData.skills.conceptual.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 font-heading">My Approach</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="whitespace-pre-line">{personalData.longBio}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 font-heading">Core Principles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Thoughtful Design</h3>
                  <p className="text-muted-foreground">
                    I believe in taking the time to understand problems deeply before crafting solutions. This means
                    considering not just what works technically, but what works for people.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Clarity & Simplicity</h3>
                  <p className="text-muted-foreground">
                    The best solutions are often the simplest ones. I strive to create technology that's clear in its
                    purpose and simple to use, even when solving complex problems.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">User-Centered</h3>
                  <p className="text-muted-foreground">
                    Technology should serve people, not the other way around. I design with real human needs and
                    experiences at the center of the process.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    The technology landscape is always evolving, and so am I. I'm committed to continuous learning and
                    improvement in both technical skills and design thinking.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 font-heading">Guiding Quotes</h2>
            <div className="space-y-6">
              {personalData.quotes.map((quote, index) => (
                <blockquote key={index} className="border-l-4 border-primary pl-4 italic">
                  "{quote}"
                </blockquote>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
