import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import type { Metadata } from 'next'
import Animate from '@/components/layout/animate'

export const metadata: Metadata = {
    title: 'Privacy Policy | Prospera Finance Limited',
    description:
        'Read the Prospera Finance Limited Privacy Policy, including how we collect, use, protect, and share your personal and business information in line with Nigerian data protection law.',
}

export default function PrivacyPolicyPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <Animate>
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80 mb-4">
                                    Privacy & Disclosure
                                </p>
                            </Animate>

                            <Animate>
                                <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
                                    Prospera Finance Limited Privacy Policy
                                </h1>
                            </Animate>

                            <Animate delay="200">
                                <p className="text-base text-muted-foreground leading-relaxed md:text-lg mb-6">
                                    Last Updated: 20 May 2026
                                </p>
                            </Animate>

                            <Animate delay="300">
                                <p className="text-base text-muted-foreground leading-relaxed md:text-lg mb-8">
                                    Prospera Finance Limited values your privacy and is committed to protecting your personal information across our website, services, digital tools, and customer support channels.
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
                                        Prospera Finance Limited (“Prospera”, “Prospera Finance”, “we”, “our”, or “us”) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, process, store, share, retain, and protect your personal information when you access or use our website, products, services, investment solutions, POS services, agency banking support, digital tools, applications, customer support channels, or when you otherwise communicate with us.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        This Privacy Policy is governed by the Nigeria Data Protection Act, 2023, applicable directives and guidance issued by the Nigeria Data Protection Commission, and other relevant data protection, financial services, consumer protection, anti-money laundering, and regulatory requirements applicable in Nigeria. By accessing or using Prospera Finance services, you acknowledge that you have read and understood this Privacy Policy.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">1</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Information We Collect</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        We may collect personal, business, technical, transactional, and verification information depending on the service you use, your relationship with us, and applicable regulatory or partner requirements.
                                    </p>

                                    <h3 className="text-base font-semibold mb-3">1.1 Personal Information</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-3">
                                        We may collect information such as:
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed md:text-base list-inside list-disc pl-5">
                                        <li>Full name;</li>
                                        <li>Phone number;</li>
                                        <li>Email address;</li>
                                        <li>Residential address;</li>
                                        <li>Date of birth;</li>
                                        <li>Gender, where required for verification or compliance purposes;</li>
                                        <li>Passport photograph;</li>
                                        <li>Government-issued identification document;</li>
                                        <li>Bank Verification Number (BVN), National Identification Number (NIN), driver’s licence number, taxpayer identification number, or other identity verification details where applicable;</li>
                                        <li>Bank account details;</li>
                                        <li>Signature, forms, or documents submitted during onboarding or service use;</li>
                                        <li>Any other information you voluntarily provide to us.</li>
                                    </ul>

                                    <h3 className="text-base font-semibold mt-6 mb-3">1.2 Business Information</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-3">
                                        For POS agents, merchants, businesses, corporate customers, vendors, or partners, we may collect:
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed md:text-base list-inside list-disc pl-5">
                                        <li>Business name;</li>
                                        <li>Business address or operating location;</li>
                                        <li>Nature of business;</li>
                                        <li>Business registration details, where applicable;</li>
                                        <li>Tax identification details, where applicable;</li>
                                        <li>Director, proprietor, shareholder, or authorised representative information;</li>
                                        <li>Business contact details;</li>
                                        <li>Merchant or agent onboarding information;</li>
                                        <li>Terminal assignment details;</li>
                                        <li>Transaction history and settlement information;</li>
                                        <li>Other information required for onboarding, due diligence, risk assessment, compliance, service delivery, or partner processing.</li>
                                    </ul>

                                    <h3 className="text-base font-semibold mt-6 mb-3">1.3 Technical and Usage Information</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-3">
                                        When you use our website, digital platforms, forms, applications, or online services, we may collect:
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed md:text-base list-inside list-disc pl-5">
                                        <li>IP address;</li>
                                        <li>Browser type;</li>
                                        <li>Device type and device information;</li>
                                        <li>Operating system;</li>
                                        <li>Cookies and usage data;</li>
                                        <li>Pages visited on our website;</li>
                                        <li>Date, time, and duration of visits;</li>
                                        <li>Referral source;</li>
                                        <li>Interaction with forms, links, and platform features;</li>
                                        <li>General location information derived from your device or IP address, where applicable.</li>
                                    </ul>

                                    <h3 className="text-base font-semibold mt-6 mb-3">1.4 Transaction and Financial Information</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-3">
                                        We may collect information relating to:
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed md:text-base list-inside list-disc pl-5">
                                        <li>Investments;</li>
                                        <li>Savings products;</li>
                                        <li>POS transactions;</li>
                                        <li>Withdrawals;</li>
                                        <li>Deposits;</li>
                                        <li>Transfers;</li>
                                        <li>Bill payments;</li>
                                        <li>Settlement records;</li>
                                        <li>Failed, reversed, or disputed transactions;</li>
                                        <li>Payment history;</li>
                                        <li>Fees, commissions, and charges;</li>
                                        <li>Transaction references and related metadata.</li>
                                    </ul>

                                    <h3 className="text-base font-semibold mt-6 mb-3">1.5 Sensitive Personal Data</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-3">
                                        We may collect certain sensitive or regulated personal information, such as BVN, NIN, passport photograph, identity documents, financial information, and transaction records, primarily for:
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed md:text-base list-inside list-disc pl-5">
                                        <li>Know-Your-Customer verification;</li>
                                        <li>Anti-money laundering and counter-terrorism financing compliance;</li>
                                        <li>Fraud prevention;</li>
                                        <li>Identity verification;</li>
                                        <li>Regulatory reporting;</li>
                                        <li>Transaction monitoring;</li>
                                        <li>Risk management;</li>
                                        <li>Service delivery through licensed partners.</li>
                                    </ul>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mt-4">
                                        We will only collect sensitive or regulated information where necessary, lawful, and relevant to the service being provided.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">2</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Lawful Basis for Processing Your Information</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        We process your personal information only where we have a lawful basis to do so.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Depending on the circumstances, we may process your information based on one or more of the following:
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed md:text-base list-inside list-disc pl-5">
                                        <li>Consent: where you have given us permission to process your information for a specific purpose;</li>
                                        <li>Contractual necessity: where processing is necessary to provide a product or service you requested, or to take steps before entering into a service relationship with you;</li>
                                        <li>Legal and regulatory obligation: where we are required to process or retain information under applicable laws, regulations, court orders, compliance obligations, or regulatory directives;</li>
                                        <li>Legitimate interest: where processing is necessary for fraud prevention, service improvement, customer support, business administration, internal reporting, security, risk management, or protecting our legal and operational interests;</li>
                                        <li>Public interest or regulatory requirement: where processing is required for compliance with financial crime prevention, law enforcement, regulatory reporting, or other lawful public interest obligations.</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">3</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">How We Use Your Information</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        We may use your information to:
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed md:text-base list-inside list-disc pl-5">
                                        <li>Provide, operate, and manage our services;</li>
                                        <li>Process investment, savings, POS, agency banking, merchant, or customer applications;</li>
                                        <li>Verify your identity and eligibility;</li>
                                        <li>Conduct KYC, AML, CFT, sanctions, fraud, and risk checks;</li>
                                        <li>Process transactions, settlements, payments, withdrawals, reversals, and disputes;</li>
                                        <li>Communicate with you about your account, application, transaction, or service request;</li>
                                        <li>Respond to complaints, enquiries, and customer support requests;</li>
                                        <li>Monitor transactions and service usage for fraud, abuse, suspicious activity, or regulatory compliance;</li>
                                        <li>Improve our website, products, services, systems, and customer experience;</li>
                                        <li>Send service updates, policy updates, security alerts, and important notifications;</li>
                                        <li>Send marketing communications, where permitted;</li>
                                        <li>Conduct internal analysis, reporting, audits, and business planning;</li>
                                        <li>Enforce our Terms & Conditions, agreements, and operational guidelines;</li>
                                        <li>Meet legal, regulatory, tax, accounting, audit, and compliance obligations;</li>
                                        <li>Protect the rights, property, safety, and interests of Prospera Finance, our users, partners, employees, and the public.</li>
                                    </ul>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mt-4">
                                        We do not sell your personal information to third parties.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">4</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Automated Decision-Making and Profiling</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        We may use automated or semi-automated processes to support identity verification, fraud detection, transaction monitoring, risk scoring, compliance checks, and service eligibility assessment. Where an automated process results in a significant decision about you, you may request human review or intervention, subject to applicable laws, regulatory requirements, fraud prevention obligations, and service-specific conditions.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">5</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Cookies and Tracking Technologies</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Our website and digital platforms may use cookies and similar technologies to improve user experience, analyse website traffic, remember user preferences, enhance functionality, and understand how visitors use our services.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Cookies may help us improve website performance, remember preferences, analyse traffic and usage patterns, detect technical issues, support security and fraud prevention, and improve content and service delivery. You may disable cookies through your browser settings. However, some parts of our website or digital services may not function properly if cookies are disabled. Where required, we will request your consent before using non-essential cookies.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">6</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">How We Share Your Information</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        We may share your information where necessary, lawful, and relevant to the services we provide.
                                    </p>
                                    <h3 className="text-base font-semibold mb-3">6.1 Licensed Banking and Financial Partners</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-3">
                                        We may share your information with licensed banks, financial institutions, payment processors, settlement banks, payment terminal service providers, switches, card processors, and other regulated partners for purposes including account opening, transaction processing, settlement, KYC, AML/CFT compliance, fraud prevention, dispute resolution, regulatory reporting, and service delivery.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Some Prospera Finance services may rely on the infrastructure, systems, platforms, licences, regulatory approvals, or operational frameworks of third-party providers and licensed partners.
                                    </p>
                                    <h3 className="text-base font-semibold mb-3">6.2 Service Providers and Vendors</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        We may share information with third-party service providers that support our operations, including cloud hosting, technology vendors, identity verification providers, payment processors, AML and fraud monitoring providers, customer support tools, analytics providers, email/SMS providers, advisers, auditors, consultants, and digital marketing support providers. These providers are expected to process your information only for authorised purposes and to protect it using appropriate security and confidentiality measures.
                                    </p>
                                    <h3 className="text-base font-semibold mb-3">6.3 Regulatory, Legal, and Government Authorities</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        We may disclose your information to regulators, law enforcement agencies, courts, government bodies, tax authorities, financial intelligence units, or other lawful authorities where required or permitted by law for compliance, lawful requests, suspicious transaction reporting, legal rights protection, fraud prevention, and regulatory obligations.
                                    </p>
                                    <h3 className="text-base font-semibold mb-3">6.4 Business Transfers</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        If Prospera Finance undergoes a merger, restructuring, acquisition, investment, asset transfer, financing arrangement, or similar business transaction, your information may be transferred or disclosed as part of that process, subject to appropriate confidentiality, legal, and data protection safeguards.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">7</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Cross-Border Data Transfers</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Some of our service providers, technology platforms, hosting providers, communication tools, analytics services, or operational partners may process or store data outside Nigeria. Where your personal information is transferred outside Nigeria, we will take reasonable steps to ensure that such transfers are made in accordance with applicable data protection laws and are protected through appropriate safeguards, contractual obligations, security controls, or lawful transfer mechanisms.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">8</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">How We Protect Your Information</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Prospera Finance takes reasonable administrative, technical, and physical measures to protect your information against unauthorised access, misuse, loss, alteration, disclosure, or destruction.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed md:text-base list-inside list-disc pl-5">
                                        <li>Secure servers and access controls;</li>
                                        <li>Encryption and other appropriate security controls where applicable;</li>
                                        <li>Restricted staff access based on business need;</li>
                                        <li>Identity verification procedures;</li>
                                        <li>Transaction monitoring;</li>
                                        <li>Staff confidentiality obligations;</li>
                                        <li>Internal policies and operational controls;</li>
                                        <li>Secure record handling and retention procedures;</li>
                                        <li>Periodic review of security practices.</li>
                                    </ul>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mt-4">
                                        Although we take reasonable steps to protect your information, no physical or digital system can guarantee absolute security. You are also responsible for keeping your login details, devices, account information, and POS terminal access secure.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">9</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Data Retention</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including to provide our services, maintain records, meet legal and regulatory obligations, resolve disputes, prevent fraud, enforce agreements, support investigations, and comply with partner and regulatory requirements.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Financial transaction records, identity verification records, and compliance-related records may typically be retained for a minimum of seven (7) years, or for any longer period required by applicable law, regulation, partner requirement, dispute, investigation, or legitimate business need. When information is no longer required, we will take reasonable steps to securely delete, anonymise, archive, or restrict access to it where appropriate.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">10</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Your Data Protection Rights</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Subject to applicable laws, verification requirements, and lawful exemptions, you may have the right to:
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed md:text-base list-inside list-disc pl-5">
                                        <li>Be informed about how your personal information is processed;</li>
                                        <li>Request access to your personal information;</li>
                                        <li>Request correction of inaccurate or incomplete information;</li>
                                        <li>Request deletion of your information where applicable;</li>
                                        <li>Withdraw consent where processing is based on consent;</li>
                                        <li>Object to certain forms of processing;</li>
                                        <li>Request restriction of processing;</li>
                                        <li>Request data portability where applicable;</li>
                                        <li>Request clarification about how your information is used;</li>
                                        <li>Request human review of certain automated decisions;</li>
                                        <li>Lodge a complaint with the Nigeria Data Protection Commission or another competent authority.</li>
                                    </ul>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mt-4">
                                        To exercise any of these rights, please contact us using the details provided in this Privacy Policy. We may need to verify your identity before processing your request. We will endeavour to respond to valid requests within thirty (30) days, subject to applicable legal, regulatory, security, or operational requirements. Some requests may not be granted where we are required to retain or process the information for legal, regulatory, contractual, fraud prevention, dispute resolution, AML/CFT, or legitimate business reasons.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">11</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Marketing Communications</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        We may send you updates about our products, services, investment opportunities, educational content, campaigns, offers, or other relevant information.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        You may opt out of marketing communications at any time by following the unsubscribe instructions in the message or by contacting us. Even if you opt out of marketing communications, we may still send you important service-related messages, including transaction notifications, security alerts, policy updates, regulatory notices, account information, or other non-marketing communications necessary for service delivery.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">12</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Children’s Privacy</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Our services are intended for individuals who are at least 18 years old, unless a service is lawfully provided with parental or legal guardian involvement and in compliance with applicable requirements.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        We do not knowingly collect personal information from minors unlawfully. If we become aware that we have collected personal information from a minor without appropriate consent or lawful basis, we will take reasonable steps to delete or restrict such information, subject to applicable legal or regulatory obligations.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">13</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Third-Party Links and External Platforms</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        Our website, communications, or digital services may contain links to third-party websites, platforms, or services.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Prospera Finance is not responsible for the privacy practices, content, security, or data handling practices of external websites or third-party platforms. Users are encouraged to review the privacy policies and terms of those third-party platforms before using them.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">14</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Data Breach Notification</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        If we become aware of a data breach or security incident involving your personal information, we will take reasonable steps to investigate, contain, and remediate the incident. Where required by applicable law or regulation, we will notify affected users, relevant regulators, partners, or authorities within the required timeframe and provide appropriate information about the incident and any recommended protective steps.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">15</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Complaints and Enquiries</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        If you have questions, concerns, complaints, or requests relating to this Privacy Policy or how your personal information is handled, please contact us using the details below. We will review your complaint and make reasonable efforts to resolve it in a fair and timely manner. Where you are not satisfied with our response, you may contact the Nigeria Data Protection Commission or any other competent regulatory authority.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-primary text-lg font-bold">16</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Changes to This Privacy Policy</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-4">
                                        We may update this Privacy Policy periodically to reflect changes in our services, operations, technology, partner arrangements, legal obligations, regulatory requirements, or business practices. Updated versions will be published on our website with a revised “Last Updated” date.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                                        Continued use of our services after updates are published or communicated means you acknowledge the updated Privacy Policy.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-secondary/20 bg-secondary/5">
                                <CardContent className="p-6 md:p-8">
                                    <h2 className="text-xl font-bold mb-4 md:text-2xl">Contact Us</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base mb-2">
                                        If you have questions about this Privacy Policy, your personal information, or how your information is handled, please contact us:
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
