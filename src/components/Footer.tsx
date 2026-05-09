import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-brand-200 bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="Shadowstripe Logo" className="w-8 h-8 object-contain" />
            <div className="leading-tight">
              <strong className="block font-serif font-semibold text-lg tracking-wide text-brand-900">Shadowstripe</strong>
              <span className="block text-[0.65rem] tracking-[0.18em] uppercase text-brand-500">Consulting</span>
            </div>
          </Link>
          <p className="text-brand-500 text-sm max-w-sm">
            Professional HR and risk consultancy for small and medium businesses. No fluff, just practical expertise.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-brand-900">Company</h4>
          <ul className="space-y-2 text-sm text-brand-500">
            <li><Link href="/about" className="hover:text-brand-900 transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-brand-900 transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-brand-900 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-brand-900">Legal</h4>
          <ul className="space-y-2 text-sm text-brand-500">
            <li><Link href="#" className="hover:text-brand-900 transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-brand-900 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-brand-200 text-sm text-brand-500 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Shadowstripe Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}
