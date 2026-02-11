import type React from "react"

import type { Metadata } from "next"
import ContactPageClient from "./client"

export const metadata: Metadata = {
  title: "Contact Prospera Finance - Get in Touch With Our Team",
  description:
    "Reach out to Prospera Finance for inquiries, support, or partnership opportunities. Contact us today to learn more about our financial solutions, loan services, and investment opportunities tailored for you.",
  openGraph: {
    title: "Contact Prospera Finance - Get in Touch With Our Team",
    description:
      "Have questions about loans, investments, or partnerships? Contact Prospera Finance today — our team is ready to guide you toward financial growth and success.",
    url: "https://www.prosperagroup.co/contact",
    siteName: "Prospera Finance",
    images: [
      {
        url: "https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png",
        width: 1200,
        height: 630,
        alt: "Contact Prospera Finance - Customer Support and Offices",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Prospera Finance - Speak With Our Experts",
    description:
      "We’re here to help with all your finance, investment, and business inquiries. Reach out to Prospera Finance and get the support you need today.",
    images: [
      "https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png",
    ],
  },
  alternates: {
    canonical: "https://www.prosperagroup.co/contact",
  },
}


export default function ContactPage() {

  return (
    <ContactPageClient />
  )
}
