'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, DollarSign, PiggyBank } from 'lucide-react'
import { cn } from '@/lib/utils'

function formatWithCommas(value: number): string {
  if (isNaN(value)) return ''
  return value.toLocaleString('en-US')
}

function parseRawNumber(str: string): number {
  const raw = str.replace(/,/g, '').replace(/[^0-9.]/g, '')
  const parsed = parseFloat(raw)
  return isNaN(parsed) ? 0 : parsed
}

function formatAED(value: number): string {
  return `AED ${value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
}

interface ResultCardProps {
  icon: React.ReactNode
  label: string
  value: string
  delay?: number
}

function ResultCard({ icon, label, value, delay = 0 }: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-4 rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-5"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2A2A2A] text-[#C6A55C]">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-[#888888]">{label}</span>
        <span className="text-xl font-semibold text-[#C6A55C]">{value}</span>
      </div>
    </motion.div>
  )
}

export default function ROICalculator() {
  const [purchasePriceRaw, setPurchasePriceRaw] = useState(2_000_000)
  const [purchasePriceDisplay, setPurchasePriceDisplay] = useState('2,000,000')

  const [rentalYield, setRentalYield] = useState(6.5)

  const [serviceChargeRaw, setServiceChargeRaw] = useState(15_000)
  const [serviceChargeDisplay, setServiceChargeDisplay] = useState('15,000')

  const results = useMemo(() => {
    const annualRentalIncome = purchasePriceRaw * (rentalYield / 100)
    const netAnnualIncome = annualRentalIncome - serviceChargeRaw
    const fiveYearReturn = netAnnualIncome * 5
    const roiPercentage = purchasePriceRaw > 0 ? (netAnnualIncome / purchasePriceRaw) * 100 : 0
    return { annualRentalIncome, netAnnualIncome, fiveYearReturn, roiPercentage }
  }, [purchasePriceRaw, rentalYield, serviceChargeRaw])

  function handlePurchasePriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = parseRawNumber(e.target.value)
    setPurchasePriceRaw(raw)
    setPurchasePriceDisplay(raw === 0 ? '' : formatWithCommas(raw))
  }

  function handleServiceChargeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = parseRawNumber(e.target.value)
    setServiceChargeRaw(raw)
    setServiceChargeDisplay(raw === 0 ? '' : formatWithCommas(raw))
  }

  return (
    <section id="calculator" className="w-full bg-[#0A0A0A] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Investment{' '}
            <span className="text-[#C6A55C]">Calculator</span>
          </h2>
          <p className="mt-3 text-base text-[#888888]">
            Calculate your potential returns on Dubai real estate
          </p>
        </motion.div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* LEFT: Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 rounded-2xl border border-[#2A2A2A] bg-[#1A1A1A] p-6"
          >
            <h3 className="text-lg font-semibold text-white">Investment Details</h3>

            {/* Purchase Price */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#888888]">
                Purchase Price (AED)
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#888888]">
                  AED
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={purchasePriceDisplay}
                  onChange={handlePurchasePriceChange}
                  className={cn(
                    'w-full rounded-lg border border-[#2A2A2A] bg-[#0A0A0A] py-3 pl-12 pr-4',
                    'text-sm text-white placeholder-[#555555]',
                    'focus:border-[#C6A55C] focus:outline-none focus:ring-1 focus:ring-[#C6A55C]',
                    'transition-colors'
                  )}
                  placeholder="2,000,000"
                />
              </div>
            </div>

            {/* Rental Yield Slider */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-[#888888]">
                  Expected Rental Yield
                </label>
                <span className="rounded-md bg-[#2A2A2A] px-2 py-0.5 text-sm font-semibold text-[#C6A55C]">
                  {rentalYield.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={12}
                step={0.5}
                value={rentalYield}
                onChange={(e) => setRentalYield(parseFloat(e.target.value))}
                className={cn(
                  'h-2 w-full cursor-pointer appearance-none rounded-full bg-[#2A2A2A]',
                  '[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4',
                  '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full',
                  '[&::-webkit-slider-thumb]:bg-[#C6A55C] [&::-webkit-slider-thumb]:border-2',
                  '[&::-webkit-slider-thumb]:border-[#0A0A0A] [&::-webkit-slider-thumb]:cursor-pointer',
                  '[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4',
                  '[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full',
                  '[&::-moz-range-thumb]:bg-[#C6A55C] [&::-moz-range-thumb]:border-2',
                  '[&::-moz-range-thumb]:border-[#0A0A0A] [&::-moz-range-thumb]:cursor-pointer'
                )}
              />
              <div className="flex justify-between text-xs text-[#555555]">
                <span>3%</span>
                <span>12%</span>
              </div>
            </div>

            {/* Service Charge */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#888888]">
                Annual Service Charge (AED)
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#888888]">
                  AED
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={serviceChargeDisplay}
                  onChange={handleServiceChargeChange}
                  className={cn(
                    'w-full rounded-lg border border-[#2A2A2A] bg-[#0A0A0A] py-3 pl-12 pr-4',
                    'text-sm text-white placeholder-[#555555]',
                    'focus:border-[#C6A55C] focus:outline-none focus:ring-1 focus:ring-[#C6A55C]',
                    'transition-colors'
                  )}
                  placeholder="15,000"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Results */}
          <div className="flex flex-col gap-4">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-lg font-semibold text-white"
            >
              Projected Returns
            </motion.h3>

            <ResultCard
              icon={<DollarSign className="h-5 w-5" />}
              label="Annual Rental Income"
              value={formatAED(results.annualRentalIncome)}
              delay={0.05}
            />
            <ResultCard
              icon={<TrendingUp className="h-5 w-5" />}
              label="Net Annual Income"
              value={formatAED(results.netAnnualIncome)}
              delay={0.1}
            />
            <ResultCard
              icon={<PiggyBank className="h-5 w-5" />}
              label="5-Year Total Return"
              value={formatAED(results.fiveYearReturn)}
              delay={0.15}
            />
            <ResultCard
              icon={<Calculator className="h-5 w-5" />}
              label="ROI Percentage"
              value={`${results.roiPercentage.toFixed(2)}%`}
              delay={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
