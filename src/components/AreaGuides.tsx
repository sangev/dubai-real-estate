'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { areas } from '@/data/areas';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AreaGuides() {
  return (
    <section id="areas" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Explore Dubai&apos;s Premier Neighborhoods
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Discover the best areas for investment and lifestyle
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {areas.map((area) => (
            <motion.div key={area.id} variants={cardVariants}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Link
                  href={`/properties?area=${encodeURIComponent(area.name)}`}
                  className="group relative block h-80 rounded-xl overflow-hidden"
                >
                  {/* Background image */}
                  <img
                    src={area.image}
                    alt={area.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {area.name}
                    </h3>

                    {/* Stat pills */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-[#C6A55C] bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
                        AED {area.avgPricePerSqft.toLocaleString()}/sqft
                      </span>
                      <span className="text-xs text-[#C6A55C] bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
                        {area.avgRentalYield}% yield
                      </span>
                    </div>

                    <p className="text-sm text-gray-300">
                      {area.propertyCount} Properties Available
                    </p>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
