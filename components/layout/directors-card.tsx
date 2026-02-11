import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface DirectorProps {
    name: string;
    title: string;
    image: string;
    bio: string;
    education: string;
    impacts: {
        title: string;
        description: string;
    }[];
}

const DirectorCard = ({ name, title, image, bio, education, impacts }: DirectorProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article
            className={cn(
                "bg-card rounded-2xl overflow-hidden shadow-card transition-all duration-500 ease-out",
                "hover:shadow-card-hover border border-border/50",
                isExpanded && "shadow-elevated"
            )}
        >
            {/* Card Header - Always Visible */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
                {/* Director Image */}
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-xl overflow-hidden ring-4 ring-primary/10">
                        <img
                            src={image}
                            alt={`${name} - ${title}`}
                            className="w-full h-full object-cover object-center object-top"
                        />
                    </div>
                </div>

                {/* Basic Info */}
                <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground leading-tight">
                        {name}
                    </h3>
                    <p className="text-primary font-medium text-sm sm:text-base mt-1 lg:mt-2">
                        {title}
                    </p>

                    {/* Brief Bio Preview */}
                    <p className={cn(
                        "text-muted-foreground text-sm sm:text-base mt-3 lg:mt-4 leading-relaxed",
                        !isExpanded && "line-clamp-3"
                    )}>
                        {bio}
                    </p>
                </div>
            </div>

            {/* Expandable Content */}
            <div
                className={cn(
                    "overflow-hidden transition-all duration-500 ease-out",
                    isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8 space-y-6">
                    {/* Divider */}
                    <div className="h-px bg-border" />

                    {/* Education Section */}
                    <div>
                        <h4 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="w-1 h-5 bg-secondary rounded-full" />
                            Education & Certifications
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed pl-3">
                            {education}
                        </p>
                    </div>

                    {/* Impact Section */}
                    <div>
                        <h4 className="font-display text-base sm:text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                            <span className="w-1 h-5 bg-primary rounded-full" />
                            Impact on Prospera
                        </h4>
                        <ul className="space-y-3 pl-3">
                            {impacts.map((impact, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary/60" />
                                    <div>
                                        <span className="font-semibold text-foreground text-xs sm:text-sm">
                                            {impact.title}:
                                        </span>
                                        <span className="text-muted-foreground text-xs sm:text-sm ml-1">
                                            {impact.description}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Expand/Collapse Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                    "w-full py-3 sm:py-4 flex items-center justify-center gap-2 cursor-pointer",
                    "text-primary font-medium text-sm sm:text-base",
                    "bg-muted/100 hover:bg-muted transition-colors duration-300",
                    "border-t border-border/50"
                )}
                aria-expanded={isExpanded}
                aria-label={isExpanded ? `Collapse ${name}'s details` : `Expand ${name}'s details`}
            >
                {isExpanded ? (
                    <>
                        <span>View Less</span>
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                ) : (
                    <>
                        <span>View Full Profile</span>
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                )}
            </button>
        </article>
    );
};

export default DirectorCard;
