import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { getPersonalData } from "@/lib/data"

export default function Footer() {
  const personalData = getPersonalData()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="font-heading font-bold text-xl mb-4">{personalData.name}</div>
            <p className="text-muted-foreground max-w-md">{personalData.tagline}</p>
            <blockquote className="mt-4 pl-4 border-l-2 border-primary italic text-muted-foreground">
              "{personalData.quotes[0]}"
            </blockquote>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Explore</h3>
            <ul className="grid gap-2">
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-muted-foreground hover:text-primary transition-colors">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Connect</h3>
            <div className="flex gap-4">
              <Link
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link
                href={personalData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href={`mailto:${personalData.email}`} aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
            <p className="mt-4 text-muted-foreground">{personalData.email}</p>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {personalData.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-primary">care</span> and code
          </p>
        </div>
      </div>
    </footer>
  )
}
