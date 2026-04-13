'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { developers } from '@/data/developers';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function DeveloperShowcase() {
  return (
    <section className="py-20 px-4 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Trusted Developers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-gray-400 text-lg"
          >
            Partner with Dubai&apos;s most prestigious property developers
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex overflow-x-auto gap-6 pb-4 md:overflow-visible md:grid md:grid-cols-3 lg:grid-cols-5"
        >
          {developers.map((dev) => (
            <motion.div
              key={dev.id}
              variants={cardVariants}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 min-w-[250px] flex-shrink-0 md:min-w-0 md:flex-shrink"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-[#C6A55C]/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#C6A55C]">
                  {dev.name.charAt(0)}
                </span>
              </div>

              {/* Name + established */}
              <p className="text-lg font-semibold text-white mt-4 leading-snug">
                {dev.name}
              </p>
              <p className="text-sm text-gray-400">Est. {dev.established}</p>

              {/* Description */}
              <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                {dev.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-2 mt-4">
                <Building2 className="w-4 h-4 text-[#C6A55C] shrink-0" />
                <span className="text-sm text-gray-300">
                  {dev.projectCount}+ Projects
                </span>
              </div>

              {/* Notable projects */}
              <div className="flex flex-wrap gap-2 mt-3">
                {dev.notableProjects.slice(0, 3).map((project) => (
                  <span
                    key={project}
                    className="bg-[#2A2A2A] rounded-full px-3 py-1 text-xs text-gray-400"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
