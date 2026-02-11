import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Lock, FileCheck, AlertCircle } from "lucide-react"

import type { Metadata } from "next"
import Animate from "@/components/layout/animate"

export const metadata: Metadata = {
  title: "Legal & Compliance | Prospera Finance Limited",
  description:
    "Explore Prospera Finance’s legal and compliance framework. Learn how we ensure transparency, data protection, and regulatory compliance in all our financial services.",
  keywords: [
    "Prospera Finance legal",
    "Prospera Finance compliance",
    "data protection Nigeria",
    "financial regulations Nigeria",
    "loan transparency",
    "responsible lending Nigeria",
    "investment compliance",
    "Prospera Finance Limited",
    "licensed financial institution Nigeria",
  ],
  openGraph: {
    title: "Legal & Compliance | Prospera Finance Limited",
    description:
      "Prospera Finance Limited operates with integrity, adhering to Nigerian financial regulations and data protection laws. Learn how we keep your information secure and our practices transparent.",
    url: "https://www.prosperagroup.co/legal",
    siteName: "Prospera Finance Limited",
    images: [
      {
        url: "https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png",
        width: 1200,
        height: 630,
        alt: "Prospera Finance Legal & Compliance",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prospera Finance | Legal & Compliance",
    description:
      "We prioritize transparency, accountability, and trust. Discover how Prospera Finance ensures compliance and protects your data.",
    images: ["https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png"],
  },
}


export default function LegalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Animate>
                <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
                  Legal & Compliance
                </h1>
              </Animate>

              <Animate delay="200">
                <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                  At Prospera Finance Limited, we prioritize transparency, accountability, and trust. We are fully
                  registered and operate in line with Nigerian financial regulations, giving our clients the confidence to
                  do business with us.
                </p>
              </Animate>

              <Animate delay="300">
                <Button size="lg" asChild className="text-base h-12 mt-5">
                  <Link href="/contact">Apply Now</Link>
                </Button>
              </Animate>
            </div>
          </div>
        </section>

        {/* Legal Content */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Animate>
              <div className="mx-auto max-w-4xl space-y-8">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold mb-3 md:text-2xl">Licensed & Regulated</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                      Prospera Finance Limited is a legally registered financial services company. Our operations are
                      guided by the standards of relevant financial regulatory bodies, ensuring that our clients are
                      protected at all times.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold mb-3 md:text-2xl">Data Protection</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                      We value your privacy. Every piece of information you share with us is kept secure and used strictly
                      for service delivery.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <FileCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold mb-3 md:text-2xl">Fair & Transparent Practices</h2>
                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed md:text-base">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Clear loan terms with no hidden charges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Responsible lending tailored to your needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Honest investment opportunities with proper disclosures</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                      <Shield className="h-6 w-6 text-secondary" />
                    </div>
                    <h2 className="text-xl font-bold mb-3 md:text-2xl">Our Commitment</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                      We ensure that every transaction, agreement, or partnership is carried out with integrity,
                      professionalism, and respect for our clients.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/20 bg-secondary/5">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                      <AlertCircle className="h-6 w-6 text-secondary" />
                    </div>
                    <h2 className="text-xl font-bold mb-3 md:text-2xl">Disclaimer</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                      All financial products and services offered by Prospera Finance Limited are subject to eligibility,
                      approval, and applicable terms & conditions. Clients are encouraged to read and understand all
                      agreements carefully before signing.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Animate>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Animate>
              <h2 className="text-2xl font-bold text-balance sm:text-3xl mb-4">Questions About Our Policies?</h2>
            </Animate>

            <Animate delay="200">
              <p className="text-base text-muted-foreground mb-6 md:text-lg">
                Our team is here to provide clarity and answer any questions you may have.
              </p>
            </Animate>

            <Animate delay="300">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </Animate>
          </div>
        </section>
      </main>
    </div>
  )
}
