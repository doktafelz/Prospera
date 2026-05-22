import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import type { Metadata } from 'next'
import Animate from '@/components/layout/animate'

export const metadata: Metadata = {
    title: 'Terms & Conditions | Prospera Finance Limited',
    description:
        'Review the Prospera Finance Limited Terms & Conditions, including eligibility, service usage, fees, compliance, and dispute resolution for our financial services.',
}

export default function TermsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <Animate>
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80 mb-4">
                                    Terms & Compliance
                                </p>
                            </Animate>

                            <Animate>
                                <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
                                    Prospera Finance Limited Terms & Conditions
                                </h1>
                            </Animate>

                            <Animate delay="200">
                                <p className="text-base text-muted-foreground leading-relaxed md:text-lg mb-6">
                                    Last Updated: 20 May 2026
                                </p>
                            </Animate>

                            <Animate delay="300">
                                <p className="text-base text-muted-foreground leading-relaxed md:text-lg mb-8">
                                    These Terms govern your access to and use of Prospera Finance Limited’s services, products, and digital tools.
                                </p>
                            </Animate>

                            <Animate delay="400">
                                <Button size="lg" asChild>
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                            </Animate>
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-16 lg:py-20">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl space-y-8">
                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Introduction</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Welcome to Prospera Finance Limited, a company incorporated under the laws of the Federal Republic of Nigeria. These Terms & Conditions (“Terms”) govern your access to and use of Prospera Finance Limited’s products, services, website, investment solutions, POS services, agency banking support, digital tools, and related platforms.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        By accessing, registering for, or using any of our services, you agree to comply with these Terms. If you do not agree with any part of these Terms, please discontinue the use of our services.
                                    </p>
                                    <h3 className="text-base font-semibold mb-3">Entire Agreement</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        These Terms, together with our Privacy Policy and any product-specific terms, forms, agreements, or service guidelines provided to you, constitute the entire agreement between you and Prospera Finance Limited concerning the use of our services. They supersede all prior or contemporaneous communications, proposals, representations, and agreements, whether electronic, oral, or written.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">1</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Eligibility</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        To use Prospera Finance services, you must be at least 18 years old, provide accurate, complete, and up-to-date information, have the legal capacity to enter into financial agreements, comply with applicable Nigerian laws and service requirements, and meet any internal verification, risk assessment, or compliance requirements that may apply.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Prospera Finance reserves the right to reject, suspend, or terminate any application or service access where the applicant or user does not meet the required eligibility, verification, operational, or compliance standards.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">2</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Our Services</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Prospera Finance may offer services including, but not limited to investment products, savings and wealth-building solutions, POS and agency banking support, financial advisory services, payment-related services, digital financial tools, business and customer support services, and other financial or technology-enabled services introduced from time to time.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Specific products or services may be subject to additional terms, onboarding documents, forms, service agreements, pricing schedules, or operational guidelines.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Some of our payment, POS, agency banking, settlement, and related financial services may be provided in partnership with, or through the infrastructure, licences, platforms, and regulatory approvals of duly licensed third-party institutions and service providers, including banks, payment processors, payment terminal service providers, switches, and other regulated partners such as Providus Bank and Global Accelerex, where applicable. Prospera Finance does not claim to independently provide services that require regulatory approval unless such approval has been obtained directly or such services are provided through appropriately licensed partners.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">3</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">User Responsibilities</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        By using our services, you agree to provide accurate, complete, and truthful information; keep your account, login details, transaction information, and device access secure; use our services only for lawful purposes; avoid fraudulent, abusive, illegal, or suspicious activities; comply with all product, POS, investment, and operational guidelines provided by Prospera Finance or its partners; and notify us immediately of any unauthorized access, suspicious transaction, fraud attempt, or security concern.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        You are responsible for all activities conducted through your account, profile, device, POS terminal, or assigned service channel, except where the issue is clearly proven to have resulted from Prospera Finance’s negligence or system failure.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">4</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Investment Disclaimer</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Investment products may involve financial risks. While Prospera Finance aims to provide secure, transparent, and reliable investment opportunities, investment returns are not guaranteed unless expressly stated in the specific product terms or agreement.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Returns may vary based on the product type, tenure, market conditions, business performance, regulatory requirements, partner arrangements, and other relevant factors. Past performance does not guarantee future results.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Users are encouraged to carefully review all investment terms before participating and, where necessary, seek independent financial, legal, or professional advice. Prospera Finance shall not be liable for investment decisions made solely based on general information, marketing materials, projections, or past performance.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">5</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">POS & Agency Banking Terms</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Prospera POS agents, merchants, and business users agree to operate only from approved or declared business locations; maintain ethical and lawful business conduct; avoid fraudulent, suspicious, unauthorized, or deceptive transactions; protect customer information and transaction details; comply with Prospera Finance’s operational guidelines; comply with partner bank, PTSP, payment processor, switch, and regulatory requirements; and report failed transactions, disputes, chargebacks, reversals, and suspicious activities promptly.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Prospera POS and agency banking services are provided subject to the operational rules, settlement timelines, transaction limits, fees, compliance requirements, service availability, and infrastructure of our partner banks, payment processors, PTSPs, switches, network providers, and other third-party service providers.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Prospera Finance reserves the right to suspend, restrict, retrieve, or terminate POS services, terminals, or related access where misuse, fraud, suspicious activities, excessive disputes, policy violations, regulatory concerns, or breach of partner requirements are identified. Transaction reversals, settlements, chargebacks, failed transactions, dispute resolution, and service restoration timelines may vary depending on banks, payment processors, switches, PTSPs, network providers, and other third-party systems involved.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">6</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Fees and Charges</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Applicable fees, commissions, service charges, or other costs may apply to certain Prospera Finance products and services. These may include transaction charges, investment management fees, POS terminal costs, maintenance fees, processing fees, settlement or service-related charges, and partner or third-party provider charges, where applicable.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Prospera Finance will aim to maintain transparent pricing and communicate applicable charges where necessary. We reserve the right to modify fees, commissions, or service charges upon at least 30 days’ notice to users, where reasonably practicable. Such notice may be provided through email, SMS, website publication, platform notification, official communication channels, or other appropriate means. Certain third-party fees, bank charges, network charges, regulatory charges, or provider-imposed charges may change based on the policies of the relevant partner or service provider.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">7</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Availability of Services</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        While we work to ensure that our services remain available, secure, and reliable, Prospera Finance does not guarantee uninterrupted access to any service. Service availability may be affected by factors including system maintenance, power failure, internet or network downtime, banking system delays, payment switch downtime, PTSP or terminal provider issues, partner platform downtime, regulatory directives, force majeure events, acts of God, war, terrorism, civil disturbances, epidemics, pandemics, strikes, or other events beyond our reasonable control.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Prospera Finance shall not be liable for any delay, downtime, failed transaction, settlement delay, reversal delay, or service disruption caused by events beyond our reasonable control or by third-party service providers.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">8</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Fraud Prevention, Compliance and Regulatory Requirements</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Prospera Finance may monitor accounts, transactions, POS terminals, user activity, and service usage to prevent fraud, money laundering, terrorism financing, unauthorized activity, regulatory breaches, and other illegal or suspicious conduct.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        We reserve the right to request additional verification or documentation; delay transactions for review; restrict, suspend, or terminate accounts or services under investigation; reverse or withhold transactions where required; retrieve POS terminals or suspend merchant access; and report suspicious activities to relevant authorities or partner institutions where required by law or regulation.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Users agree to comply with applicable Nigerian laws and regulatory requirements, including relevant rules issued by the Central Bank of Nigeria, Nigerian Data Protection Commission, Federal Competition and Consumer Protection Commission, anti-money laundering and counter-terrorism financing laws, and any other applicable regulatory authority.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">9</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Intellectual Property</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        All content on the Prospera Finance website, platforms, documents, and digital materials — including logos, names, trademarks, designs, text, graphics, icons, images, layouts, and service materials — belongs to Prospera Finance Limited or its licensors, unless otherwise stated.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Users may not copy, reproduce, modify, distribute, publish, display, or commercially exploit our content without prior written permission. Use of partner names, logos, or references, where applicable, remains subject to the ownership and rights of the respective partners.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">10</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Limitation of Liability</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        To the maximum extent permitted by law, Prospera Finance shall not be liable for indirect, incidental, special, or consequential losses; loss of profits, revenue, goodwill, business opportunities, or anticipated savings; service interruptions beyond our reasonable control; third-party system failures; failed or delayed transactions caused by banks, payment processors, PTSPs, switches, network providers, or other third-party providers; settlement delays, reversals, chargebacks, or downtime caused by third-party infrastructure; user negligence, fraud, misconduct, or misuse of services; or unauthorized access resulting from a user’s failure to secure login credentials, devices, POS terminals, or account information.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Nothing in these Terms excludes any liability that cannot legally be excluded under applicable Nigerian law.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">11</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Indemnification</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        You agree to indemnify, defend, and hold harmless Prospera Finance Limited, its affiliates, officers, directors, employees, agents, partners, and representatives from and against any claims, liabilities, damages, losses, penalties, costs, and expenses, including reasonable legal fees, arising out of or connected with your use or misuse of our services; your breach of these Terms; your violation of any law, regulation, or third-party right; fraudulent, negligent, or unauthorized activity linked to your account, business, POS terminal, or service access; or false, inaccurate, or misleading information provided by you.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">12</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Suspension or Termination</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Prospera Finance reserves the right to suspend, restrict, or terminate access to any service where false, incomplete, or misleading information is provided; fraudulent or suspicious activity is suspected; these Terms or any product-specific terms are violated; regulatory or partner requirements demand it; there is misuse of POS terminals, digital tools, customer data, or service access; or continued access creates legal, financial, operational, reputational, or compliance risk.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Users may discontinue the use of our services at any time, subject to any outstanding obligations, fees, settlement issues, dispute resolution process, or product-specific terms. Termination or suspension shall not affect any rights, obligations, liabilities, or transactions that arose before the date of termination.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">13</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Privacy and Data Protection</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Use of our services is also governed by our Privacy Policy. By using Prospera Finance services, you consent to the collection, processing, storage, use, and sharing of your personal information as described in our Privacy Policy and as required for service delivery, compliance, fraud prevention, partner processing, and regulatory reporting.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Where necessary, your information may be shared with licensed partner banks, payment processors, PTSPs, switches, identity verification providers, regulators, or other service providers strictly for lawful business, compliance, operational, or service-related purposes. Prospera Finance will take reasonable steps to protect your personal data in line with applicable Nigerian data protection laws.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">14</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Third-Party Services and Partner Platforms</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Certain Prospera Finance services may depend on third-party providers, including banks, payment processors, payment terminal service providers, technology vendors, identity verification providers, payment switches, card processors, and network providers.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        By using such services, you acknowledge that third-party systems may have their own terms, limits, timelines, and operational rules; service delays may occur due to third-party processing or downtime; Prospera Finance may be required to comply with partner instructions, regulatory directives, or provider policies; and some disputes, reversals, settlements, or chargebacks may depend on external providers and timelines outside Prospera Finance’s direct control. Prospera Finance will make reasonable efforts to support users in resolving third-party-related issues but shall not be liable for failures caused solely by third-party platforms, infrastructure, or service providers.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">15</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Governing Law and Dispute Resolution</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        These Terms & Conditions shall be governed by the laws of the Federal Republic of Nigeria. Before initiating legal action, both parties agree to first attempt to resolve any dispute informally by contacting the other party and engaging in good-faith negotiations.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Where a dispute is reported, both parties shall make reasonable efforts to resolve the matter within 14 business days, unless the nature of the dispute requires a longer review period due to banking, settlement, compliance, regulatory, or third-party investigation timelines. Where the dispute cannot be resolved informally, it shall be subject to the jurisdiction of competent Nigerian courts.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">16</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Changes to These Terms</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Prospera Finance may update these Terms periodically to reflect changes in our services, operations, regulatory requirements, partner arrangements, or business practices. Updated versions will be published on our website or communicated through appropriate channels.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Continued use of our services after the updated Terms are published or communicated constitutes acceptance of the revised Terms.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">17</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Severability</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        If any provision of these Terms is found to be unlawful, invalid, void, or unenforceable, that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of the remaining provisions.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-secondary/20 bg-secondary/5">
                                <CardContent className="p-6 md:p-8">
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Contact Information</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-2">
                                        For questions, support, complaints, or enquiries regarding these Terms & Conditions, please contact us through the details below:
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed md:text-base list-inside list-disc pl-5">
                                        <li>Website: www.prosperagroup.co</li>
                                        <li>Email: enquiries@prosperagroup.co</li>
                                        <li>Phone: 0803 969 5299</li>
                                        <li>Company Address: House 1, 52 Junction by 5th Avenue, Festac Town, Lagos, Nigeria.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
