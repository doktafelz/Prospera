import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Quote, Star, TrendingUp, Users, Award } from "lucide-react"
import Image from "next/image"
import amieProfile from "@/assets/amie-profile.jpg";
import stanleyProfile from "@/assets/stanley-profile.jpg";
import mishealProfile from "@/assets/misheal-profile.jpg";
import blessingProfile from "@/assets/blessing-profile.jpg";
import davidProfile from "@/assets/david-profile.jpg";
import graceProfile from "@/assets/grace-profile.jpg";

import type { Metadata } from "next"
import { CountUp } from "@/components/layout/count-up"
import Animate from "@/components/layout/animate"

export const metadata: Metadata = {
  title: "Client Testimonials & Success Stories | Prospera Finance Limited",
  description:
    "Hear from satisfied clients who have transformed their businesses and lives with Prospera Finance. Discover real success stories and testimonials from entrepreneurs and professionals across Nigeria.",
  keywords: [
    "Prospera Finance testimonials",
    "success stories Prospera Finance",
    "client reviews Prospera Finance",
    "business growth stories",
    "financial success Nigeria",
    "SME financing success",
    "entrepreneur testimonials",
    "loan success stories",
    "Prospera Finance Limited reviews",
  ],
  openGraph: {
    title: "Client Testimonials & Success Stories | Prospera Finance Limited",
    description:
      "Real stories from real clients. See how Prospera Finance Limited has helped businesses and individuals achieve financial success through tailored loan and investment solutions.",
    url: "https://www.prosperagroup.co/testimonials",
    siteName: "Prospera Finance Limited",
    images: [
      {
        url: "https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png",
        width: 1200,
        height: 630,
        alt: "Prospera Finance Client Success Stories",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prospera Finance | Client Testimonials & Success Stories",
    description:
      "Explore testimonials from clients who have achieved financial growth and stability with Prospera Finance’s trusted financial solutions.",
    images: ["https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png"],
  },
}


export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Prospera Finance Limited has been an invaluable partner in our growth journey.",
      author: "Amie Oluwaseyi Angela",
      role: "CEO, La Kusine",
      image: amieProfile,
    },
    {
      quote: "Their expertise in financial management has enabled us to make informed decisions.",
      author: "Umeobi Stanley Ikenna",
      role: "CEO, Cadast",
      image: stanleyProfile,
    },
    {
      quote: "They offered us a flexible, affordable financing solution tailored to our unique needs.",
      author: "Mr. Misheal Ike Chukwuma",
      role: "CEO, Nevaeh Travel & Tour",
      image: mishealProfile,
    },
    {
      quote: "Their personalized approach to financial advisory has transformed how we manage our cash flow.",
      author: "Blessing Chiamaka Okonkwo",
      role: "Founder, Bloom Logistics",
      image: blessingProfile,
    },
    {
      quote: "The team's deep understanding of Nigerian SME challenges made all the difference for us.",
      author: "David Chinedu Okafor",
      role: "Managing Director, TechVentures",
      image: davidProfile,
    },
    {
      quote: "Working with Prospera Finance gave us the confidence to expand into new markets.",
      author: "Grace Ifeyinwa Nwachukwu",
      role: "CEO, Heritage Fabrics",
      image: graceProfile,
    },
  ];

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
                    Testimonials & Success Stories
                  </h1>
                </Animate>

                <Animate delay="200">
                  <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                    At Prospera Finance, our greatest pride comes from the success of our clients. Here's what business
                    leaders have to say about partnering with us.
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
                    src="/testimonials.png"
                    alt="Success stories"
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

        {/* Testimonials Grid */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Animate key={index}>
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <Image priority
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={50}
                            height={50}
                            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                            unoptimized
                          />
                          <div className="flex-1">
                            <p className="text-base font-bold">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed italic flex-1">
                          "{testimonial.quote}"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 md:py-16 text-primary">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Animate>
                <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-3">Our Impact in Numbers</h2>
              </Animate>

              <Animate delay="200">
                <p className="text-base md:text-lg opacity-90">Real results from real partnerships</p>
              </Animate>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <Animate delay="200">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Users className="h-8 w-8" />
                  </div>
                  <CountUp end={500} suffix="+" />
                  <p className="text-sm opacity-90">Satisfied Clients</p>
                </div>
              </Animate>

              <Animate delay="300">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <CountUp end={2} suffix="B+" prefix="₦" />
                  <p className="text-sm opacity-90">Loans Disbursed</p>
                </div>
              </Animate>

              <Animate delay="400">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Award className="h-8 w-8" />
                  </div>
                  <CountUp end={98} suffix="%" />
                  <p className="text-sm opacity-90">Client Satisfaction Rate</p>
                </div>
              </Animate>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <Animate>
                <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-3">
                  Your Success Journey Starts Here
                </h2>
              </Animate>

              <Animate delay="200">
                <p className="text-base text-muted-foreground md:text-lg max-w-2xl mx-auto">
                  Join hundreds of businesses and individuals who have transformed their financial future with Prospera
                  Finance
                </p>
              </Animate>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Animate delay="100">
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-lg font-bold mb-2">Apply</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Submit your application with minimal documentation
                    </p>
                  </CardContent>
                </Card>
              </Animate>

              <Animate delay="200">
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                      2
                    </div>
                    <h3 className="text-lg font-bold mb-2">Get Approved</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Receive fast approval within 24-48 hours
                    </p>
                  </CardContent>
                </Card>
              </Animate>

              <Animate delay="300">
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                      3
                    </div>
                    <h3 className="text-lg font-bold mb-2">Grow</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Watch your business or investment flourish
                    </p>
                  </CardContent>
                </Card>
              </Animate>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Animate>
              <p className="text-base text-muted-foreground leading-relaxed md:text-lg max-w-2xl mx-auto">
                These stories remind us why we exist: to empower individuals and businesses to prosper with confidence.
              </p>
            </Animate>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12 md:py-30 text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Animate>
              <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-4">
                Ready to Write Your Success Story?
              </h2>
            </Animate>

            <Animate delay="200">
              <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                Join the growing list of businesses and individuals who trust Prospera Finance for their financial needs.
              </p>
            </Animate>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
              <Animate delay="300">
                <Button size="lg" variant="secondary" asChild className="text-base h-12">
                  <Link href="/contact">Get started today</Link>
                </Button>
              </Animate>

              <Animate delay="400">
                <Button size="lg" variant="outline" asChild className="text-base h-12 bg-transparent">
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
