'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardHome() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to /dashboard/market when /dashboard is visited
    router.replace('/dashboard/market')
  }, [router])

  return (
    <div className="flex items-center justify-center h-full text-gray-400">
      📊 Redirecting to Market...
    </div>
  )
}
