import Image from "next/image"
import { Mail, Linkedin, Award, Users, Target, TrendingUp, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import TeamMembers from "./team-members"
import Animate from "@/components/layout/animate"
import ReactMarkdown from "react-markdown"


export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Joshua Obinna Umesegha",
      title: "Managing Director",
      image: "/Obinna.jpg",
      bio: "Dr. Joshua Obinna Umesegha is an accomplished financial strategist and operations leader with deep experience across lending, credit management, and compliance.",
      detailedBio:
        `He began his career as a Loan Officer at Virtue One Global Investment Ltd, where his exceptional performance earned him a promotion to Senior Credit Analyst. In 2023, he joined Auto Bucks Lender Limited as a Senior Credit Manager and quickly rose to the position of Branch Manager within just one year and seven months — a testament to his leadership, diligence, and analytical excellence. As the Managing Director of Prospera Finance, Dr. Joshua oversees finance, strategy, operations, compliance, and the overall performance of the organization. His leadership combines strategic insight with operational precision, driving Prospera's mission to provide accessible and innovative financial solutions across Nigeria. 
        Dr.Joshua is a **Fellow International Certified Risk Management Professional, United Kingdom(FICRMP- UK)** and a **Fellow of the Chartered Institute of Loans & Risk Management(FCILRM)**. He is also a Doctorate Fellow of the Institute of Entrepreneurship & Apprenticeship Management & Administration(IEAMA).He holds a Bachelor’s degree in International Relations from Covenant University and has earned a certification in General Banking and Operations from CRC Credit Bureau Limited.His vision and commitment to financial inclusion continue to position Prospera Finance as a trusted and forward - thinking player in the fintech space.`,
      credentials: [
        "Fellow International Certified Risk Management Professional – United Kingdom (FICRMP-UK)",
        "Fellow Chartered Institute of Loans & Risk Management (FCILRM)",
        "Doctorate Fellow – Institute of Entrepreneurship & Apprenticeship Management & Administration (IEAMA)",
        "BSc International Relations – Covenant University",
        "Certified in General Banking & Operations – CRC Credit Bureau Limited",
      ],
    },
    {
      name: "Dr. Adeogun Mojisola Abigail",
      title: "Chief Operating Officer",
      image: "/Mojisola.jpg",
      bio: "Dr. Adeogun Mojisola Abigail is a dynamic business leader with a proven track record in business development, operations, and compliance.",
      detailedBio:
        "She began her career at Think Finance Microfinance Bank as an Executive Loan Manager and later joined Alert Microfinance Bank, where she rose through the ranks from Senior Executive Loan Manager to Branch Manager and eventually Regional Manager. At Prospera Finance, she serves as the Chief Operating Officer, where she leads operational strategy, ensures regulatory compliance, and drives business growth across all service lines. Dr. Mojisola holds a Doctorate Fellowship from the Institute of Entrepreneurship and Management (IEAMA), an MBA (with distinction) from Throne Management Business School, Switzerland, and a BSc in Business Administration from the same institution. She is also a Certified Risk Management Professional and a Member of the Chartered Institute of Bankers of Nigeria (MCIB). With her leadership and passion for operational excellence, Dr. Mojisola continues to strengthen Prospera's foundation for sustainable growth and innovation.",
      credentials: [
        "Doctorate Fellow - IEAMA",
        "MBA with Distinction - Switzerland",
        "MCIB - Chartered Institute of Bankers",
      ],
    },
    {
      name: "Oluwatobi Adewara",
      title: "Head, Alliance and Investment",
      image: "/Oluwatobi.jpg",
      bio: "Oluwatobi Adewara is a seasoned professional with more than six years of experience spanning the banking, learning and development, and transport and logistics industries.",
      detailedBio:
        "At Prospera Finance, he leads the Alliance and Investment division, driving strategic partnerships, investment management, and business growth initiatives. His expertise covers sales and business development, balance sheet management, and relationship management within both retail and SME banking environments. Oluwatobi holds a Bachelor's degree in Economics Education from the University of Ilorin and is an alumnus of the GTBank Banking Academy. He is recognized for his disciplined work ethic, analytical mindset, and commitment to sustainable financial growth.",
      credentials: [
        "BSc Economics Education - University of Ilorin",
        "GTBank Banking Academy Alumni",
        "6+ Years Banking Experience",
      ],
    },
    {
      name: "Johnson Adesanmi",
      title: "Chief Technology Officer (CTO)",
      image: "/johnson.jpg",
      bio: "Johnson Adesanmi is an accomplished technology executive and innovation strategist with over 10 years of experience spanning project management, cybersecurity, cloud infrastructure, and digital transformation.",
      detailedBio:
        "As Chief Technology Officer at Prospera Finance, Johnson leads the company's technology direction, product development, and digital infrastructure initiatives. He oversees data security, compliance support, and the execution of technical strategies that power Prospera's secure and scalable financial solutions. Throughout his career, Johnson has contributed to several technology-driven organizations, including Microsoft, Crossover, SMG, NTS Africa, and Whogohost (now G054). He also serves as the Chief Operating Officer and Project Manager at The FoundersLab, where he led the development of Kawa, the company's first product. Johnson holds a Bachelor's degree in Computer Information Systems from Babcock University and a Master's degree in Computer Information Systems from Lead City University. He is also a leadership member of the Microsoft Azure Community. His professional certifications include Cisco, Palo Alto, Microsoft Azure, Fortinet, DefensityOne, Certification Edge, and PMP Experts, reflecting his commitment to excellence in technology leadership, cloud security, and innovation. With a future-focused mindset and a deep passion for digital transformation, Johnson continues to advance Prospera's mission of building a secure, efficient, and technology-driven financial ecosystem.",
      credentials: [
        "MSc Computer Information Systems",
        "Microsoft Azure Community Leader",
        "Multiple Tech Certifications (Cisco, Palo Alto, Azure)",
      ],
    },
    {
      name: "Opeyeoluwa Jayeoba",
      title: "Head, Legal and Company Secretary",
      image: "/Opeoluwa.jpg",
      bio: "Opeyeoluwa Jayeoba is a dedicated and accomplished legal professional with expertise in corporate law, compliance, and strategic advisory.",
      detailedBio:
        "Opeyeoluwa Jayeoba is a dedicated and accomplished legal professional with over 5 years of post-call experience spanning corporate law, property management, and regulatory compliance. She currently serves as an Associate Partner at Lawswerde Attorneys, a full-service Nigerian law firm, and leads the legal function at Zealand Properties. At Prospera Finance, Opeyeoluwa plays a pivotal role in ensuring legal soundness across all business operations. She provides strategic legal guidance to the board, oversees compliance and corporate governance structures, and supports the company’s growth through proactive legal and regulatory advisory. Her multidisciplinary background and business acumen enable her to balance innovation with compliance, ensuring that Prospera Finance operates with integrity, transparency, and legal precision.",
      credentials: [
        "LLB, BL – Barrister & Solicitor of the Supreme Court of Nigeria",
        "5+ Years Post-Call Legal Experience",
        "Expertise in Corporate Governance & Compliance",
      ],
    },
  ]


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <Animate>
                <h1 className="text-3xl font-bold tracking-tight text-balance text-balance sm:text-4xl md:text-5xl">
                  Meet the Team
                </h1>
              </Animate>

              <Animate delay="200">
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
                  Meet the leadership team behind Prospera Finance — a group of visionary professionals driving
                  innovation, operational excellence, and strategic growth in Nigeria's financial ecosystem.
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
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Our Executive Team</h2>
            </Animate>

            <Animate delay="200">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the experienced professionals leading Prospera Finance to new heights of excellence and innovation.
              </p>
            </Animate>
          </div>

          <div className="space-y-12">
            {teamMembers.map((member, index) => (
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
                        <ReactMarkdown>{member.detailedBio}</ReactMarkdown>
                      </div>

                      <div className="space-y-2">
                        <p className="font-semibold text-sm mb-2">Key Credentials:</p>
                        <ul className="space-y-1">
                          {member.credentials.map((credential, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <Award className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                              <span>{credential}</span>
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
