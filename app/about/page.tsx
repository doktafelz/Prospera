import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Target, Eye, CheckCircle, Clock, Shield, TrendingUp, Heart } from "lucide-react"
import Image from "next/image"

import type { Metadata } from "next";
import Animate from "@/components/layout/animate"

export const metadata: Metadata = {
  title: "About Prospera Finance - Empowering Financial Growth Across Africa",
  description:
    "Learn about Prospera Finance, our mission to make financial solutions accessible, transparent, and growth-focused for individuals and businesses across Africa. Discover our vision, values, and what makes us your trusted finance partner.",
  openGraph: {
    title: "About Prospera Finance - Empowering Financial Growth Across Africa",
    description:
      "Discover Prospera Finance’s mission to empower individuals and businesses through accessible, transparent, and innovative financial solutions across Africa.",
    url: "https://www.prosperagroup.co/about",
    siteName: "Prospera Finance",
    images: [
      {
        url: "https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png",
        width: 1200,
        height: 630,
        alt: "About Prospera Finance - Our Team and Mission",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Prospera Finance - Empowering Financial Growth Across Africa",
    description:
      "Get to know the vision, mission, and people behind Prospera Finance — your trusted partner for reliable and flexible financial growth solutions.",
    images: [
      "https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png",
    ],
  },
  alternates: {
    canonical: "https://www.prosperagroup.co/about",
  },
};



export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Animate>
                  <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
                    About Prospera Finance
                  </h1>
                </Animate>

                <Animate delay="200">
                  <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                    Empowering individuals, businesses, and communities with financial solutions that are reliable,
                    flexible, and built for growth.
                  </p>
                </Animate>

                <Animate delay="300">
                  <Button size="lg" asChild className="text-base h-12">
                    <Link href="/contact">Join Us Today</Link>
                  </Button>
                </Animate>
              </div>

              <Animate delay="100">
                <div className="relative h-64 md:h-80 lg:h-96">
                  <Image priority
                    src="/about-us1.png"
                    alt="Prospera Finance team"
                    className="h-full w-full rounded-lg object-cover shadow-xl"

                    fill
                    placeholder="blur"
                    blurDataURL="/placeholder.jpg"
                  />
                </div>
              </Animate>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <Animate>
                <p className="text-base text-center text-muted-foreground leading-relaxed md:text-lg lg:text-xl mb-8">
                  At Prospera Finance, we believe money should be a tool for progress—not a barrier. Our mission is
                  simple: to empower individuals, businesses, and communities with financial solutions that are reliable,
                  flexible, and built for growth.
                </p>
              </Animate>
              <Animate>
                <p className="text-base text-center text-muted-foreground leading-relaxed md:text-lg">
                  We were founded on the principle that everyone deserves access to funding and investment opportunities
                  without unnecessary roadblocks. Whether you're a student seeking support, a business owner chasing
                  expansion, or an investor looking to grow wealth securely, Prospera Finance is your trusted partner.
                </p>
              </Animate>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-muted/30 py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Animate>
              <div className="grid gap-8 md:grid-cols-2">

                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold mb-3 md:text-2xl">Our Vision</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                      To be Nigeria's most customer-centric and innovative finance house.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/20">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                      <Target className="h-6 w-6 text-secondary" />
                    </div>
                    <h2 className="text-xl font-bold mb-3 md:text-2xl">Our Mission</h2>
                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed md:text-base">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>To become Number One financial supermarket in Nigeria.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>To empower individuals and businesses through accessible intelligent and ethical financial solutions.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Fueling your growth.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </Animate>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center md:mb-12">
              <Animate>
                <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-3">Why Choose Us?</h2>
              </Animate>
              <Animate delay="200">
                <p className="text-base text-muted-foreground md:text-lg">What sets Prospera Finance apart</p>
              </Animate>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Animate>
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Fast & Flexible</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We cut through red tape with quick approvals and tailored financing options.
                    </p>
                  </CardContent>
                </Card>
              </Animate>

              <Animate delay="200">
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Shield className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Trusted & Transparent</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      No hidden fees, no confusing terms—just clarity you can count on.
                    </p>
                  </CardContent>
                </Card>
              </Animate>

              <Animate delay="300">
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <TrendingUp className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Growth-Focused</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every solution is designed to help you move forward, not hold you back.
                    </p>
                  </CardContent>
                </Card>
              </Animate>

              <Animate delay="400">
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Heart className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Human-Centered</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Behind every service, we see real people, real dreams, and real possibilities.
                    </p>
                  </CardContent>
                </Card>
              </Animate>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12 md:py-30 text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Animate>
              <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-4">Ready to Partner With Us?</h2>
            </Animate>
            <Animate delay="200">
              <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                Let's build your prosperity together. Get started with Prospera Finance today.
              </p>
            </Animate>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
              <Animate delay="300">
                <Button size="lg" variant="secondary" asChild className="text-base">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </Animate>

              <Animate delay="400">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </Animate>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
