'use client'
import React, { useState } from 'react'
import { marketData } from '@/app/data/marketData'

const categories = ['All', 'Crypto', 'Politics', 'Stock', 'Technology']

// Simple reusable half-circle gauge
const ChanceGauge = ({ percentage }: { percentage: number }) => {
  const radius = 32
  const circumference = Math.PI * radius
  const greenLength = (percentage / 100) * circumference
  const redLength = circumference - greenLength

  return (
    <svg
      width="60"
      height="35"
      viewBox="0 0 80 1"
      className="overflow-visible"
    >
      {/* Background base arc */}
      <path
        d="M10 10 A30 30 0 0 1 70 10"
        fill="transparent"
        stroke="#e5e7eb"
        strokeWidth="6"
      />

      {/* Green arc (chance portion) */}
      <path
        d="M10 10 A30 30 0 0 1 70 10"
        fill="transparent"
        stroke="#16a34a"
        strokeWidth="6"
        strokeDasharray={`${greenLength} ${circumference}`}
        strokeLinecap="round"
      />

      {/* Red arc (remaining portion) */}
      <path
        d="M10 10 A30 30 0 0 1 70 10"
        fill="transparent"
        stroke="#ef4444"
        strokeWidth="6"
        strokeDasharray={`${redLength} ${circumference}`}
        strokeDashoffset={-greenLength}
        strokeLinecap="round"
      />
    </svg>
  )
}



const MarketPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = marketData.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 mb-6 items-center">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded-lg bg-[#F3E4D4] border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Category Tabs */}
        <div className="w-full md:w-1/2 flex gap-2 md:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-1 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-orange-400 text-white'
                  : 'text-gray-700 hover:bg-button-bg/30 border border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="border border-neutral-200 bg-[#F3E4D4] rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex gap-2">
              <div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs mb-3">{item.description}</p>
              </div>

              {/* Gauge */}
              <div className="flex flex-col items-center relative w-16">
                <div className="absolute top-3 left-0 ">
                  <ChanceGauge percentage={item.chance} />
                  <span className="text-xs font-semibold absolute top-4 left-3 flex flex-col items-center">
                    {item.chance}% <span className="font-normal text-[10px]">Chance</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mb-3 mt-2">
              <button className="flex-1 bg-[#C2EAC7] text-green-700 py-1.5 rounded-md text-xs font-medium">
                Yes
              </button>
              <button className="flex-1 bg-[#F6ADA1] text-red-700 py-1.5 rounded-md text-xs font-medium">
                No
              </button>
            </div>

            <div className="flex justify-between text-xs">
              <span>{item.volume}</span>
              <span>{item.votes} chance</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarketPage
