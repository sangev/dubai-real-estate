'use client';

import { motion } from 'framer-motion';
import { Property } from '@/data/properties';
import PropertyCard from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
  title?: string;
  subtitle?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PropertyGrid({ properties, title, subtitle }: PropertyGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4">
      {(title || subtitle) && (
        <div className="mb-8">
          {title && <h2 className="text-3xl font-bold text-white">{title}</h2>}
          {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
        </div>
      )}

      {properties.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7m-9 5v6h4v-6m-4 0H7m10 0h-2m2 0v6h-4v-6"
            />
          </svg>
          <span className="text-lg">No properties found</span>
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {properties.map((property) => (
            <motion.div key={property.id} variants={itemVariants}>
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
