import Link from 'next/link';
import Hero from '@/components/Hero';
import PropertyGrid from '@/components/PropertyGrid';
import AreaGuides from '@/components/AreaGuides';
import ROICalculator from '@/components/ROICalculator';
import DeveloperShowcase from '@/components/DeveloperShowcase';
import { properties } from '@/data/properties';

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Featured Properties */}
      <section className="py-20">
        <PropertyGrid
          properties={properties.slice(0, 6)}
          title="Featured Properties"
          subtitle="Handpicked luxury properties across Dubai's most sought-after locations"
        />
        <div className="mt-10 flex justify-center">
          <Link
            href="/properties"
            className="inline-block rounded-md bg-[#C6A55C] px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D4B978]"
          >
            View All Properties
          </Link>
        </div>
      </section>

      {/* Area Guides */}
      <section className="py-20">
        <AreaGuides />
      </section>

      {/* ROI Calculator */}
      <section className="py-20">
        <ROICalculator />
      </section>

      {/* Developer Showcase */}
      <section className="py-20">
        <DeveloperShowcase />
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#C6A55C] bg-[#1A1A1A] px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Invest in Dubai?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-400">
            Explore our full portfolio of premium properties across Dubai&apos;s most exclusive neighborhoods.
          </p>
          <Link
            href="/properties"
            className="mt-8 inline-block rounded-md bg-[#C6A55C] px-10 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D4B978]"
          >
            Browse All Properties
          </Link>
          <p className="mt-6 text-xs font-medium text-[#C6A55C]">
            Tax-free investment · Golden Visa eligible · 5-8% rental yields
          </p>
        </div>
      </section>
    </main>
  );
}
