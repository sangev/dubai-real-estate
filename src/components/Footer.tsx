import Link from 'next/link';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'Areas', href: '/#areas' },
  { label: 'Calculator', href: '/#calculator' },
];

const areas = [
  'Dubai Marina',
  'Downtown Dubai',
  'Palm Jumeirah',
  'JBR',
  'Business Bay',
  'Dubai Hills',
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-[#2A2A2A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Building2 className="h-5 w-5 text-[#C6A55C]" />
              <span className="text-lg font-semibold text-[#C6A55C]">Dubai Properties</span>
            </Link>
            <p className="text-sm text-[#F5F5F5]/50 leading-relaxed">
              Your trusted partner for premium real estate in Dubai. Discover luxury villas,
              apartments, and commercial spaces across the emirate's finest locations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#C6A55C] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F5F5F5]/60 hover:text-[#C6A55C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#C6A55C] mb-4">
              Areas
            </h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area}>
                  <Link
                    href={`/properties?area=${encodeURIComponent(area)}`}
                    className="text-sm text-[#F5F5F5]/60 hover:text-[#C6A55C] transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#C6A55C] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#F5F5F5]/60">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-[#C6A55C]" />
                <span>info@dubaiproperties.ae</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#F5F5F5]/60">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-[#C6A55C]" />
                <span>+971 4 000 0000</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#F5F5F5]/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#C6A55C]" />
                <span>Level 14, Boulevard Plaza Tower 1, Downtown Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2A2A2A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-xs text-[#F5F5F5]/30">
            &copy; 2026 Dubai Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
