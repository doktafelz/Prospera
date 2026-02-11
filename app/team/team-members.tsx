"use client"
import { useState } from "react";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const teamMembers = [
    {
        name: "Dr. Joshua Obinna Umesegha",
        title: "Managing Director",
        image: "https://res.cloudinary.com/devsource/image/upload/v1760471548/Obinna_q5nyru.jpg",
        bio: "Dr. Joshua Obinna Umesegha is an accomplished financial strategist and operations leader with deep experience across lending, credit management, and compliance.",
        detailedBio:
            `He began his career as a Loan Officer at Virtue One Global Investment Ltd, where his exceptional performance earned him a promotion to Senior Credit Analyst. In 2023, he joined Auto Bucks Lender Limited as a Senior Credit Manager and quickly rose to the position of Branch Manager within just one year and seven months — a testament to his leadership, diligence, and analytical excellence. As the Managing Director of Prospera Finance, Dr. Joshua oversees finance, strategy, operations, compliance, and the overall performance of the organization. His leadership combines strategic insight with operational precision, driving Prospera's mission to provide accessible and innovative financial solutions across Nigeria. 
             Dr.Joshua is a *Fellow International Certified Risk Management Professional, United Kingdom(FICRMP- UK)* and a * Fellow of the Chartered Institute of Loans & Risk Management(FCILRM) *.He is also a Doctorate Fellow of the Institute of Entrepreneurship & Apprenticeship Management & Administration(IEAMA).He holds a Bachelor’s degree in International Relations from Covenant University and has earned a certification in General Banking and Operations from CRC Credit Bureau Limited.His vision and commitment to financial inclusion continue to position Prospera Finance as a trusted and forward - thinking player in the fintech space.`,
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
        image: "/Mojisola.jpeg",
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
        image: "/Oluwatobi.jpeg",
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

];

const TeamMembers = () => {
    const [expandedMembers, setExpandedMembers] = useState<number[]>([]);

    const toggleMember = (index: number) => {
        setExpandedMembers((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <main className="min-h-screen bg-background">
            {/* Team Members Section */}
            <section className="py-16 md:py-20 bg-muted/30">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Our Leadership Team</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Meet the experienced professionals leading Prospera Finance to new heights of excellence and innovation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member, index) => {
                            const isExpanded = expandedMembers.includes(index);

                            return (
                                <div
                                    key={index}
                                    className="bg-card border border-border overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col"
                                >
                                    {/* Image Section - Fixed, doesn't scroll */}
                                    <div className="relative h-[400px] bg-gray-50">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="testimonial-image h-[400px] w-full object-top object-cover"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="py-6 px-4 flex flex-col flex-1">
                                        {/* Header - Always visible */}
                                        <div className="mb-3">
                                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                            <p className="text-primary font-semibold text-sm">{member.title}</p>
                                        </div>

                                        {/* Short Bio - Always visible */}
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>

                                        {/* Expandable Content */}
                                        {isExpanded && (
                                            <div className="flex-1 overflow-y-auto max-h-64 mb-4 pr-2 space-y-4">
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {member.detailedBio}
                                                </p>

                                                <div className="space-y-2 pt-2">
                                                    <p className="font-semibold text-sm mb-2">Key Credentials:</p>
                                                    <ul className="space-y-1">
                                                        {member.credentials.map((credential, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="text-sm text-muted-foreground flex items-start gap-2"
                                                            >
                                                                <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                                <span>{credential}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}

                                        {/* Read More/Less Button */}
                                        <Button
                                            variant="ghost"
                                            onClick={() => toggleMember(index)}
                                            className="mt-auto self-start text-sm border"
                                        >
                                            {isExpanded ? (
                                                <>
                                                    Read Less <ChevronUp className="ml-2 w-4 h-4" />
                                                </>
                                            ) : (
                                                <>
                                                    Read More <ChevronDown className="ml-2 w-4 h-4" />
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TeamMembers;
