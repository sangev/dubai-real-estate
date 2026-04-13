'use client';

import { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';

export interface Filters {
  area: string;
  type: string;
  bedrooms: string;
  status: string;
  minPrice: number;
  maxPrice: number;
}

export const defaultFilters: Filters = {
  area: 'All',
  type: 'All',
  bedrooms: 'All',
  status: 'All',
  minPrice: 0,
  maxPrice: 0,
};

interface FilterBarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

const areas = ['All', 'Dubai Marina', 'Downtown Dubai', 'Palm Jumeirah', 'JBR', 'Business Bay', 'Dubai Hills'];
const types = ['All', 'Apartment', 'Villa', 'Penthouse', 'Townhouse'];
const bedrooms = ['All', 'Studio', '1', '2', '3', '4+'];
const statuses = ['All', 'Off-Plan', 'Ready'];

function Pill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-sm transition-colors whitespace-nowrap ${
        active
          ? 'bg-[#C6A55C] text-black font-medium'
          : 'bg-[#1A1A1A] text-gray-400 hover:bg-[#2A2A2A] border border-[#2A2A2A]'
      }`}
    >
      {label}
    </button>
  );
}

export default function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const update = (key: keyof Filters, value: string | number) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const isFiltered =
    filters.area !== 'All' ||
    filters.type !== 'All' ||
    filters.bedrooms !== 'All' ||
    filters.status !== 'All' ||
    filters.minPrice > 0 ||
    filters.maxPrice > 0;

  const filterContent = (
    <>
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Area</p>
        <div className="flex flex-wrap gap-1">
          {areas.map((a) => (
            <Pill key={a} label={a} active={filters.area === a} onClick={() => update('area', a)} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Type</p>
        <div className="flex flex-wrap gap-1">
          {types.map((t) => (
            <Pill key={t} label={t} active={filters.type === t} onClick={() => update('type', t)} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Bedrooms</p>
        <div className="flex flex-wrap gap-1">
          {bedrooms.map((b) => (
            <Pill key={b} label={b} active={filters.bedrooms === b} onClick={() => update('bedrooms', b)} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Status</p>
        <div className="flex flex-wrap gap-1">
          {statuses.map((s) => (
            <Pill key={s} label={s} active={filters.status === s} onClick={() => update('status', s)} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Price Range (AED)</p>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice || ''}
            onChange={(e) => update('minPrice', Number(e.target.value) || 0)}
            className="bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-lg px-3 py-1.5 text-sm w-32 placeholder-gray-500"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice || ''}
            onChange={(e) => update('maxPrice', Number(e.target.value) || 0)}
            className="bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-lg px-3 py-1.5 text-sm w-32 placeholder-gray-500"
          />
        </div>
      </div>

      {isFiltered && (
        <button
          onClick={() => onFilterChange(defaultFilters)}
          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 mt-2 md:mt-0"
        >
          <X className="w-3 h-3" /> Clear All
        </button>
      )}
    </>
  );

  return (
    <div className="sticky top-16 z-40 bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-[#2A2A2A] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="md:hidden flex items-center justify-between mb-3">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center gap-2 text-white text-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {isFiltered && <span className="w-2 h-2 rounded-full bg-[#C6A55C]" />}
          </button>
          {mobileOpen && (
            <button onClick={() => setMobileOpen(false)} className="text-gray-400">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {mobileOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-2">{filterContent}</div>
        )}

        <div className="hidden md:flex md:flex-wrap md:items-end md:gap-6">{filterContent}</div>
      </div>
    </div>
  );
}
