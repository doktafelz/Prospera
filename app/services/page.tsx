import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Briefcase, CreditCard, Car, FileText, User, TrendingUp, CheckCircle, CreditCardIcon, Store } from "lucide-react"
import Image from "next/image"

import type { Metadata } from "next"
import Animate from "@/components/layout/animate"

export const metadata: Metadata = {
  title: "Our Services | Prospera Finance Limited",
  description:
    "Discover Prospera Finance’s range of financial services — from business and personal loans to asset financing and investment opportunities. Empowering individuals and businesses across Nigeria to achieve their financial goals.",
  keywords: [
    "Prospera Finance services",
    "business loans Nigeria",
    "payroll loans Nigeria",
    "personal loans Nigeria",
    "LPO financing",
    "asset financing Nigeria",
    "investment opportunities Nigeria",
    "SME loans",
    "financial solutions Nigeria",
    "Prospera Finance Limited",
  ],
  openGraph: {
    title: "Our Services | Prospera Finance Limited",
    description:
      "Explore our full range of financial solutions — business loans, payroll loans, asset financing, LPO funding, personal loans, and investment opportunities — designed to make prosperity possible for you.",
    url: "https://www.prosperagroup.co/services",
    siteName: "Prospera Finance Limited",
    images: [
      {
        url: "https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png",
        width: 1200,
        height: 630,
        alt: "Prospera Finance Services",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prospera Finance | Financial Services",
    description:
      "From business and personal loans to investments and asset financing — discover how Prospera Finance helps you achieve financial freedom.",
    images: ["https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png"],
  },
}


export default function ServicesPage() {
  const services = [
    {
      icon: Briefcase,
      title: "Business Loans",
      subtitle: "For Entrepreneurs and SMEs",
      description:
        "A trusted growth partner is needed to fuel progress. At Prospera Finance, our Business Loans provide affordable financing tailored to help Entrepreneurs and SMEs expand operations, stock up on inventory, or manage working capital needs.",
      idealFor: [
        "Startups seeking seed capital",
        "SMEs looking to expand operations",
        "Equipment purchase or lease",
        "Hiring and training staff",
      ],
      whyItWorks: [
        "Quick access to funds",
        "Tailored loan packages for different business sizes",
        "Flexible repayment aligned with your cash flow",
      ],
    },
    {
      icon: CreditCard,
      title: "Payroll Loans",
      subtitle: "For Salary Earners",
      description:
        "Salary earners sometimes need a helping hand before payday. Our Payroll Loans make it easy to access funds when you need them most—with repayment automatically deducted from your salary.",
      idealFor: [
        "Employees in both public and private sectors",
        "Emergency expenses",
        "Bridging cash flow gaps between salaries",
      ],
      whyItWorks: ["Fast loan disbursement", "Convenient repayment via salary", "No hidden fees"],
    },
    {
      icon: Car,
      title: "Asset Financing",
      subtitle: "Own What You Need",
      description:
        "Whether it's a car, land, or valuable property, ownership shouldn't be out of reach. With Asset Financing, you can acquire the assets you need today and pay gradually over time with flexible plans.",
      idealFor: [
        "Vehicle purchase (new or used)",
        "Land and property acquisition",
        "High-value personal or business equipment",
      ],
      whyItWorks: ["Affordable down payments", "Structured repayment plans", "Ownership while you pay"],
    },
    {
      icon: FileText,
      title: "LPO Loans",
      subtitle: "Local Purchase Order Financing",
      description:
        "Executing contracts often requires upfront capital—and that's where we step in. Our LPO Loans provide contractors with the funds they need to deliver purchase orders successfully and on time.",
      idealFor: [
        "Contractors with government or private LPOs",
        "Funding supplies, logistics, and delivery",
        "Businesses fulfilling large purchase orders",
      ],
      whyItWorks: [
        "Swift access to contract financing",
        "Repayment aligned with project milestones",
        "Trusted support for contractors and suppliers",
      ],
    },
    {
      icon: User,
      title: "Personal Loans",
      subtitle: "For Life's Unexpected Moments",
      description:
        "Life happens—and sometimes, it requires a little extra financial push. Our Personal Loans are designed to help you meet urgent needs, fund personal projects, or simply take care of life's unexpected turns. With flexible repayment plans and quick approvals, you get the support you need without the stress.",
      idealFor: [
        "School fees & education support",
        "Rent & household expenses",
        "Medical emergencies",
        "Personal projects or travel",
      ],
      whyItWorks: ["Fast approval process", "Flexible repayment terms", "Transparent interest rates"],
    },
    {
      icon: TrendingUp,
      title: "Investments",
      subtitle: "Grow Your Wealth",
      description:
        "Money should work for you, not just sit idle. With our Investment Opportunities, you can put your money to work in safe, transparent, and rewarding ways—growing your wealth securely and steadily.",
      idealFor: [
        "Individuals seeking stable returns",
        "Investors looking to diversify portfolios",
        "Professionals saving towards long-term goals",
      ],
      whyItWorks: [
        "Competitive ROI (Return on Investment)",
        "Safe and transparent investment models",
        "Expert guidance to match your financial goals",
      ],
    },
    {
      icon: Store,
      title: "POS Services",
      subtitle: "For Agents, Merchants, and SMEs",
      description:
        "At Prospera Finance, our POS Services are designed to support agents, merchants, and businesses with secure, convenient, and reliable payment solutions.Whether you run a retail shop, service business, or agent banking outlet, our POS terminals help you serve customers better and process transactions with ease.",
      idealFor: [
        "POS agents and merchant operators",
        "Retail shops, supermarkets, and pharmacies",
        "SMEs handling daily customer payments",
        "Businesses looking to expand payment options",
      ],
      whyItWorks: [
        "Reliable payment and withdrawal processing",
        "Convenient support for everyday transactions",
        "Suitable for both agents and business owners",
        "Helps improve customer service and business efficiency"
      ],
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
                  <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Our Services</h1>
                </Animate>

                <Animate delay="200">
                  <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                    At Prospera Finance, we understand that financial needs vary—whether you're a business owner, a salary
                    earner, or an investor. That's why we've designed our services to meet you right where you are, with
                    flexible and reliable solutions.
                  </p>
                </Animate>

                <Animate delay="300">
                  <Button size="lg" asChild className="text-base h-12">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </Animate>
              </div>

              <Animate delay="100">
                <div className="relative h-64 md:h-80 lg:h-96">
                  <Image priority
                    src="/professional-african-business-consultant-presentin.jpg"
                    alt="Financial services"
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
            <div className="grid gap-8 lg:grid-cols-2">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow pt-0">
                  <CardHeader className="bg-muted/30 py-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{service.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 md:text-base">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Ideal For:
                        </h4>
                        <ul className="space-y-2">
                          {service.idealFor.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="text-secondary">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Why It Works:
                        </h4>
                        <ul className="space-y-2">
                          {service.whyItWorks.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="text-primary">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="bg-muted/30 py-12 md:py-16">

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Animate>
              <p className="text-lg font-bold text-primary md:text-xl">
                At Prospera Finance, every service is crafted with one goal: to make prosperity possible for you.
              </p>
            </Animate>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12 md:py-30 text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Animate>
              <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-4">Ready to Get Started?</h2>
            </Animate>

            <Animate delay="200">
              <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                Choose the service that fits your needs and take the first step towards financial prosperity.
              </p>
            </Animate>


            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
              <Animate delay="300">
                <Button size="lg" variant="secondary" asChild className="text-base h-12">
                  <Link href="/contact">Apply Now</Link>
                </Button>
              </Animate>

              <Animate delay="400">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base h-12 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link href="/how-it-works">Learn How It Works</Link>
                </Button>
              </Animate>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
