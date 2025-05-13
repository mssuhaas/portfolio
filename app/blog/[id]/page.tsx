import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarDays, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getBlogPostById, getBlogPosts } from "@/lib/data"
import { BlogCard } from "@/components/blog-card"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostById(params.id)

  if (!post) {
    notFound()
  }

  // Get other posts for the "More Articles" section
  const morePosts = getBlogPosts()
    .filter((p) => p.id !== params.id)
    .slice(0, 3)

  return (
    <div className="container py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/blog" className="inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <Badge key={category} className="text-xs">
                {category}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center text-sm text-muted-foreground gap-4 mb-8">
            <div className="flex items-center">
              <CalendarDays className="mr-1 h-3.5 w-3.5" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-3.5 w-3.5" />
              {post.readTime}
            </div>
          </div>
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground whitespace-pre-line">{post.content}</p>
        </div>
      </article>

      {/* More Articles Section */}
      <div className="mt-24 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">More Articles</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {morePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
