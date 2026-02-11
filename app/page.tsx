import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Briefcase,
  CreditCard,
  Car,
  FileText,
  User,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Target,
  Users,
  Award,
  Lightbulb,
} from "lucide-react"
import { TestimonialsCarousel } from "@/components/layout/testimonials"

import type { Metadata } from "next";
import Animate from "@/components/layout/animate"
import PartnersSection from "@/components/layout/our-partners"

export const metadata: Metadata = {
  title: "Prospera Finance - Empowering Your Financial Growth in Nigeria",
  description:
    "Prospera Finance provides trusted business loans, payroll loans, asset financing, and personal loans in Nigeria.Whether you’re an entrepreneur, employee, or investor, our transparent financial solutions help you achieve long- term financial growth.",
  openGraph: {
    title: "Prospera Finance - Empowering Your Financial Growth in Nigeria",
    description:
      "Prospera Finance provides trusted business loans, payroll loans, asset financing, and personal loans in Nigeria.Whether you’re an entrepreneur, employee, or investor, our transparent financial solutions help you achieve long- term financial growth.",
    url: "https://www.prosperagroup.co/",
    siteName: "Prospera Finance",
    images: [
      {
        url: "https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png",
        width: 1200,
        height: 630,
        alt: "Prospera Finance - Empowering Financial Growth",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prospera Finance - Empowering Your Financial Growth in Nigeria",
    description:
      "Fast, reliable, and transparent financial services built to empower individuals and businesses across Nigeria.",
    images: [
      "https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png",
    ],
  },
  alternates: {
    canonical: "https://www.prosperagroup.co/",
  },
  other: {
    "script:ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "Prospera Finance Limited",
        "url": "https://www.prosperagroup.co",
        "logo": "https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png",
        "description":
          "Prospera Finance Limited provides trusted financial solutions for Nigerian businesses and individuals — from business loans to investment opportunities.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "12 Adeola Odeku Street",
          "addressLocality": "Victoria Island",
          "addressRegion": "Lagos",
          "postalCode": "101241",
          "addressCountry": "NG"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+234-800-123-4567",
          "contactType": "Customer Service",
          "areaServed": "NG",
          "availableLanguage": "English"
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "FinancialService",
          "name": "Prospera Finance Limited"
        },
        "author": {
          "@type": "Person",
          "name": "Chioma Adeyemi"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody":
          "Prospera Finance helped me expand my business faster than I expected. The loan process was transparent, and repayment was very flexible."
      },
      {
        "@context": "https://schema.org",
        "@type": "AggregateRating",
        "itemReviewed": {
          "@type": "FinancialService",
          "name": "Prospera Finance Limited"
        },
        "ratingValue": "4.9",
        "reviewCount": "178"
      }
    ]),
  },
};


