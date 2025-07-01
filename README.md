# BookMyGPT Waitlist

A modern, responsive waitlist page for BookMyGPT.com - a decentralized AI rental marketplace.

## Features

- 🎨 **Modern Design** - Clean, responsive UI with Tailwind CSS
- 📝 **Smart Forms** - React Hook Form with validation
- 🔄 **Multiple Backends** - Supabase with EmailJS fallback
- 🚀 **Next.js 14** - App Router with TypeScript
- 📱 **Mobile First** - Fully responsive design
- 🎭 **Smooth Animations** - Beautiful transitions and micro-interactions
- 🔔 **Toast Notifications** - User-friendly feedback

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form
- **Backend**: Supabase (primary), EmailJS (fallback)
- **Language**: TypeScript
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Supabase and/or EmailJS credentials.

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000/waitlist](http://localhost:3000/waitlist)

## Environment Setup

### Option 1: Supabase (Recommended)

1. Create a new project at [Supabase](https://supabase.com)
2. Create a `waitlist` table with the following schema:
   ```sql
   CREATE TABLE waitlist (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT,
     email TEXT NOT NULL UNIQUE,
     use_case TEXT NOT NULL CHECK (use_case IN ('rent', 'share', 'both')),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```
3. Add your Supabase URL and anon key to `.env.local`

### Option 2: EmailJS (Fallback)

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up a service and email template
3. Add your EmailJS credentials to `.env.local`

### Option 3: Mock API (Development)

If neither Supabase nor EmailJS is configured, the form will use a mock API that simulates successful submissions.

## Project Structure

```
bookmygpt/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── waitlist/
│       └── page.tsx         # Main waitlist page
├── components/
│   ├── Footer.tsx           # Footer component
│   ├── HeroSection.tsx      # Hero section with CTA
│   └── WaitlistForm.tsx     # Form component
├── lib/
│   ├── emailjs.ts           # EmailJS integration
│   └── supabase.ts          # Supabase integration
├── types/
│   └── index.ts             # TypeScript definitions
└── package.json
```

## Customization

### Colors and Branding

Update the gradient colors in `tailwind.config.js` and component files to match your brand:

```javascript
// Example: Change primary colors
from-blue-600 to-purple-600  // Change to your brand colors
```

### Form Fields

Add or modify form fields in `components/WaitlistForm.tsx`:

```typescript
// Add new fields to the form schema
interface WaitlistFormData {
  name?: string;
  email: string;
  use_case: 'rent' | 'share' | 'both';
  // Add your custom fields here
}
```

### Use Cases

Modify the use case options in `components/WaitlistForm.tsx`:

```typescript
const useCaseOptions: UseCaseOption[] = [
  // Customize these options for your specific use case
]
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## Database Schema (Supabase)

```sql
-- Create the waitlist table
CREATE TABLE public.waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT,
    email TEXT NOT NULL UNIQUE,
    use_case TEXT NOT NULL CHECK (use_case IN ('rent', 'share', 'both')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone
CREATE POLICY "Enable insert for anonymous users" ON public.waitlist
    FOR INSERT WITH CHECK (true);

-- Create policy to allow select for authenticated users (optional)
CREATE POLICY "Enable read access for authenticated users" ON public.waitlist
    FOR SELECT USING (auth.role() = 'authenticated');
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or support, please contact:
- Email: hello@bookmygpt.com
- GitHub Issues: [Create an issue](https://github.com/yourusername/bookmygpt/issues) 