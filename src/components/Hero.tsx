'use client';

import { motion } from 'framer-motion';
import { Search, Building2, TrendingUp, Banknote } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const stats = [
  { icon: Building2, value: '28+', label: 'Premium Properties' },
  { icon: TrendingUp, value: '6.2%', label: 'Average ROI' },
  { icon: Banknote, value: 'From AED 600,000', label: 'Starting Price' },
];

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  function handleSearch() {
    const params = query.trim() ? `?search=${encodeURIComponent(query.trim())}` : '';
    router.push(`/properties${params}`);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSearch();
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.70), rgba(0,0,0,0.40)), url(https://images.unsplash.com/photo-1512453913323-e52341c81573?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl mx-auto">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#C6A55C]/60 text-[#C6A55C] text-sm font-medium tracking-wide"
        >
          Premium Dubai Real Estate
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          Find Your Dream Property in Dubai
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10"
        >
          Discover luxury living in the world&apos;s most iconic city. Tax-free investment with world-class returns.
        </motion.p>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex w-full max-w-2xl items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-2"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search by area, developer, or property type..."
            className="flex-1 bg-transparent text-white placeholder-gray-400 text-sm px-4 outline-none"
          />
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 bg-[#C6A55C] hover:bg-[#D4B978] transition-colors text-black font-semibold text-sm px-5 py-2.5 rounded-full"
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="mx-auto max-w-4xl px-4 pb-10">
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/20 bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="flex items-center gap-3 px-8 py-5 w-full md:w-auto justify-center"
                >
                  <Icon className="w-5 h-5 text-[#C6A55C] shrink-0" />
                  <div className="text-left">
                    <p className="text-[#C6A55C] font-bold text-lg leading-tight">{stat.value}</p>
                    <p className="text-white text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
