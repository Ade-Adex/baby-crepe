// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-center bg-background px-4 sm:px-6">
      <div className="text-center space-y-6 max-w-lg sm:max-w-2xl">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
           Welcome to{' '}
          <span className="font-bold text-button-bg">
            Baby Crepe
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-2xl mx-auto px-2">
          Your gateway to effortless lottery management and insights.
        </p>

        {/* Action Button */}
        <Link
          href="/dashboard"
          className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 mt-6 text-base sm:text-lg font-semibold text-white bg-primary rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Go to Dashboard 🚀
        </Link>
      </div>
    </main>
  )
}
