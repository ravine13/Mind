import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Users, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-slate-900">Mind Matters</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#" className="text-slate-600 hover:text-slate-900">
                Home
              </Link>
              <Link href="#about" className="text-slate-600 hover:text-slate-900">
                About
              </Link>
              <Link href="#services" className="text-slate-600 hover:text-slate-900">
                Services
              </Link>
              <Link href="#contact" className="text-slate-600 hover:text-slate-900">
                Contact
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/login">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Compassionate Mental Health Support at Your Fingertips
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Professional, personalized mental wellness care designed to help you thrive. Connect with experienced
                practitioners in a safe, supportive environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                    Book Your First Session
                  </Button>
                </Link>
                <Link href="#about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Professional therapy office"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Mind Matters?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide comprehensive mental health support tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Compassionate Care</h3>
                <p className="text-slate-600">Personalized treatment with empathy and understanding</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Safe Environment</h3>
                <p className="text-slate-600">Confidential and secure platform for your peace of mind</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Expert Practitioners</h3>
                <p className="text-slate-600">Licensed professionals with years of experience</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Flexible Scheduling</h3>
                <p className="text-slate-600">Book sessions that fit your busy lifestyle</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Dr. Sarah Johnson"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Meet Dr. Sarah Johnson</h2>
              <p className="text-lg text-slate-600 mb-6">
                With over 15 years of experience in mental health care, Dr. Johnson specializes in anxiety, depression,
                and stress management. She believes in creating a warm, non-judgmental space where healing can begin.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-slate-700">Licensed Clinical Psychologist</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-slate-700">Cognitive Behavioral Therapy Specialist</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-slate-700">Mindfulness-Based Stress Reduction Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards better mental health. Book your consultation today.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule Your First Session
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Branding */}
            <div>
              <div className="flex items-center mb-2">
                <Heart className="h-5 w-5 text-blue-400 mr-2" />
                <span className="font-semibold">Mind Matters</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Compassionate mental health support.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <p className="text-slate-400">📧 hello@mindmatters.com</p>
              <p className="text-slate-400">📞 (555) 123-4567</p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold mb-2">Links</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Emergency Resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-800 pt-4 text-center text-slate-500">
            &copy; 2024 Mind Matters. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}