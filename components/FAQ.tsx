'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is BookMyGPT?",
    answer: "BookMyGPT is a decentralized marketplace where you can rent specialized GPTs for specific tasks or share your custom GPTs with others to monetize your AI expertise."
  },
  {
    question: "When will the platform launch?",
    answer: "We're planning to launch in Q4 2025. Waitlist members will get early access 2 weeks before the public launch."
  },
  {
    question: "How much will it cost to rent GPTs?",
    answer: "Pricing will be set by individual GPT creators, typically ranging from $0.10 to $5.00 per conversation or task, depending on the complexity and specialization."
  },
  {
    question: "Can I share my own GPTs?",
    answer: "Absolutely! Once you join, you can upload your custom GPTs and set your own pricing. We take a small platform fee only when you make a sale."
  },
  {
    question: "What makes this different from ChatGPT?",
    answer: "While ChatGPT is general-purpose, BookMyGPT connects you with highly specialized GPTs trained for specific industries like legal advice, resume writing, coding help, and more."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use end-to-end encryption and don't store conversation data. Each interaction is private between you and the GPT creator."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about BookMyGPT
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have more questions?
          </p>
          <a
            href="mailto:amit@ratl.ai"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Contact us directly
            <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  )
} 