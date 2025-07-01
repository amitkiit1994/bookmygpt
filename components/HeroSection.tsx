'use client'

import { ArrowDown, Sparkles, Brain, Users } from 'lucide-react'

interface HeroSectionProps {
  onScrollToForm: () => void
}

export default function HeroSection({ onScrollToForm }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm animate-fade-in">
          <Sparkles className="h-4 w-4 text-purple-600" />
          <span className="text-sm font-medium text-gray-700">
            The Future of AI Rental
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
          Join the{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            BookMyGPT
          </span>{' '}
          Waitlist
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
          Be the first to rent or share personalized GPTs — from resume coaches to legal advisors.
        </p>

        {/* Value Propositions */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up animation-delay-400">
          <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
            <Brain className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700 font-medium">Specialized AI Assistants</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-gray-700 font-medium">Decentralized Marketplace</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
            <Sparkles className="h-5 w-5 text-pink-600" />
            <span className="text-gray-700 font-medium">Monetize Your GPTs</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onScrollToForm}
          className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-slide-up animation-delay-600"
        >
          <span className="flex items-center space-x-2">
            <span>Get Early Access</span>
            <ArrowDown className="h-5 w-5 group-hover:animate-bounce" />
          </span>
        </button>

        {/* Stats Preview */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center animate-fade-in animation-delay-800">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
            <div className="text-2xl font-bold text-gray-900">1000+</div>
            <div className="text-sm text-gray-600">GPTs Ready</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
            <div className="text-2xl font-bold text-gray-900">24/7</div>
            <div className="text-sm text-gray-600">Availability</div>
          </div>
        </div>
      </div>
    </div>
  )
} 