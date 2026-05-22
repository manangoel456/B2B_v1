import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar, ChevronRight } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import AnimatedSection from "@/components/shared/AnimatedSection";

function renderContent(markdown: string): string {
  return markdown
    .replace(/### (.*)/g, "<h3>$1</h3>")
    .replace(/## (.*)/g, "<h2>$1</h2>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/^- (.*)/gm, "<li>$1</li>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br/>");
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={`https://barekyne.in/blog/${slug}`}
        datePublished={post.date}
        author={post.author}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-warm-gray">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-charcoal font-medium line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 lg:py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Header */}
            <div className="text-center mb-12">
              <span className="px-3 py-1.5 bg-gold/10 text-xs font-semibold text-gold uppercase tracking-wider rounded-full">
                {post.category}
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal leading-tight">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-warm-gray">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-charcoal prose-p:text-warm-gray prose-p:leading-relaxed prose-strong:text-charcoal prose-li:text-warm-gray prose-h2:text-2xl prose-h3:text-xl prose-a:text-gold hover:prose-a:text-gold-dark">
              <div dangerouslySetInnerHTML={{ __html: renderContent(post.content) }} />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-beige">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-cream text-xs font-medium text-charcoal-light rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Related */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-heading font-bold text-charcoal text-center mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group block bg-white rounded-2xl border border-beige/50 p-6 hover:shadow-lg hover:border-gold/20 transition-all duration-300"
                  >
                    <span className="text-xs font-semibold text-gold uppercase">{rp.category}</span>
                    <h3 className="mt-2 text-lg font-heading font-bold text-charcoal group-hover:text-gold transition-colors leading-snug">
                      {rp.title}
                    </h3>
                    <p className="mt-2 text-sm text-warm-gray line-clamp-2">{rp.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
