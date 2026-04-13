'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { properties } from '@/data/properties';
import FilterBar, { Filters, defaultFilters } from '@/components/FilterBar';
import PropertyGrid from '@/components/PropertyGrid';

function PropertiesContent() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const area = searchParams.get('area');
    const search = searchParams.get('search');
    if (area) {
      setFilters((prev) => ({ ...prev, area }));
    }
    if (search) {
      setSearchQuery(search);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Search query filter
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesSearch =
          property.title.toLowerCase().includes(q) ||
          property.area.toLowerCase().includes(q) ||
          property.developer.toLowerCase().includes(q) ||
          property.type.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }

      if (filters.area !== 'All' && property.area !== filters.area) return false;
      if (filters.type !== 'All' && property.type !== filters.type) return false;

      if (filters.bedrooms !== 'All') {
        if (filters.bedrooms === 'Studio' && property.bedrooms !== 0) return false;
        if (filters.bedrooms === '4+' && property.bedrooms < 4) return false;
        if (
          filters.bedrooms !== 'Studio' &&
          filters.bedrooms !== '4+' &&
          property.bedrooms !== Number(filters.bedrooms)
        )
          return false;
      }

      if (filters.status !== 'All' && property.status !== filters.status) return false;
      if (filters.minPrice > 0 && property.price < filters.minPrice) return false;
      if (filters.maxPrice > 0 && property.price > filters.maxPrice) return false;

      return true;
    });
  }, [filters, searchQuery]);

  return (
    <>
      <div className="pt-24 pb-8 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white">
          {searchQuery ? `Results for "${searchQuery}"` : 'Dubai Properties'}
        </h1>
        <p className="text-gray-400 mt-2">
          Showing {filteredProperties.length} of {properties.length} properties
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="ml-3 text-[#C6A55C] hover:underline text-sm"
            >
              Clear search
            </button>
          )}
        </p>
      </div>

      <FilterBar filters={filters} onFilterChange={setFilters} />

      <section className="py-12">
        <PropertyGrid properties={filteredProperties} />
      </section>
    </>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}