export default function HomePage() {
  const services = [
    {
      icon: Briefcase,
      title: "Business Loans",
      description: "Fuel your business growth with affordable financing tailored for entrepreneurs and SMEs.",
    },
    {
      icon: CreditCard,
      title: "Payroll Loans",
      description: "Quick access to funds with convenient salary-based repayment.",
    },
    {
      icon: Car,
      title: "Asset Financing",
      description: "Acquire vehicles, land, or equipment with flexible payment plans.",
    },
    {
      icon: FileText,
      title: "LPO Loans",
      description: "Contract financing to help contractors fulfil purchase orders",
    },
    {
      icon: User,
      title: "Personal Loans",
      description: "Meet urgent needs and fund personal projects with flexible repayment terms.",
    },
    {
      icon: TrendingUp,
      title: "Investments",
      description: "Grow your wealth securely with competitive returns and transparent models.",
    },
  ]

  const features = [
    {
      icon: Clock,
      title: "Fast & Flexible",
      description: "Quick approvals with terms that adapt to your needs.",
      delay: "200"
    },
    {
      icon: Shield,
      title: "Trusted & Transparent",
      description: " No hidden fees, clear terms from the start.",
      delay: "300"
    },
    {
      icon: Target,
      title: "Growth-Focused",
      description: "Designed to help clients expand their businesses and wealth.",
      delay: "400"
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "Personalised support from a team that understands your goals",
      delay: "500"
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <Animate>
                  <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                    <span className="text-primary">Building</span> Your <span className="text-primary">Prosperity</span>,
                    One <span className="text-primary">Smart Decision</span> at a Time
                  </h1>
                </Animate>

                <Animate delay="200">
                  <p className="text-base text-muted-foreground leading-relaxed md:text-lg lg:text-xl">
                    To reach your goals with confidence, you need fast, reliable, and
                    transparent financial solutions. At Prospera Finance, we understand your needs and are committed
                    to securing your financial future.
                  </p>
                </Animate>

                <Animate>
                  <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                    <Button size="lg" asChild className="text-base h-12">
                      <Link href="/contact">Apply Now</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="text-base h-12 bg-transparent">
                      <Link href="/services">Explore Our Services</Link>
                    </Button>
                  </div>
                </Animate>
              </div>

              <Animate delay="100">
                <div className="relative h-64 md:h-96 lg:h-[500px]">
                  <img
                    src="/homepage.png"
                    alt="Professional business partnership"
                    className="h-full w-full rounded-lg object-cover shadow-2xl object-top"
                  />
                </div>
              </Animate>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Animate>
                <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-4">
                  Welcome to Prospera Finance
                </h2>
              </Animate>

              <Animate delay="200">
                <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                  Achieving your goals with confidence requires fast, reliable, and transparent financial solutions. At
                  Prospera Finance, we understand your needs, and we're here to financially secure your goals.
                </p>
              </Animate>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-muted/30 py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center md:mb-12">
              <Animate>
                <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-3">Our Services</h2>
              </Animate>

              <Animate delay="200">
                <p className="text-base text-muted-foreground md:text-lg">
                  Comprehensive financial solutions tailored to your needs
                </p>
              </Animate>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <service.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Animate>
              <div className="mt-8 text-center">
                <Button asChild size="lg" className="h-12 text-base">
                  <Link href="/services">
                    View All Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Animate>
          </div>
        </section>

        <PartnersSection />

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center md:mb-12">
              <Animate>
                <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-3">
                  Why Choose Prospera Finance?
                </h2>
              </Animate>

              <Animate delay="200">
                <p className="text-base text-muted-foreground md:text-lg">Your trusted partner for financial growth</p>
              </Animate>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Animate delay={feature.delay} key={index}>
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center md:mb-12">
              <Animate>
                <h2 data-aos="fade-up" className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-3">How It Works</h2>
              </Animate>

              <Animate delay="200">
                <p data-aos="fade-up" className="text-base text-muted-foreground md:text-lg">Simple, fast, and transparent process</p>
              </Animate>
            </div>


            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1", title: "Apply", description: "Submit your application online or at our branch", delay: "200"
                },
                { step: "2", title: "Review", description: "Our team reviews and verifies your details.", delay: "300" },
                { step: "3", title: "Approval", description: "Get a decision quickly with clear next steps", delay: "400" },
                { step: "4", title: "Disbursement", description: "Funds are released to you with flexible repayment options", delay: "500" },
              ].map((item, index) => (
                <Animate delay={item.delay} key={index}>
                  <div key={index} className="relative text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-base font-bold mb-2">{item.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Animate>
              ))}
            </div>

            <Animate>
              <div className="mt-8 text-center">
                <Button asChild size="lg" className="h-12 text-base">
                  <Link href="/how-it-works">Learn More</Link>
                </Button>
              </div>
            </Animate>
          </div>
        </section>

        <TestimonialsCarousel />

        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <Animate>
                <div className="relative h-64 md:h-80 lg:h-96 order-2 lg:order-1">
                  <img
                    src="/success-priority1.png"
                    alt="Our commitment to your success"
                    className="h-full w-full rounded-lg object-cover object-top shadow-xl"
                  />
                </div>
              </Animate>


              <div className="space-y-4 order-1 lg:order-2">
                <Animate>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-base font-bold text-primary">Our Commitment</span>
                  </div>
                </Animate>

                <Animate delay="200">
                  <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl">
                    Your Success is Our Priority
                  </h2>
                </Animate>

                <Animate delay="300">
                  <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                    At Prospera Finance, we don't just provide financial services—we build lasting partnerships. Our team
                    is dedicated to understanding your unique needs and delivering solutions that drive real results.
                  </p>
                </Animate>

                <Animate delay="400">
                  <ul className="space-y-3">
                    {[
                      "Personalized financial guidance",
                      "Competitive rates and flexible terms",
                      "Quick approval and disbursement",
                      "Ongoing support throughout your journey",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-base text-muted-foreground md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Animate>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Animate>
                  <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2">
                    <Lightbulb className="h-5 w-5 text-secondary" />
                    <span className="text-base font-bold text-secondary">Financial Wisdom</span>
                  </div>
                </Animate>

                <Animate delay="200">
                  <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl">
                    Empowering You with Knowledge
                  </h2>
                </Animate>

                <Animate delay="300">
                  <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                    We believe that informed decisions lead to lasting prosperity. That's why we're committed to providing
                    you with the knowledge and tools you need to make smart financial choices.
                  </p>
                </Animate>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="text-base font-bold mb-2">Expert Guidance</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Access to financial advisors who understand your goals
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="text-base font-bold mb-2">Clear Communication</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        No jargon, just straightforward information
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Animate>
                <div className="relative h-64 md:h-80 lg:h-96">
                  <img
                    src="/empowering-you-with-knowledge.png"
                    alt="Financial education and guidance"
                    className="h-full w-full rounded-lg object-cover shadow-xl"
                  />
                </div>
              </Animate>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12 md:py-16 lg:py-20 text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Animate>
              <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-4">
                Ready to Build Your Prosperity?
              </h2>
            </Animate>

            <Animate delay="200">
              <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                Join thousands of individuals and businesses who trust Prospera Finance for their financial needs.
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
                  <Link href="/services">Explore Investment Plans</Link>
                </Button>
              </Animate>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-secondary mb-4" />
              <Animate>
                <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-4">Licensed & Regulated</h2>
              </Animate>

              <Animate delay="200">
                <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                  Prospera Finance Limited is a legally registered financial services company. Our operations are guided
                  by the standards of relevant financial regulatory bodies, ensuring that our clients are protected at all
                  times.
                </p>
              </Animate>

              <Animate delay="300">
                <Button asChild variant="outline" size="lg" className="mt-6 h-12 bg-transparent">
                  <Link href="/legal">Learn About Our Compliance</Link>
                </Button>
              </Animate>
            </div>
          </div>
        </section>
      </main>
    </div >
  )
}
