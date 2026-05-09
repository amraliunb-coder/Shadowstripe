'use client';
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col w-full pb-20">
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact & Booking</h1>
          <p className="text-xl text-brand-200 font-light">
            Let's discuss how we can secure your HR infrastructure and mitigate risk.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column - Form */}
            <div>
              <h2 className="text-3xl font-bold text-brand-900 mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-900 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-900" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-900 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-900" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-brand-900 mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-3 border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-900" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-900 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-3 border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-900 resize-none" 
                    required 
                  ></textarea>
                </div>
                <button type="submit" className="bg-brand-900 text-white px-8 py-4 font-medium text-sm tracking-[0.12em] uppercase hover:bg-brand-900/90 transition-colors w-full sm:w-auto">
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Right Column - Booking & Info */}
            <div className="space-y-12">
              <div className="bg-brand-200/30 p-10 border border-brand-200">
                <h3 className="text-2xl font-bold text-brand-900 mb-4">Book an Introductory Call</h3>
                <p className="text-brand-500 mb-6">
                  Schedule a 15-minute consultation directly on our calendar. No commitment required.
                </p>
                <div className="bg-white border border-brand-200 p-8 flex items-center justify-center min-h-[300px]">
                  {/* Placeholder for calendar widget (Calendly, etc.) */}
                  <div className="text-center">
                    <p className="text-brand-500 font-medium mb-4">[ Calendar Widget Placeholder ]</p>
                    <button className="border-2 border-brand-900 text-brand-900 px-6 py-2 font-bold hover:bg-brand-900 hover:text-white transition-colors">
                      Open Calendar
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-900 mb-6">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Mail className="w-6 h-6 text-brand-900 mr-4 flex-shrink-0" />
                    <span className="text-brand-500">hello@shadowstripeconsulting.com</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-6 h-6 text-brand-900 mr-4 flex-shrink-0" />
                    <span className="text-brand-500">+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-6 h-6 text-brand-900 mr-4 flex-shrink-0" />
                    <span className="text-brand-500">100 Business Parkway, Suite 200<br/>Metropolis, NY 10001</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
