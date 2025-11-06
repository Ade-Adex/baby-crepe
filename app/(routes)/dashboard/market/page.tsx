'use client'
import React, { useState } from 'react'
import { marketData } from '@/app/data/marketData'

const categories = ['All', 'Crypto', 'Politics', 'Stock', 'Technology']

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
      <div className="flex justify-between gap-20 mb-6 items-center">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded-lg bg-[#F3E4D4] border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Category Tabs */}
        <div className="w-full md:w-1/2 flex gap-2 flex-wrap">
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
            <div className='flex gap-4'>
              <div>
                <h3 className="font-bold text-xs mb-1">{item.title}</h3>
                <p className="text-xs  mb-3">{item.description}</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium flex flex-col items-center justify-center">
                  <span className="font-bold">{item.chance}%</span> Chance
                </span>
              </div>
            </div>

            <div className="flex gap-2 mb-3">
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
