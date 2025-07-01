import { createClient } from '@supabase/supabase-js'
import { WaitlistFormData, SubmissionResponse } from '@/types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let supabase: any = null

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export async function submitToSupabase(data: WaitlistFormData): Promise<SubmissionResponse> {
  console.log('🔧 Supabase Debug - Environment check:')
  console.log('- URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log('- Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  console.log('- Supabase client:', !!supabase)

  if (!supabase) {
    console.error('❌ Supabase client not initialized')
    throw new Error('Supabase is not configured')
  }

  try {
    console.log('📧 Checking for existing email:', data.email)
    
    // Check if email already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', data.email)
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('❌ Email check error:', checkError)
      throw new Error(`Email check failed: ${checkError.message}`)
    }

    if (existingUser) {
      console.log('⚠️ Email already exists')
      return {
        success: false,
        message: 'This email is already on our waitlist!'
      }
    }

    console.log('✅ Email is new, inserting data...')

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
      console.error('❌ Supabase insert error:', insertError)
      throw new Error(`Insert failed: ${insertError.message}`)
    }

    console.log('🎉 Successfully inserted:', insertData)
    return {
      success: true,
      message: 'Successfully added to waitlist!',
      data: insertData
    }
  } catch (error) {
    console.error('💥 Supabase error details:', error)
    return {
      success: false,
      message: `Failed to add to waitlist: ${error instanceof Error ? error.message : 'Unknown error'}`
    }
  }
}

export { supabase } 