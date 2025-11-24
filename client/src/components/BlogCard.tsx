import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-primary uppercase tracking-wide">
          {post.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center text-slate-400 text-xs mb-3 font-medium">
          <Calendar className="w-3 h-3 mr-1" />
          {post.date}
        </div>
        
        <h3 className="text-xl font-heading font-bold text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-slate-600 text-sm mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        
        <Button variant="link" className="p-0 h-auto text-brand-accent font-bold self-start group-hover:translate-x-1 transition-transform">
          Leer artículo <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </motion.div>
  );
}
