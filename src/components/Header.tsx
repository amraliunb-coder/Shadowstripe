import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-brand-900 rounded-sm" />
          <span className="font-bold text-lg tracking-tight text-brand-900">Shadowstripe</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-500">
          <Link href="/about" className="hover:text-brand-900 transition-colors">About</Link>
          <Link href="/services" className="hover:text-brand-900 transition-colors">Services</Link>
          <Link href="/resources" className="hover:text-brand-900 transition-colors">Resources</Link>
          <Link href="/articles" className="hover:text-brand-900 transition-colors">Articles</Link>
          <Link href="/contact" className="hover:text-brand-900 transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center">
          <Link href="/contact" className="bg-brand-900 text-white px-4 py-2 text-sm font-medium rounded-sm hover:bg-brand-900/90 transition-colors">
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
