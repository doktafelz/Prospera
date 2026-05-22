import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { CheckCircle, CreditCard, Shield, TrendingUp, Users, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Animate from '@/components/layout/animate'

export const metadata: Metadata = {
    title: 'Prospera POS | Prospera Finance Limited',
    description:
        'Turn your shop into a daily earning point with Prospera POS. Offer withdrawals, transfers, bill payments and grow your income with a secure Providus Bank-backed terminal.',
    openGraph: {
        title: 'Prospera POS | Prospera Finance Limited',
        description:
            'Discover Prospera POS — a secure, bank-backed point-of-sale solution that helps shop owners, kiosks, pharmacies, and roadside businesses earn daily from every transaction.',
        url: 'https://www.prosperagroup.co/pos',
        siteName: 'Prospera Finance Limited',
        images: [
            {
                url: 'https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png',
                width: 1200,
                height: 630,
                alt: 'Prospera POS',
            },
        ],
        locale: 'en_NG',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Prospera POS | Prospera Finance Limited',
        description:
            'Turn your shop into an income point with Prospera POS, powered by Providus Bank. Start earning from withdrawals, transfers, and bill payments today.',
        images: ['https://res.cloudinary.com/devsource/image/upload/v1760524606/DP_3_4x_hrnslm.png'],
    },
}

const whoIsFor = [
    'Shop owners',
    'Kiosk operators',
    'Supermarkets',
    'Fuel stations',
    'Pharmacies',
    'Mini marts',
    'Business centres',
    'Side hustlers',
    'Anyone starting a POS business',
]

const benefits = [
    {
        title: 'Earn Daily',
        description:
            'Make money from every successful withdrawal, transfer, and bill payment processed on your terminal.',
    },
    {
        title: 'Reliable Transactions',
        description:
            'Enjoy fast and stable transactions backed by a secure banking infrastructure powered by Providus Bank.',
    },
    {
        title: 'Simple Onboarding',
        description: 'The application process is straightforward and easy to complete.',
    },
    {
        title: 'Support When You Need It',
        description: 'Our team is available to assist you whenever you need help with your terminal or transactions.',
    },
    {
        title: 'Trusted & Secure',
        description:
            'Prospera POS helps you build customer trust with points that work consistently across every transaction.',
    },
    {
        title: 'Grow Your Existing Business',
        description:
            'A POS terminal brings more people to your shop and adds a reliable income stream alongside your regular business.',
    },
]

const steps = [
    {
        title: 'Apply',
        description: 'Fill out the application form and submit your details.',
    },
    {
        title: 'Get Verified',
        description:
            'Our team reviews your application and confirms your business location and documents.',
    },
    {
        title: 'Receive Your POS Terminal',
        description: 'Once approved, your terminal will be delivered and activated for use.',
    },
    {
        title: 'Start Earning Daily',
        description:
            'Begin processing withdrawals, transfers, and bill payments for customers around you and earn from every transaction.',
    },
]

const requirements = [
    'A valid means of identification',
    'An active phone number',
    'A visible and accessible business location',
    'A passport photograph',
    'A bank account',
]

const faqs = [
    {
        question: 'How long does approval take?',
        answer:
            'Once your application is reviewed and approved, delivery usually takes a few working days.',
    },
    {
        question: 'Do I need a shop before applying?',
        answer:
            'Yes. A visible and accessible location is strongly recommended because customers need to easily find your POS point.',
    },
    {
        question: 'How do I earn money?',
        answer:
            'You earn commissions from transactions processed on your POS terminal, including withdrawals, transfers, and bill payments.',
    },
    {
        question: 'Is the POS secure?',
        answer:
            'Yes. Prospera POS is powered by Providus Bank, providing secure and reliable transactions.',
    },
    {
        question: 'What happens if I need support?',
        answer:
            'Our support team is available to assist you with onboarding, terminal issues, and transaction-related concerns.',
    },
    {
        question: 'Can I run a POS business alongside my current business?',
        answer:
            'Absolutely. Many POS agents in Nigeria run their POS business alongside shops, kiosks, pharmacies, supermarkets, and other businesses.',
    },
]

export default function POSPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24 lg:py-32">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
                            <div className="space-y-6">
                                <Animate>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                                        <CreditCard className="h-4 w-4 text-primary" />
                                        Powered by Providus Bank
                                    </div>
                                </Animate>

                                <Animate>
                                    <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                                        Turn Your Shop Into a Daily Earning Point
                                    </h1>
                                </Animate>

                                <Animate delay="200">
                                    <div className="space-y-4 max-w-3xl">
                                        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                                            People around you need cash withdrawals, transfers, and bill payment services every day. With a Prospera POS terminal powered by Providus Bank, you can serve your community and earn from every transaction.
                                        </p>
                                        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                                            Whether you run a shop, kiosk, supermarket, pharmacy, or busy roadside business, your location can become a reliable source of daily income.
                                        </p>
                                    </div>
                                </Animate>

                                <Animate delay="300">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                        <Button size="lg" asChild className="flex-1 min-w-0 text-base !h-12 min-h-[3rem]">
                                            <Link href="/contact">Apply Now</Link>
                                        </Button>
                                        <Button size="lg" variant="outline" asChild className="flex-1 min-w-0 text-base !h-12 min-h-[3rem] bg-transparent">
                                            <Link href="/contact">Become a Prospera Agent</Link>
                                        </Button>
                                    </div>
                                </Animate>
                            </div>

                            <Animate delay="150">
                                <div className="rounded-[2rem] border border-border bg-white/80 p-4 px-2 md:p-6 shadow-xl shadow-primary/10 backdrop-blur-xl dark:bg-card">
                                    <div className="space-y-6 min-w-0">
                                        <div className="rounded-3xl bg-primary/5 p-4 md:p-6">
                                            <p className="text-sm uppercase tracking-[0.28em] text-primary/90">Why it works</p>
                                            <h2 className="mt-4 text-2xl font-bold text-balance">A practical income stream for local businesses.</h2>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                                                    <CheckCircle className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold">Built for everyday use</p>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        Fast transactions and simple onboarding help you start earning quickly.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
                                                    <Shield className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold">Trusted compliance</p>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        Powered by Providus Bank, the system is secure and reliable across all services.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                                                    <TrendingUp className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold">Earn from every transaction</p>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        Withdrawals, transfers, bills, and quick payments all create revenue opportunities.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Animate>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20 lg:py-24">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-start">
                            <div className="space-y-6">
                                <Animate>
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">What is Prospera POS</p>
                                    <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
                                        A simple and secure payment solution for your location.
                                    </h2>
                                </Animate>

                                <Animate delay="200">
                                    <div className="space-y-4 text-muted-foreground">
                                        <p className="text-base leading-relaxed md:text-lg">
                                            Prospera POS is a simple and secure payment solution that allows you to offer everyday financial services to people around you.
                                        </p>
                                        <p className="text-base leading-relaxed md:text-lg">
                                            With your POS terminal, customers can withdraw cash, transfer money, pay bills, and make quick payments. Every successful transaction earns you money.
                                        </p>
                                        <p className="text-base leading-relaxed md:text-lg">
                                            In many Nigerian communities today, POS agents have become an important part of daily life, helping people access cash and complete transactions quickly without long bank queues or network stress. Prospera POS helps you become that trusted point in your area.
                                        </p>
                                        <p className="text-base leading-relaxed md:text-lg">
                                            Powered by Providus Bank, the system is secure, reliable, and built to support your business growth.
                                        </p>
                                    </div>
                                </Animate>
                            </div>

                            <Animate delay="250">
                                <Card className="border-border bg-muted/10 p-4 px-0 md:p-6 shadow-sm">
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                                                <Users className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="text-lg font-semibold">Everyday services</p>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Create a trusted financial access point for your community.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid gap-3 text-sm text-muted-foreground">
                                            {['Withdraw cash', 'Transfer money', 'Pay bills', 'Make quick payments'].map((item) => (
                                                <div key={item} className="rounded-3xl border border-border bg-background/80 px-4 py-3">
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Animate>
                        </div>
                    </div>
                </section>

                <section className="bg-muted/30 py-16 md:py-20 lg:py-24">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <Animate>
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">Who it is for</p>
                                <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
                                    Prospera POS is for people who want to earn extra daily income while serving customers.
                                </h2>
                            </Animate>
                        </div>

                        <Animate delay="200">
                            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                {whoIsFor.map((item) => (
                                    <Card key={item} className="border-border bg-background/80 p-6 shadow-sm">
                                        <CardContent>
                                            <p className="text-base font-semibold text-foreground">{item}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </Animate>

                        <Animate delay="300">
                            <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-white/80 p-6 text-center shadow-lg dark:bg-card">
                                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                                    If people already pass your location every day, you already have the opportunity to earn from it. Your shop can become the place people rely on for fast withdrawals, transfers, and payments.
                                </p>
                            </div>
                        </Animate>
                    </div>
                </section>

                <section className="py-16 md:py-20 lg:py-24">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <Animate>
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">Benefits</p>
                                <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
                                    Why Choose Prospera POS?
                                </h2>
                            </Animate>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {benefits.map((item) => (
                                <Animate key={item.title} delay="200">
                                    <Card className="border-border bg-background/80 p-4 px-0 md:p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                        <CardContent className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                    <ArrowRight className="h-5 w-5" />
                                                </div>
                                                <p className="text-base md:text-lg font-semibold">{item.title}</p>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </Animate>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-muted/30 py-16 md:py-20 lg:py-24">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                            <div className="space-y-6">
                                <Animate>
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">How it works</p>
                                    <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
                                        Starting your POS business with Prospera is simple.
                                    </h2>
                                </Animate>

                                <div className="space-y-4">
                                    {steps.map((step, index) => (
                                        <Animate key={step.title} delay={`${200 + index * 100}`}>
                                            <div className="rounded-3xl border border-border bg-background/80 p-4 md:p-6 shadow-sm">
                                                <div className="flex items-center gap-4">
                                                    <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-3xl bg-primary/10 text-primary text-lg font-semibold">
                                                        {index + 1}
                                                    </div>
                                                    <div>
                                                        <p className="text-base md:text-lg font-semibold">Step {index + 1} — {step.title}</p>
                                                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">{step.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Animate>
                                    ))}
                                </div>
                            </div>

                            <Animate delay="200">
                                <div className="rounded-[2rem] border border-border bg-white/80 p-4 md:p-8 shadow-xl dark:bg-card">
                                    <div className="space-y-6">
                                        <div className="rounded-3xl bg-primary/10 p-4 md:p-6">
                                            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Start your POS business your way</p>
                                            <h3 className="mt-4 text-2xl font-semibold text-balance">Pricing & model</h3>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="rounded-3xl border border-border bg-background/80 p-5">
                                                <p className="text-lg font-semibold">Self-Funded Option</p>
                                                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                                                    Pay for your POS terminal and start operating immediately after approval. Ideal for existing business owners, shop operators, and entrepreneurs ready to start earning quickly.
                                                </p>
                                            </div>

                                            <div className="rounded-3xl border border-border bg-background/80 p-5">
                                                <p className="text-lg font-semibold">Future Support Options</p>
                                                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                                                    Some agents may qualify for support-based options as the network grows. Terms and conditions apply.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="rounded-3xl border border-border bg-muted/10 p-5">
                                            <p className="text-lg font-semibold">Transparent Process</p>
                                            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground list-inside list-disc">
                                                <li>No complicated setup.</li>
                                                <li>No hidden process.</li>
                                                <li>Just a simple path to starting your POS business and earning daily from transactions in your area.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Animate>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20 lg:py-24">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                            <div className="space-y-6">
                                <Animate>
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">Requirements</p>
                                    <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
                                        To get started, you will need:
                                    </h2>
                                </Animate>

                                <Animate delay="200">
                                    <ul className="space-y-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                                        {requirements.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <span className="mt-1 text-primary">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Animate>

                                <Animate delay="300">
                                    <div className="rounded-3xl border border-border bg-muted/10 p-6">
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Note: Having a good location with regular human traffic increases your earning potential as a POS agent.
                                        </p>
                                    </div>
                                </Animate>
                            </div>

                            <Animate delay="400">
                                <div className="rounded-[2rem] border border-border bg-white/80 p-4 md:p-8 shadow-xl dark:bg-card">
                                    <div className="space-y-5">
                                        <div>
                                            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">How to apply</p>
                                            <h3 className="mt-3 text-2xl md:text-3xl font-bold text-balance">Getting started is easy.</h3>
                                        </div>
                                        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                                            Click the application button below and submit your details. Once your application is reviewed, our team will contact you with the next steps.
                                        </p>

                                        <Button size="lg" asChild className="w-full text-base !h-12 min-h-[3rem]">
                                            <Link href="/contact">Apply for a Prospera POS</Link>
                                        </Button>

                                        <div className="rounded-3xl border border-border bg-muted/10 p-5 text-center">
                                            <p className="text-sm font-semibold text-foreground">Need help with your application?</p>
                                            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                                                Our team is available to guide you through the process.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Animate>
                        </div>
                    </div>
                </section>

                <section className="bg-muted/30 py-16 md:py-20 lg:py-24">
                    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <div className="space-y-6">
                            <Animate>
                                <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">Frequently Asked Questions</p>
                                <h2 className="text-center text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
                                    Answers to your most common POS questions.
                                </h2>
                            </Animate>

                            <Accordion type="single" collapsible className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={faq.question} value={`faq-${index}`} className="border rounded-3xl px-6 last:border-b">
                                        <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-4">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20 lg:py-24">
                    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <Animate>
                            <div className="rounded-[2rem] border border-border bg-white/80 p-4 md:p-8 shadow-xl dark:bg-card">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="mt-3 text-2xl md:text-3xl font-bold text-balance">Start Earning Daily with Prospera POS</h3>
                                    </div>
                                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                                        Whether you already run a business or want to start a new income stream, Prospera POS gives you the opportunity to grow with a secure, bank-backed solution powered by Providus Bank.
                                    </p>
                                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                                        Join our growing network of POS agents today and start earning from every transaction.
                                    </p>
                                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                        <Button size="lg" asChild className="flex-1 min-w-0 text-base !h-12 min-h-[3rem]">
                                            <Link href="/contact">Become a Prospera Agent</Link>
                                        </Button>
                                        <Button size="lg" variant="outline" asChild className="flex-1 min-w-0 text-base !h-12 min-h-[3rem] bg-transparent">
                                            <Link href="/contact">Apply for a POS Terminal</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Animate>
                    </div>
                </section>
            </main>
        </div>
    )
}
