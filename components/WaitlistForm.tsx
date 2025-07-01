'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Mail, User, ChevronDown, Loader2 } from 'lucide-react'
import { WaitlistFormData, UseCaseOption } from '@/types'
import { submitToSupabase } from '@/lib/supabase'
import { submitToEmailJS, submitToMockAPI } from '@/lib/emailjs'

const useCaseOptions: UseCaseOption[] = [
  {
    value: 'rent',
    label: 'I want to rent GPTs',
    description: 'Access specialized AI assistants for specific tasks'
  },
  {
    value: 'share',
    label: 'I want to share my GPTs',
    description: 'Monetize your custom AI assistants'
  },
  {
    value: 'both',
    label: 'Both',
    description: 'Interested in both renting and sharing GPTs'
  }
]

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset
  } = useForm<WaitlistFormData>({
    defaultValues: {
      use_case: 'rent'
    }
  })

  const watchedUseCase = watch('use_case')
  const selectedOption = useCaseOptions.find(option => option.value === watchedUseCase)

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true)

    try {
      let result

      // Try Supabase first, then EmailJS, then mock API as fallback
      try {
        result = await submitToSupabase(data)
      } catch (supabaseError) {
        console.log('Supabase not available, trying EmailJS...')
        try {
          result = await submitToEmailJS(data)
        } catch (emailJSError) {
          console.log('EmailJS not available, using mock API...')
          result = await submitToMockAPI(data)
        }
      }

      if (result.success) {
        toast.success(result.message)
        reset()
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name (Optional)
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              {...register('name')}
              type="text"
              id="name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              placeholder="Enter your name"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              type="email"
              id="email"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-400 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
              placeholder="Enter your email"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Use Case Dropdown */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            What interests you most? *
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-3 text-left border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white flex justify-between items-center"
            >
              <div>
                <div className="font-medium text-gray-900">{selectedOption?.label}</div>
                <div className="text-sm text-gray-500">{selectedOption?.description}</div>
              </div>
              <ChevronDown 
                className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                  isDropdownOpen ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                {useCaseOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setValue('use_case', option.value)
                      setIsDropdownOpen(false)
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors duration-150 ${
                      watchedUseCase === option.value ? 'bg-blue-50 text-blue-700' : ''
                    }`}
                  >
                    <div className="font-medium">{option.label}</div>
                    <div className="text-sm text-gray-500">{option.description}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin h-5 w-5" />
              <span>Joining Waitlist...</span>
            </>
          ) : (
            <span>Join the Waitlist</span>
          )}
        </button>
      </form>

      {/* Additional Info */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>We'll never spam you. Unsubscribe at any time.</p>
        <p className="mt-1">
          By joining, you agree to our{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
} 