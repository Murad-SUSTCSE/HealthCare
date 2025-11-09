"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch('/api/auth/user')
        const data = await response.json()
        setUser(data.user)
        
        if (data.user) {
          router.push("/dashboard")
        }
      } catch (error) {
        console.error('Error checking user:', error)
      }
    }
    checkUser()
  }, [])

  if (user) {
    return null
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ambient gradient + orbs (shared theme with dashboards) */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-[#0a0e1f] dark:via-[#0e1529] dark:to-[#121933]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-24 left-16 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl animate-pulse dark:hidden" />
        <div className="absolute bottom-20 right-24 w-[28rem] h-[28rem] bg-cyan-300/25 rounded-full blur-3xl animate-pulse dark:hidden" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl animate-pulse dark:hidden" style={{ animationDelay: '2s' }} />
        {/* Dark mode orbs */}
        <div className="hidden dark:block absolute -top-32 -left-10 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="hidden dark:block absolute -bottom-32 -right-10 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="hidden dark:block absolute top-1/2 left-1/2 w-[32rem] h-[32rem] bg-green-500/5 rounded-full blur-3xl" />
      </div>
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">HealthCare+</h1>
        <div className="space-x-4">
          <Link href="/auth/login">
            <Button variant="ghost" className="hover:bg-emerald-100/50 dark:hover:bg-white/10">Patient Login</Button>
          </Link>
          <Link href="/auth/doctor/login">
            <Button variant="ghost" className="hover:bg-emerald-100/50 dark:hover:bg-white/10">Doctor Login</Button>
          </Link>
          <Link href="/auth/sign-up">
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-md">Get Started</Button>
          </Link>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight dark:text-white">
              Your Complete Health <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-blue-400 dark:to-purple-400">Solution</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-blue-200/70">
              Book appointments, find hospitals, order medicines, request ambulances, and get AI-powered health advice
              all in one place.
            </p>
            <div className="flex gap-4">
              <Link href="/auth/sign-up">
                <Button className="px-8 py-6 text-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg">Sign Up as Patient</Button>
              </Link>
              <Link href="/auth/doctor/sign-up">
                <Button variant="outline" className="px-8 py-6 text-lg border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50/70 dark:border-blue-500 dark:text-blue-300 dark:hover:bg-white/10">
                  Join as Doctor
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-video bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 dark:from-blue-600 dark:via-indigo-600 dark:to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center text-6xl">
              <div className="animate-pulse">
                <style jsx>{`
                  @keyframes heartbeat {
                    0%, 100% {
                      transform: scale(1);
                    }
                    25% {
                      transform: scale(1.3);
                    }
                    50% {
                      transform: scale(1);
                    }
                  }
                  .heart-beat {
                    animation: heartbeat 1.5s ease-in-out infinite;
                  }
                `}</style>
                <span className="heart-beat inline-block">💚</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-blue-400 dark:to-purple-400">HealthCare+</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="📅"
              title="Easy Appointments"
              description="Book appointments with doctors at your favorite hospitals in seconds"
            />
            <FeatureCard
              icon="🏥"
              title="Find Hospitals"
              description="Locate nearby hospitals with real-time availability and ratings"
            />
            <FeatureCard
              icon="💊"
              title="Order Medicines"
              description="Browse, order, and get medicines delivered to your doorstep"
            />
            <FeatureCard
              icon="🚑"
              title="Emergency Service"
              description="Request ambulance service with just one click"
            />
            <FeatureCard
              icon="🤖"
              title="AI Health Advisor"
              description="Get instant health advice from our intelligent AI chatbot"
            />
            <FeatureCard
              icon="🔒"
              title="Secure & Private"
              description="Your health data is encrypted and kept completely private"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Ready to Take Control of Your Health?</h2>
          <p className="text-xl text-blue-100">Join thousands of users who trust HealthCare+ for their medical needs</p>
          <Link href="/auth/sign-up">
            <Button className="px-8 py-6 text-lg bg-white text-blue-600 hover:bg-gray-100">Sign Up Now</Button>
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 HealthCare+. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-xl border border-emerald-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4 drop-shadow-sm">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-blue-200/70">{description}</p>
    </div>
  )
}
