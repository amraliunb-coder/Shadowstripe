import { getGlobalContent } from "@/lib/content";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Settings, Users, FileText } from "lucide-react";

export default function Home() {
  const content = getGlobalContent();
  
  // Map icons to services by id
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'hr-infrastructure': return <Settings className="w-8 h-8 mb-4 text-brand-900" />;
      case 'risk-management': return <ShieldCheck className="w-8 h-8 mb-4 text-brand-900" />;
      case 'crisis-support': return <Users className="w-8 h-8 mb-4 text-brand-900" />;
      case 'compliance-audit': return <FileText className="w-8 h-8 mb-4 text-brand-900" />;
      default: return <Settings className="w-8 h-8 mb-4 text-brand-900" />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-brand-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-brand-200 mb-10 max-w-2xl mx-auto font-light">
            {content.hero.subtitle}
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-brand-900 px-8 py-4 font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Book a Call <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-brand-900 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.services.map((service: any) => (
              <div key={service.id} className="border border-brand-200 p-8 hover:shadow-lg transition-shadow bg-white">
                {getServiceIcon(service.id)}
                <h3 className="text-xl font-bold text-brand-900 mb-3">{service.title}</h3>
                <p className="text-brand-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-brand-200/30 border-y border-brand-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-brand-900 text-white p-10 md:p-14 text-center">
            <h2 className="text-3xl font-bold mb-4">Free HR Compliance Checklist</h2>
            <p className="text-brand-200 mb-8 text-lg">
              Ensure your business is protected. Download our comprehensive guide to SME compliance and risk management.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 text-brand-900 outline-none focus:ring-2 focus:ring-brand-500"
                required
              />
              <button 
                type="button" 
                className="bg-white text-brand-900 px-6 py-3 font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Get the Guide
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Experience/Credibility */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-brand-900 mb-8">15+ Years of Practical Expertise</h2>
          <p className="text-xl text-brand-500 leading-relaxed mb-12">
            {content.about.bio}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-brand-200">
            {content.about.qualifications.map((qual: string, idx: number) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-bold text-brand-900 text-lg mb-2">{qual.split(' ')[0]}</span>
                <span className="text-sm text-brand-500">{qual.substring(qual.indexOf(' ') + 1)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
