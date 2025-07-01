'use client'

import { useRef } from 'react'
import HeroSection from '@/components/HeroSection'
import WaitlistForm from '@/components/WaitlistForm'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import Timeline from '@/components/Timeline'
import { CheckCircle, Users, Zap, Globe } from 'lucide-react'

export default function WaitlistPage() {
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onScrollToForm={scrollToForm} />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BookMyGPT?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The first decentralized marketplace that connects GPT creators with users who need specialized AI assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert GPTs
              </h3>
              <p className="text-gray-600 text-sm">
                Access specialized AI assistants created by domain experts
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Instant Access
              </h3>
              <p className="text-gray-600 text-sm">
                Rent GPTs on-demand, pay only for what you use
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Decentralized
              </h3>
              <p className="text-gray-600 text-sm">
                Direct peer-to-peer transactions, no middleman fees
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600 text-sm">
                Verified GPTs with ratings and reviews from the community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section ref={formRef} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join the Revolution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be among the first to experience the future of AI rental. Get exclusive early access and special pricing.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Form */}
            <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Early Access
                  </h3>
                  <p className="text-gray-600">
                    Join thousands of others waiting for launch
                  </p>
                </div>
                <WaitlistForm />
              </div>
            </div>

            {/* Benefits */}
            <div className="flex-1 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Exclusive Beta Access
                  </h4>
                  <p className="text-gray-600">
                    Be the first to test our platform before public launch
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Special Launch Pricing
                  </h4>
                  <p className="text-gray-600">
                    Get 50% off all GPT rentals for your first month
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Priority Support
                  </h4>
                  <p className="text-gray-600">
                    Direct line to our team for questions and feedback
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Creator Benefits
                  </h4>
                  <p className="text-gray-600">
                    Zero platform fees for the first 6 months when sharing your GPTs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  )
} 