import Image from "next/image";
import Animate from "./animate";
import ProvidusLogo from "./providus-logo";


const PartnersSection = () => {
    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <Animate className="text-center mb-8 sm:mb-12">
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3 sm:mb-4">
                        Our Partner
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                        Trusted by forward-thinking partners and businesses
                    </p>
                </Animate>

                {/* Partners Logo Grid */}
                <Animate className="flex items-center justify-center">
                    <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-card border border-border/50 hover:shadow-card-hover transition-shadow duration-300">
                        <Image src="/providus_logo.jpeg" alt="providus logo" height={100} width={100} className="h-8 sm:h-10 lg:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </Animate>

                {/* Trust Indicator */}
                <Animate className="mt-8 sm:mt-12 flex items-center justify-center gap-2 text-muted-foreground">
                    <div className="flex -space-x-1">
                        <span className="w-2 h-2 rounded-full bg-primary/60" />
                        <span className="w-2 h-2 rounded-full bg-secondary/60" />
                        <span className="w-2 h-2 rounded-full bg-primary/40" />
                    </div>
                    <span className="text-xs sm:text-sm">Building trust through strategic partnerships</span>
                </Animate>
            </div>
        </section>
    );
};

export default PartnersSection;
