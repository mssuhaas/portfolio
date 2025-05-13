import { getBlogPosts } from "@/lib/data"
import { BlogCard } from "@/components/blog-card"
import { SubtleBackground } from "@/components/subtle-background"
import { GradientHeading } from "@/components/gradient-heading"

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="container py-12 relative">
      <SubtleBackground />

      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <GradientHeading text="Blog" className="text-4xl md:text-5xl font-bold mb-4" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Thoughts and insights on software development, design, and technology.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
