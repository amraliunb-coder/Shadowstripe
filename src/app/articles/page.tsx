import { getSortedArticlesData } from "@/lib/content";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Articles() {
  const articles = getSortedArticlesData();

  return (
    <div className="flex flex-col w-full pb-20">
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Articles & Insights</h1>
          <p className="text-xl text-brand-200 font-light">
            Practical perspectives on risk management, HR compliance, and SME growth.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {articles.length === 0 ? (
            <p className="text-brand-500 text-lg">No articles published yet. Check back soon.</p>
          ) : (
            <div className="space-y-12">
              {articles.map((article: any) => (
                <article key={article.id} className="border-b border-brand-200 pb-12 last:border-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm font-bold text-brand-900 uppercase tracking-wider">{article.category}</span>
                    <span className="text-brand-200">|</span>
                    <time className="text-sm text-brand-500">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  </div>
                  <h2 className="text-3xl font-bold text-brand-900 mb-4">
                    <Link href={`/articles/${article.id}`} className="hover:text-brand-500 transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-brand-500 text-lg mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/articles/${article.id}`} 
                    className="inline-flex items-center text-brand-900 font-bold hover:text-brand-500 transition-colors"
                  >
                    Read full article <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
