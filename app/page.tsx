import { PersonStanding, Upload, MessageSquare, Users, ChevronRight, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <PersonStanding className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">ScaleYourself</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Scale Your Coaching Impact with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Transform your expertise into a personal AI assistant that delivers your coaching methodology 24/7
                </p>
              </div>
              <div className="space-x-4">
                <Link href="mailto:seancorcoran45@gmail.com?subject=Interested%20in%20ScaleYourself">
                  <Button className="inline-flex h-9 items-center justify-center" size="lg">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://seangpt-sean-corcorans-projects.vercel.app/" target="_blank">
                  <Button variant="outline" size="lg">
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Your Expertise, Amplified
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Transform your coaching methodology into an AI-powered assistant that delivers personalized guidance
                  to your clients, exactly how you would.
                </p>
              </div>
              <div className="grid gap-4 md:gap-8">
                <div className="flex items-start space-x-4">
                  <Upload className="mt-1 h-6 w-6 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Easy Content Upload</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Upload your training guides, plans, and videos to train your AI assistant with your unique
                      approach
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageSquare className="mt-1 h-6 w-6 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Custom Interactions</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Create custom FAQs and responses that reflect your coaching style and methodology
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="mt-1 h-6 w-6 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Scale Your Impact</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Provide 24/7 personalized coaching support while focusing on high-impact client interactions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Three simple steps to create your personal AI coaching assistant
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 border rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">1</div>
                <h3 className="text-xl font-bold">Upload Your Content</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Share your training materials, methodologies, and expertise
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 border rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">2</div>
                <h3 className="text-xl font-bold">Customize Your AI</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Train your AI to match your coaching style and approach
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 border rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">3</div>
                <h3 className="text-xl font-bold">Launch & Scale</h3>
                <p className="text-gray-500 dark:text-gray-400">Provide 24/7 personalized coaching to more clients</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Scale Your Coaching?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                  Join the future of personalized coaching with AI
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://calendly.com/seancorcoran45/">
                  <Button variant="secondary" size="lg">
                    Schedule a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Want to learn more about how ScaleYourself can help your coaching business?
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 ScaleYourself. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

