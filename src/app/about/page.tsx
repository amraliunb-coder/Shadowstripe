import { getGlobalContent } from "@/lib/content";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const content = getGlobalContent();

  return (
    <div className="flex flex-col w-full pb-20">
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Shadowstripe</h1>
          <p className="text-xl text-brand-200 font-light">
            No fluff, no corporate jargon. Just serious, practical HR and risk support for businesses that want results.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg text-brand-500 max-w-none">
            <h2 className="text-2xl font-bold text-brand-900 mb-6">Our Narrative</h2>
            <p className="mb-6 leading-relaxed">
              {content.about.bio}
            </p>
            <p className="mb-10 leading-relaxed">
              We started Shadowstripe Consulting because we were tired of the standard consulting model: vague promises, thick reports that nobody reads, and glossy buzzwords. We believe that SMEs deserve the same caliber of risk and HR infrastructure as large enterprises, but delivered in a way that makes sense for their scale and reality.
            </p>

            <h2 className="text-2xl font-bold text-brand-900 mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {content.about.values.map((value: string) => (
                <div key={value} className="bg-brand-200/30 p-6 border border-brand-200 flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-900 mr-3 flex-shrink-0" />
                  <span className="font-bold text-brand-900 text-lg">{value}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-brand-900 mb-6">Professional Qualifications</h2>
            <ul className="space-y-4">
              {content.about.qualifications.map((qual: string) => (
                <li key={qual} className="flex items-center">
                  <div className="w-2 h-2 bg-brand-900 rounded-full mr-4" />
                  <span className="text-brand-900 font-medium">{qual}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
