'use client';
import { useState } from "react";
import { Download, FileText } from "lucide-react";

export default function Resources() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent, resourceId: string) => {
    e.preventDefault();
    if (email) {
      setSubmitted(resourceId);
      // Simulate download
      setTimeout(() => {
        alert("Your download will begin shortly!");
        setSubmitted(null);
        setEmail("");
      }, 1000);
    }
  };

  const resources = [
    {
      id: "hr-checklist",
      title: "Comprehensive HR Compliance Checklist",
      description: "A definitive guide to ensuring your SME meets all legal HR requirements for the current year."
    },
    {
      id: "risk-assessment",
      title: "Risk Assessment Template",
      description: "A practical framework for identifying and scoring risks within your organization."
    },
    {
      id: "crisis-comms",
      title: "Crisis Communication Plan",
      description: "Step-by-step templates for communicating internally and externally during a crisis."
    }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Resources</h1>
          <p className="text-xl text-brand-200 font-light">
            Practical tools and templates you can implement in your business today.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="border border-brand-200 bg-white flex flex-col h-full">
                <div className="p-8 flex-grow border-b border-brand-200 bg-brand-200/20">
                  <FileText className="w-8 h-8 text-brand-900 mb-4" />
                  <h2 className="text-xl font-bold text-brand-900 mb-3">{resource.title}</h2>
                  <p className="text-brand-500 text-sm">
                    {resource.description}
                  </p>
                </div>
                <div className="p-8">
                  {submitted === resource.id ? (
                    <div className="text-brand-900 font-medium text-center py-2 flex items-center justify-center">
                      <Download className="w-5 h-5 mr-2 animate-bounce" /> Preparing download...
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleSubmit(e, resource.id)} className="flex flex-col gap-3">
                      <label htmlFor={`email-${resource.id}`} className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                        Email Address
                      </label>
                      <input 
                        id={`email-${resource.id}`}
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com" 
                        className="w-full px-4 py-2 border border-brand-200 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900"
                        required
                      />
                      <button 
                        type="submit" 
                        className="w-full bg-brand-900 text-white py-3 font-medium text-sm tracking-[0.12em] uppercase hover:bg-brand-900/90 transition-colors mt-2"
                      >
                        Download PDF
                      </button>
                    </form>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
