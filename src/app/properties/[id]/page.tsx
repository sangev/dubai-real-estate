import Link from 'next/link';
import { notFound } from 'next/navigation';
import { properties, formatPrice } from '@/data/properties';
import {
  ArrowLeft,
  Bed,
  Bath,
  Maximize,
  MapPin,
  Building2,
  TrendingUp,
  Calendar,
  Shield,
} from 'lucide-react';

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  const annualIncome = property.price * (property.rentalYield / 100);
  const goldenVisaEligible = property.price >= 2_000_000;

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      {/* Back link */}
      <Link
        href="/properties"
        className="inline-flex items-center gap-2 text-[#C6A55C] hover:text-[#d4b06a] mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Properties
      </Link>

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left column — Image Gallery */}
        <div>
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-96 lg:h-[500px] rounded-xl object-cover"
          />
          <div className="flex gap-2 mt-3">
            {property.images.slice(0, 3).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${property.title} - image ${index + 1}`}
                className={`h-24 w-24 rounded-lg object-cover cursor-pointer border-2 ${
                  index === 0 ? 'border-[#C6A55C]' : 'border-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right column — Details */}
        <div>
          {/* Status badge */}
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-3 ${
              property.status === 'Off-Plan'
                ? 'bg-[#C6A55C] text-black'
                : 'bg-green-600 text-white'
            }`}
          >
            {property.status}
          </span>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white mb-2">{property.title}</h1>

          {/* Developer */}
          <div className="flex items-center gap-2 text-[#C6A55C] mb-1">
            <Building2 className="w-4 h-4" />
            <span>{property.developer}</span>
          </div>

          {/* Area */}
          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <MapPin className="w-4 h-4" />
            <span>{property.area}</span>
          </div>

          {/* Price */}
          <div className="text-4xl font-bold text-[#C6A55C] mb-1">
            {formatPrice(property.price)}
          </div>
          <div className="text-gray-400 text-sm mb-2">
            AED {property.pricePerSqft.toLocaleString()} / sqft
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3">
              <Bed className="w-5 h-5 text-[#C6A55C]" />
              <div>
                <div className="text-xs text-gray-400">Bedrooms</div>
                <div className="text-white font-semibold">
                  {property.bedrooms === 0 ? 'Studio' : property.bedrooms}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3">
              <Bath className="w-5 h-5 text-[#C6A55C]" />
              <div>
                <div className="text-xs text-gray-400">Bathrooms</div>
                <div className="text-white font-semibold">{property.bathrooms}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3">
              <Maximize className="w-5 h-5 text-[#C6A55C]" />
              <div>
                <div className="text-xs text-gray-400">Size</div>
                <div className="text-white font-semibold">
                  {property.sqft.toLocaleString()} sqft
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3">
              <Calendar className="w-5 h-5 text-[#C6A55C]" />
              <div>
                <div className="text-xs text-gray-400">Completion</div>
                <div className="text-white font-semibold">{property.completionDate}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mt-6 leading-relaxed">{property.description}</p>

          {/* Amenities */}
          <div className="mt-6">
            <h3 className="text-white font-semibold mb-3">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-full px-3 py-1 text-sm text-gray-300"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Investment Highlights */}
      <div className="mt-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6">
        <h2 className="text-white font-bold text-xl mb-6">Investment Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Rental Yield */}
          <div className="flex items-start gap-3">
            <TrendingUp className="w-6 h-6 text-green-400 mt-1 shrink-0" />
            <div>
              <div className="text-gray-400 text-sm">Rental Yield</div>
              <div className="text-white text-2xl font-bold">{property.rentalYield}%</div>
            </div>
          </div>

          {/* Annual Income */}
          <div className="flex items-start gap-3">
            <TrendingUp className="w-6 h-6 text-[#C6A55C] mt-1 shrink-0" />
            <div>
              <div className="text-gray-400 text-sm">Annual Income</div>
              <div className="text-[#C6A55C] text-2xl font-bold">
                {formatPrice(Math.round(annualIncome))}
              </div>
            </div>
          </div>

          {/* Golden Visa */}
          <div className="flex items-start gap-3">
            <Shield
              className={`w-6 h-6 mt-1 shrink-0 ${
                goldenVisaEligible ? 'text-[#C6A55C]' : 'text-gray-500'
              }`}
            />
            <div>
              <div className="text-gray-400 text-sm">Golden Visa</div>
              <div
                className={`text-2xl font-bold ${
                  goldenVisaEligible ? 'text-[#C6A55C]' : 'text-gray-500'
                }`}
              >
                {goldenVisaEligible ? 'Eligible' : 'Not Eligible'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
