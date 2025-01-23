import { Upload, Blocks, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { EmailDialog } from "@/components/email-dialog"


export default function LandingPage() {
  const subject = "ScaleYourself Beta Access"
  const body = `I am interested in ScaleYourself and would like to learn more about it.
(feel free to just send as-is & I'll get back to you shortly)`

  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative px-4 lg:px-6 h-16 flex items-center justify-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="text-2xl font-bold">ScaleYourself</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="absolute right-12 hidden md:flex gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <EmailDialog 
            trigger={
              <button className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </button>
            }
            subject={subject}
            body={body}
          />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-[3vh]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
            <Users className="justify-center h-10 w-10 lg:h-12 lg:w-12 text-primary transform scale-x-[-1]" />
              <div className="space-y-2">
                <h1 className="font-bold tracking-tighter text-3xl lg:text-5xl">
                  Scale Your Coaching Impact
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Focus on high-impact client interactions & let AI do the rest
                </p>
              </div>
              <div className="space-y-4">
                <EmailDialog 
                  trigger={
                    <Button className="inline-flex h-9 items-center justify-center" size="lg">
                      Get In early
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  }
                  subject={subject}
                  body={body}
                />
                <p className="text-sm text-muted-foreground max-w-[600px] mx-auto">
                  *ScaleYourself is in Beta right now. Click above to become a design partner & get a free
                  AI assistant tailored to your coaching practice
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 w-4/5 lg:w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <div style={{ position: 'relative', paddingBottom: '55%', height: 0 }}>
                <iframe 
                  src="https://www.loom.com/embed/c3c0e74f6e304e7a9fcd2545495c8afc?sid=8d1d0a67-db68-4473-8543-4f18678e0acb" 
                  allowFullScreen 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                ></iframe>
              </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-center lg:text-left text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Your Expertise, Amplified
                </h2>
                <p className="text-center lg:text-left max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Transform your coaching methodology into an AI-powered assistant that delivers personalized guidance
                  to your clients, exactly how you would.
                </p>
              </div>
              <div className="grid gap-4 md:gap-8">
                <div className="flex items-start space-x-4">
                  <Upload className="mt-1 h-12 w-12 lg:h-6 lg:w-6 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Step 1 - Upload Your Content</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Upload your training plans, videos, articles, etc. to give your AI access to your unique approach
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Blocks className="mt-1 h-12 w-12 lg:h-6 lg:w-6 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Step 2 - Train your AI</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our quick & easy training process will ensure your AI sounds & coaches like you
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="mt-1 h-12 w-12 lg:h-6 lg:w-6 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Step 3 -  Scale Your Impact</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Provide 24/7 personalized coaching support while focusing all your time on high-impact client interactions
                    </p>
                  </div>
                </div>
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
              <EmailDialog 
            trigger={
              <Button variant="secondary" size="lg">
                Become a Design Partner
              </Button>
            }
            subject={subject}
            body={body}
          />            
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

