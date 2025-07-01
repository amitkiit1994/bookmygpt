import { CheckCircle, Clock, Rocket, Users } from 'lucide-react'

const timelineItems = [
  {
    title: "Waitlist Opens",
    description: "Collecting early adopters and gathering feedback",
    status: "completed",
    date: "July 2025",
    icon: Users
  },
  {
    title: "Beta Testing",
    description: "Private beta with waitlist members, testing core features",
    status: "current",
    date: "Q3 2025",
    icon: Clock
  },
  {
    title: "Platform Launch",
    description: "Public launch with 100+ specialized GPTs ready to rent",
    status: "upcoming",
    date: "Q4 2025",
    icon: Rocket
  },
  {
    title: "Mobile App",
    description: "iOS and Android apps for on-the-go GPT access",
    status: "upcoming",
    date: "Q1 2026",
    icon: CheckCircle
  }
]

export default function Timeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Launch Roadmap
          </h2>
          <p className="text-xl text-gray-600">
            Here's what's coming and when you can expect it
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Icon */}
                  <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                    item.status === 'completed' ? 'bg-green-500' :
                    item.status === 'current' ? 'bg-blue-500' : 'bg-gray-300'
                  }`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <div className={`text-sm font-medium mb-1 ${
                        item.status === 'completed' ? 'text-green-600' :
                        item.status === 'current' ? 'text-blue-600' : 'text-gray-500'
                      }`}>
                        {item.date}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                      {item.status === 'current' && (
                        <div className="mt-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            In Progress
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Want to stay updated on our progress?
          </p>
          <p className="text-sm text-gray-500">
            Waitlist members get exclusive updates and early access to each milestone.
          </p>
        </div>
      </div>
    </section>
  )
} 