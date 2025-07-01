import { createClient } from '@supabase/supabase-js'
import { WaitlistFormData, SubmissionResponse } from '@/types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let supabase: any = null

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export async function submitToSupabase(data: WaitlistFormData): Promise<SubmissionResponse> {
  if (!supabase) {
    throw new Error('Supabase is not configured')
  }

  try {
    // Check if email already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', data.email)
      .single()

    if (existingUser) {
      return {
        success: false,
        message: 'This email is already on our waitlist!'
      }
    }

    // Insert new entry
    const { data: insertData, error: insertError } = await supabase
      .from('waitlist')
      .insert([{
        name: data.name || null,
        email: data.email,
        use_case: data.use_case,
        created_at: new Date().toISOString()
      }])
      .select()

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      throw new Error('Failed to add to waitlist')
    }

    return {
      success: true,
      message: 'Successfully added to waitlist!',
      data: insertData
    }
  } catch (error) {
    console.error('Supabase error:', error)
    return {
      success: false,
      message: 'Failed to add to waitlist. Please try again.'
    }
  }
}

export { supabase } 