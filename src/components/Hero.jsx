import React from 'react'

function Hero() {
  return (
    <section className="flex items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-secondary-light via-secondary-dark to-secondary">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Welcome to J-Mindock IT Geek</h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-xl mx-auto">
          Your hub for tech tutorials, articles, and the latest news.
        </p>
        <a
          href="#"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}

export default Hero
