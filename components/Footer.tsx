import { Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-900 mb-2">BookMyGPT</h3>
            <p className="text-gray-600 text-sm max-w-md">
              The future of AI rental is coming soon. Join the waitlist to be the first to know.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © {currentYear} BookMyGPT. Made with ❤️ for the AI community.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 