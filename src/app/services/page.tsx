import { getGlobalContent } from "@/lib/content";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Settings, Users, FileText } from "lucide-react";

export default function Services() {
  const content = getGlobalContent();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'hr-infrastructure': return <Settings className="w-10 h-10 mb-6 text-brand-900" />;
      case 'risk-management': return <ShieldCheck className="w-10 h-10 mb-6 text-brand-900" />;
      case 'crisis-support': return <Users className="w-10 h-10 mb-6 text-brand-900" />;
      case 'compliance-audit': return <FileText className="w-10 h-10 mb-6 text-brand-900" />;
      default: return <Settings className="w-10 h-10 mb-6 text-brand-900" />;
    }
  };

  return (
    <div className="flex flex-col w-full pb-20">
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-brand-200 font-light">
            Modular, effective solutions for HR infrastructure and risk management.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.services.map((service: any) => (
              <div key={service.id} className="border border-brand-200 p-10 bg-white hover:border-brand-500 transition-colors flex flex-col h-full">
                {getServiceIcon(service.id)}
                <h2 className="text-2xl font-bold text-brand-900 mb-4">{service.title}</h2>
                <p className="text-brand-500 mb-8 flex-grow text-lg">
                  {service.description}
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-brand-900 font-bold hover:text-brand-500 transition-colors"
                >
                  Discuss this service <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
