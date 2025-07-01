import emailjs from 'emailjs-com'
import { WaitlistFormData, SubmissionResponse } from '@/types'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export async function submitToEmailJS(data: WaitlistFormData): Promise<SubmissionResponse> {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error('EmailJS is not configured')
  }

  try {
    const templateParams = {
      name: data.name || 'Anonymous',
      email: data.email,
      use_case: data.use_case,
      timestamp: new Date().toISOString()
    }

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    return {
      success: true,
      message: 'Successfully added to waitlist!'
    }
  } catch (error) {
    console.error('EmailJS error:', error)
    return {
      success: false,
      message: 'Failed to add to waitlist. Please try again.'
    }
  }
}

// Mock submission for development/demo purposes
export async function submitToMockAPI(data: WaitlistFormData): Promise<SubmissionResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Simulate duplicate email check (20% chance)
  if (Math.random() < 0.2 && data.email.includes('duplicate')) {
    return {
      success: false,
      message: 'This email is already on our waitlist!'
    }
  }

  // Simulate success
  return {
    success: true,
    message: 'Successfully added to waitlist! We\'ll notify you when we launch.'
  }
} 