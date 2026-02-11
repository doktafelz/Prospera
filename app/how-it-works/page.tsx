import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { FileText, CheckCircle, FileCheck, Banknote, RefreshCw, TrendingUp, DollarSign } from "lucide-react"
import Image from "next/image"

import type { Metadata } from "next"
import Animate from "@/components/layout/animate"

export const metadata: Metadata = {
  title: "How It Works | Prospera Finance Limited",
  description:
    "Learn how Prospera Finance makes borrowing and investing simple. Apply online, get verified, receive funds, and start growing your wealth confidently with our transparent process.",
  keywords: [
    "how it works Prospera Finance",
    "loan process Nigeria",
    "investment process Nigeria",
    "apply for a loan online",
    "how to invest with Prospera",
    "Prospera Finance Limited",
    "SME loans",
    "asset financing",
  ],
  openGraph: {
    title: "How It Works | Prospera Finance Limited",
    description:
      "Our step-by-step process makes it easy to apply for loans or start investments. Fast approvals, transparent terms, and flexible repayment options — all designed for your success.",
    url: "https://www.prosperagroup.co/how-it-works",
    siteName: "Prospera Finance Limited",
    images: [
      {
        url: "https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png",
        width: 1200,
        height: 630,
        alt: "Prospera Finance - How It Works",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prospera Finance | How It Works",
    description:
      "Understand how Prospera Finance helps you apply for loans and make secure investments in a few easy steps.",
    images: ["https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png"],
  },
}


export default function HowItWorksPage() {
  const loanSteps = [
    {
      icon: FileText,
      step: "Step 1",
      title: "Apply Online",
      description:
        "Fill out our quick online application form with your details and preferred service (SME Loan, Payroll Loan, Asset Financing, or LPO Loan).",
    },
    {
      icon: CheckCircle,
      step: "Step 2",
      title: "Get Verified",
      description:
        "Our team reviews your application and verifies your documents. We keep the process short and straightforward.",
    },
    {
      icon: FileCheck,
      step: "Step 3",
      title: "Approval & Offer",
      description: "If approved, you'll receive a loan offer with clear terms—no hidden charges, no fine print.",
    },
    {
      icon: Banknote,
      step: "Step 4",
      title: "Receive Funds",
      description:
        "Once you accept the offer, your funds are disbursed directly to your account so you can get started right away.",
    },
    {
      icon: RefreshCw,
      step: "Step 5",
      title: "Repay Conveniently",
      description: "Enjoy flexible repayment options designed to match your cash flow and lifestyle.",
    },
  ]

  const investmentSteps = [
    {
      icon: FileText,
      step: "Step 1",
      title: "Choose Your Plan",
      description: "Select an investment package that fits your financial goals and risk appetite.",
      delay: "0"
    },
    {
      icon: Banknote,
      step: "Step 2",
      title: "Sign Up & Fund",
      description: "Register with us, fund your investment, and receive confirmation of your plan.",
      delay: "200"
    },
    {
      icon: TrendingUp,
      step: "Step 3",
      title: "Watch Your Money Grow",
      description: "Sit back and track your earnings with transparency and peace of mind.",
      delay: "300"
    },
    {
      icon: DollarSign,
      step: "Step 4",
      title: "Get Paid",
      description: "Withdraw returns or reinvest them—it's your choice.",
      delay: "400"
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Animate>
                  <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">How It Works</h1>
                </Animate>

                <Animate delay="200">
                  <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                    Our process is fast, transparent, and designed with you in mind. Whether you're applying for a loan or
                    exploring investment opportunities, we've streamlined the process to save you time and give you
                    confidence.
                  </p>
                </Animate>

                <Animate delay="300">
                  <Button size="lg" asChild className="text-base h-12">
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </Animate>
              </div>

              <Animate delay="100">
                <div className="relative h-64 md:h-80 lg:h-96">
                  <Image priority
                    src="/african-professional-using-laptop-for-online-finan.jpg"
                    alt="How it works"
                    className="h-full w-full rounded-lg object-cover object-top shadow-xl"

                    fill
                    placeholder="blur"
                    blurDataURL="/placeholder.jpg"
                  />
                </div>
              </Animate>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center md:mb-12">
              <Animate>
                <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-3">For Loans</h2>
              </Animate>
              <Animate delay="200">
                <p className="text-base text-muted-foreground md:text-lg">Simple steps to get the funding you need</p>
              </Animate>
            </div>

            <Animate>
              <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                {loanSteps.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <item.icon className="h-7 w-7 text-primary" />
                          </div>
                          <div className="text-xs font-bold text-primary uppercase tracking-wide">{item.step}</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2 md:text-xl">{item.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed md:text-base">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Animate>
          </div>
        </section>

        {/* Investments Process */}
        <section className="bg-muted/30 py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center md:mb-12">
              <Animate>
                <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-3">For Investments</h2>
              </Animate>

              <Animate delay="200">
                <p className="text-base text-muted-foreground md:text-lg">Start growing your wealth in four easy steps</p>
              </Animate>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {investmentSteps.map((item, index) => (
                <Animate delay={item.delay} key={index}>
                  <Card className="text-center hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                        <item.icon className="h-7 w-7 text-secondary" />
                      </div>
                      <div className="mb-2 text-xs font-bold text-secondary uppercase tracking-wide">{item.step}</div>
                      <h3 className="text-base font-bold mb-2 md:text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12 md:py-30 text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Animate>
              <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-4">
                Ready to Begin Your Journey?
              </h2>
            </Animate>

            <Animate delay="200">
              <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                Start your application today or explore our investment opportunities. We're here to help you every step of
                the way.
              </p>
            </Animate>


            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
              <Animate delay="300">
                <Button size="lg" variant="secondary" asChild className="text-base h-12">
                  <Link href="/contact">Apply for a Loan</Link>
                </Button>
              </Animate>

              <Animate delay="400">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base h-12 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link href="/services">Explore Investments</Link>
                </Button>
              </Animate>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
