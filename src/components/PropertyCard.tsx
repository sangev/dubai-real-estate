'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize, TrendingUp } from 'lucide-react';
import { Property, formatPrice } from '@/data/properties';

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link
        href={`/properties/${property.id}`}
        className="group block rounded-xl overflow-hidden border border-[#2A2A2A] bg-[#1A1A1A]"
      >
        {/* Image area */}
        <div className="relative h-64 overflow-hidden rounded-t-xl">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const placeholder = target.nextElementSibling as HTMLElement | null;
              if (placeholder) placeholder.style.display = 'flex';
            }}
          />
          {/* Gray placeholder shown on image error */}
          <div
            className="hidden w-full h-full bg-[#2A2A2A] items-center justify-center absolute inset-0"
            aria-hidden="true"
          />

          {/* Top-left: price badge */}
          <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg">
            <span className="text-[#C6A55C] font-semibold text-sm">
              {formatPrice(property.price)}
            </span>
          </div>

          {/* Top-right: status badge */}
          <div className="absolute top-3 right-3">
            {property.status === 'Off-Plan' ? (
              <span className="bg-[#C6A55C] text-[#1A1A1A] text-xs font-semibold px-2.5 py-1 rounded-lg">
                Off-Plan
              </span>
            ) : (
              <span className="bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                Ready
              </span>
            )}
          </div>

          {/* Bottom-left: area badge */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
            <MapPin className="w-3.5 h-3.5 text-white" />
            <span className="text-white text-xs">{property.area}</span>
          </div>
        </div>

        {/* Content area */}
        <div className="p-5 bg-[#1A1A1A]">
          <h3 className="text-lg font-semibold text-white truncate">
            {property.title}
          </h3>
          <p className="text-sm text-[#C6A55C] mt-0.5">{property.developer}</p>

          {/* Specs row */}
          <div className="flex gap-4 text-gray-400 text-sm mt-3">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms === 0 ? 'Studio' : property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize className="w-4 h-4" />
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex justify-between mt-4 pt-4 border-t border-[#2A2A2A]">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-green-500 text-sm font-medium">
                ROI {property.rentalYield}%
              </span>
            </div>
            <span className="text-gray-400 text-sm">
              AED {property.pricePerSqft.toLocaleString()}/sqft
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
