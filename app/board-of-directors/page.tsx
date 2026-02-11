"use client"

import Image from "next/image"
import { Mail, Users, Instagram, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Animate from "@/components/layout/animate"
import DirectorCard from "@/components/layout/directors-card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react"
import ReactMarkdown from "react-markdown"

type DirectorType = "executive" | "non-executive";

const directors = [
  {
    name: "Seun Ajibola Olorunsola",
    title: "Non-Executive Director, Prospera Finance",
    type: "non-executive" as DirectorType,
    image: "/seun-ajibola.jpeg",
    bio: "Seun Ajibola Olorunsola is a seasoned Aviation and Oil & Energy specialist with over 15 years of experience in operations, sales management, and aviation fuel handling. He combines hands-on operational expertise with strategic commercial insight, guiding teams toward sustainable growth and operational excellence.",
    education: "Master's in Project Management (Rome Business School), Master's in Public & International Affairs (University of Lagos), Bachelor's in English & Literature (University of Ado-Ekiti), Project Management Certification (Open University UK), Defensive Driving, Supply Chain & Capacity Planning, Transport Management (UK). Member, Project Management Institute (PMI).",
    impacts: [
      {
        title: "Operational Discipline & Risk Management",
        description: "Strengthens governance, compliance, and operational systems."
      },
      {
        title: "Strategic & Commercial Insight",
        description: "Supports market expansion and sustainable business growth."
      },
      {
        title: "Leadership & Team Development",
        description: "Enhances internal processes and team performance."
      },
      {
        title: "Cross-Industry Perspective",
        description: "Brings high-standard operational thinking from Aviation & Energy."
      },
      {
        title: "Board Governance & Oversight",
        description: "Provides disciplined, strategic guidance as Prospera scales."
      }
    ]
  },
  {
    name: "Dr. Ijeoma Ude",
    title: "Non-Executive Director, Prospera Finance",
    type: "non-executive" as DirectorType,
    image: "/ijeoma.jpeg",
    bio: "Dr. Ijeoma Ude is a leading Media, Brand Communications, and Business Development expert with extensive experience helping brands grow, define their identity, and drive commercial results. She has held key leadership roles at BusinessDay Media Limited, rising from a young executive to Executive Director, Sales and Marketing, and has been recognized with awards including Distinguished Staff Merit Award (2008) and Manager of the Year (2021).",
    education: "LLB (University of Bradford), MBA (University of Chichester), Senior Management Program (Lagos Business School), Doctorate in Leadership & Organizational Management, Fellowships in Strategic Management, HR, and Professional Administration. Certified Advertising Specialist (APCON), CHRP, Conflict Manager, Licensed Peace & Conflictologist.",
    impacts: [
      {
        title: "Brand & Market Strategy",
        description: "Strengthens identity and customer perception."
      },
      {
        title: "Commercial Growth",
        description: "Guides customer acquisition, revenue strategy, and expansion."
      },
      {
        title: "Media & Communications Leadership",
        description: "Enhances public image and credibility."
      },
      {
        title: "Stakeholder Engagement",
        description: "Opens doors to partnerships and strategic collaborations."
      },
      {
        title: "Governance & Oversight",
        description: "Provides experienced board-level guidance for scaling a fintech startup."
      }
    ]
  }
];


export default function TeamPage() {
  const [filterType, setFilterType] = useState<DirectorType>("non-executive");

  const filteredDirectors = directors.filter(
    (director) => director.type === filterType
  );



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <Animate>
                <h1 className="text-3xl font-bold tracking-tight text-balance text-balance sm:text-4xl md:text-5xl">
                  Meet the Directors
                </h1>
              </Animate>

              <Animate delay="200">
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
                  Discover the visionary minds steering Prospera Finance — accomplished professionals dedicated to driving innovation, operational excellence, and transformative growth across Nigeria's financial ecosystem.
                </p>
              </Animate>

              <Animate delay="300">
                <Button size="lg" asChild className="text-base h-12 mt-5">
                  <Link href="/contact">Join Us Today</Link>
                </Button>
              </Animate>
            </div>

            <Animate delay="100">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/diverse-african-business-leadership-team-in-modern.jpg"
                  alt="Prospera Finance Leadership Team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Animate>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">
                Our Leadership Philosophy
              </h2>
            </Animate>

            <Animate delay="200">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Prospera Finance, our leadership team is united by a shared commitment to financial inclusion,
                innovation, and operational excellence. We believe in empowering businesses and individuals through
                accessible financial solutions, backed by expertise, integrity, and a customer-first approach.
              </p>
            </Animate>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 md:py-20 bg-primary/3">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Animate>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Directors</h2>
            </Animate>

            <Animate delay="200">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the experienced leaders guiding Prospera Finance towards sustainable growth,
                operational excellence, and meaningful impact in the fintech industry.
              </p>
            </Animate>
          </div>

          <div className="">
            {/* Filter Select */}
            <div className="flex items-center justify-between mb-8 sm:mb-10">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground">
                {filterType === "executive" ? "Executive Directors" : "Non-Executive Directors"}
              </h2>
              <Select value={filterType} onValueChange={(value: DirectorType) => setFilterType(value)}>
                <SelectTrigger className="w-[180px] sm:w-[220px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="non-executive">Non-Executive</SelectItem>
                  <SelectItem value="executive">Executive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Directors Grid or Empty State */}
            {filteredDirectors.length > 0 ? (
              <div className="grid gap-6 sm:gap-8 lg:gap-10">
                {filteredDirectors.map((member, index) => (
                  <Animate key={index}>
                    <div
                      key={index}
                      className={`bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}
                    >
                      <div
                        className={`grid gap-8 md:grid-cols-5 ${index % 2 === 0 ? "" : "md:grid-flow-dense"
                          }`}
                      >
                        {/* IMAGE SECTION */}
                        <div
                          className={`relative w-full h-[400px] sm:h-[500px] md:h-auto md:col-span-2 ${index % 2 === 0 ? "" : "md:col-start-4"
                            }`}
                        >
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover testimonial-image object-top"
                          />
                        </div>

                        {/* CONTENT SECTION */}
                        <div
                          className={`p-4 pt-0 sm:p-6 md:p-8 flex flex-col justify-center md:col-span-3 ${index % 2 === 0
                            ? ""
                            : "md:col-start-1 md:row-start-1"
                            }`}
                        >
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold mb-2 md:text-3xl">
                              {member.name}
                            </h3>
                            <p className="text-primary font-semibold text-lg mb-4">
                              {member.title}
                            </p>
                          </div>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {member.bio}
                          </p>
                          {/* <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {member.detailedBio}
                      </p> */}
                          <div className="text-sm text-muted-foreground leading-relaxed mb-6 prose prose-sm max-w-none">
                            <ReactMarkdown>{member.education}</ReactMarkdown>
                          </div>

                          <div className="space-y-2">
                            <p className="font-semibold text-sm mb-2">Key Credentials:</p>
                            <ul className="space-y-1">
                              {member.impacts.map((credential, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-muted-foreground flex items-start gap-2"
                                >
                                  <Award className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                                  <span>{credential.description}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Animate>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 sm:py-24 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-muted flex items-center justify-center mb-4 sm:mb-6">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">
                  No Executive Directors Yet
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base max-w-md">
                  Executive director positions are currently being filled. Check back soon for updates.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Why Our Team Matters Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Animate>
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/african-business-professionals-collaborating-in-mo.jpg" alt="Team Collaboration" fill className="object-cover" />
              </div>
            </Animate>


            <div>
              <Animate>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Why Our Team Matters</h2>
              </Animate>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <Animate delay="200">
                  <p>
                    Our leadership team brings together decades of combined experience in finance, technology, operations,
                    and strategic growth. Each member has been carefully selected for their expertise, integrity, and
                    commitment to our mission.
                  </p>
                </Animate>

                <Animate delay="300">
                  <p>
                    From managing complex financial operations to driving digital transformation, our team has the
                    knowledge and vision to navigate the evolving landscape of Nigeria's financial sector.
                  </p>
                </Animate>

                <Animate delay="400">
                  <p>
                    We believe that strong leadership is the foundation of sustainable growth. That's why we invest in
                    continuous learning, embrace innovation, and maintain the highest standards of professionalism and
                    ethical conduct.
                  </p>
                </Animate>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <Animate>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Want to Work With Us?</h2>
            </Animate>

            <Animate delay="200">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                We're always looking for talented individuals who share our passion for financial innovation and
                excellence. Join our growing team and help shape the future of finance in Nigeria.
              </p>
            </Animate>

            <Animate delay="300">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:enquiries@prosperagroup.co"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-lg font-medium transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  enquiries@prosperagroup.co
                </a>
                <a
                  href="https://www.linkedin.com/company/prosperafinance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-8 rounded-lg font-medium transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  Follow Us on Instagram
                </a>
              </div>

            </Animate>
          </div>
        </div>
      </section>
    </div>
  )
}
