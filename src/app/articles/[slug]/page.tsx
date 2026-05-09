import { getArticleData, getSortedArticlesData } from "@/lib/content";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// For static export, we need to specify all dynamic routes
export async function generateStaticParams() {
  const articles = getSortedArticlesData();
  return articles.map((article: any) => ({
    slug: article.id,
  }));
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const articleData = await getArticleData(resolvedParams.slug);

  return (
    <div className="flex flex-col w-full pb-20">
      <section className="bg-brand-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/articles" className="inline-flex items-center text-brand-200 hover:text-white transition-colors mb-8 text-sm font-semibold uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
          </Link>
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-sm font-bold text-white uppercase tracking-wider">{articleData.category}</span>
            <span className="text-brand-500">|</span>
            <time className="text-sm text-brand-200">{new Date(articleData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{articleData.title}</h1>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div 
            className="prose prose-lg prose-slate max-w-none 
              prose-headings:text-brand-900 prose-headings:font-bold 
              prose-a:text-brand-900 prose-a:font-semibold 
              prose-p:text-brand-500 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} 
          />
        </div>
      </article>
    </div>
  );
}
