import { useState } from "react";
import { ArrowLeft, Award, Users } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import DirectorCard from "@/components/layout/directors-card";
import Link from "next/link";
import Image from "next/image";
import Animate from "@/components/layout/animate";
import ReactMarkdown from "react-markdown"

type DirectorType = "executive" | "non-executive";

const directors = [
    {
        name: "Seun Ajibola Olorunsola",
        title: "Non-Executive Director, Prospera Finance",
        type: "non-executive" as DirectorType,
        image: "/seun-ajibola",
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
        image: "/ijeoma",
        bio: "Dr. Ijeoma Ude is a leading Media, Brand Communications, and Business Development expert with extensive experience helping brands grow, define their identity, and drive commercial results. She has held key leadership roles at BusinessDay Media Limited, rising from a young executive to Chief Marketing & Sales Officer, and has been recognized with awards including Distinguished Staff Merit Award (2008) and Manager of the Year (2021).",
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

const BoardOfDirectors = () => {
    const [filterType, setFilterType] = useState<DirectorType>("non-executive");

    const filteredDirectors = directors.filter(
        (director) => director.type === filterType
    );

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative bg-gradient-hero py-10 sm:py-14 lg:py-20">
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                </div>

                <div className="container max-w-6xl relative">
                    {/* Back Navigation */}
                    <nav className="mb-6 sm:mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Home</span>
                        </Link>
                    </nav>

                    {/* Page Title */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                            Board of{" "}
                            <span className="text-gradient-primary">Directors</span>
                        </h1>
                        <p className="mt-4 sm:mt-6 text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                            Meet the experienced leaders guiding Prospera Finance towards sustainable growth,
                            operational excellence, and meaningful impact in the fintech industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Directors Section */}
            <section className="py-16 md:py-20 bg-muted/30">
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
                                // <div
                                //     key={director.name}
                                //     className="animate-slide-up"
                                //     style={{ animationDelay: `${index * 150}ms` }}
                                // >
                                //     <DirectorCard {...director} />
                                // </div>

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
            </section>
        </main>
    );
};

export default BoardOfDirectors;
