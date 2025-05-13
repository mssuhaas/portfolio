import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"

interface BlogCardProps {
  post: {
    id: string
    title: string
    excerpt: string
    image: string
    date: string
    readTime: string
    categories: string[]
  }
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-md dark:hover:shadow-primary/5 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.map((category) => (
            <Badge key={category} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
        <div className="flex items-center text-sm text-muted-foreground gap-4 mb-4">
          <div className="flex items-center">
            <CalendarDays className="mr-1 h-3.5 w-3.5" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-3.5 w-3.5" />
            {post.readTime}
          </div>
        </div>
        <Link
          href={`/blog/${post.id}`}
          className="text-primary font-medium hover:underline inline-flex items-center group/link mt-auto"
        >
          Read Article
          <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
