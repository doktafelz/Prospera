import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

import type { Metadata } from "next"
import Animate from "@/components/layout/animate"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Prospera Finance Limited",
  description:
    "Find answers to common questions about loans, investments, and our financial services at Prospera Finance Limited. Learn how to apply, invest safely, and grow your wealth confidently.",
  keywords: [
    "Prospera Finance FAQ",
    "loan questions",
    "investment FAQs",
    "Prospera Finance support",
    "how to apply for a loan",
    "safe investment plans",
    "financial help in Nigeria",
  ],
  openGraph: {
    title: "Frequently Asked Questions | Prospera Finance Limited",
    description:
      "Get quick answers about our loan and investment services. At Prospera Finance, we help individuals and businesses achieve financial success with clarity and transparency.",
    url: "https://www.prosperagroup.co/faq",
    siteName: "Prospera Finance Limited",
    images: [
      {
        url: "https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png",
        width: 1200,
        height: 630,
        alt: "Prospera Finance Frequently Asked Questions",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prospera Finance | Frequently Asked Questions",
    description:
      "Learn everything about Prospera Finance’s loans, investments, and repayment options. Find clear answers to your financial questions.",
    images: ["https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png"],
  },
}


export default function FAQsPage() {
  const loanFAQs = [
    {
      question: "Who can apply for a loan with Prospera Finance?",
      answer:
        "Any individual or business that meets our minimum requirements (valid ID, verifiable income, and proof of need) can apply. We offer solutions for SMEs, salary earners, asset buyers, and contractors.",
    },
    {
      question: "How long does loan approval take?",
      answer: "In most cases, approvals are processed within 24–48 hours, provided all documents are submitted.",
    },
    {
      question: "What documents do I need to apply?",
      answer:
        "Typically, you'll need: A valid means of identification, Proof of income (payslip, business statement, or contract), Bank statement (for the last 3–6 months), and Relevant supporting documents (e.g., LPO for contractors).",
    },
    {
      question: "How do I repay my loan?",
      answer:
        "Repayments can be made via direct bank transfer, standing order, or salary deduction (for payroll loans). We design repayment terms to match your cash flow.",
    },
  ]

  const investmentFAQs = [
    {
      question: "How safe are my investments?",
      answer:
        "Your investments are handled with the highest level of transparency and security. We only operate within structured, safe, and clearly defined financial models.",
    },
    {
      question: "What is the minimum amount I can invest?",
      answer:
        "The minimum investment amount depends on the plan you choose. We offer flexible tiers to accommodate both new and experienced investors.",
    },
    {
      question: "How often will I get returns?",
      answer:
        "Depending on your investment package, returns may be paid monthly, quarterly, or at maturity. This will always be clearly stated before you commit.",
    },
    {
      question: "Can I withdraw my investment before maturity?",
      answer:
        "Yes, but early withdrawal may attract certain conditions. Full details will be provided in your investment plan agreement.",
    },
  ]

  const generalFAQs = [
    {
      question: "Do you charge hidden fees?",
      answer: "No. At Prospera Finance, we are fully transparent. All charges and rates are clearly stated upfront.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach us via email, phone, or by filling out the contact form on our website. Our team is always ready to help.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Animate>

                <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
                  Frequently Asked Questions
                </h1>
              </Animate>

              <Animate delay="200">

                <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                  We've answered some of the most common questions to help you get started with confidence.
                </p>
              </Animate>

              <Animate delay="300">
                <Button size="lg" asChild className="text-base h-12 mt-5">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </Animate>
            </div>
          </div>
        </section>

        {/* FAQs Content */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-12">
              {/* Loans FAQs */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Loans</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {loanFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`loan-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                        Q{index + 1}: {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Investments FAQs */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Investments</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {investmentFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`investment-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                        Q{index + 5}: {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* General FAQs */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">General</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {generalFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`general-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                        Q{index + 9}: {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Animate>
              <h2 className="text-2xl font-bold text-balance sm:text-3xl mb-4">Still have questions?</h2>
            </Animate>

            <Animate delay="200">
              <p className="text-base text-muted-foreground mb-6 md:text-lg">
                Contact us or speak directly with a Prospera Finance advisor today.
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
