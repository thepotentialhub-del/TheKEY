import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Blog Inmobiliario"
          subtitle="Noticias, consejos y tendencias del mercado en el Eje Cafetero."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
