import Image from "next/image";
import Animate from "./animate";

const partners = [
    { name: "Providus Bank", src: "/providus_logo.jpeg", alt: "Providus Bank logo" },
    { name: "Wema Bank", src: "/wema.jpg", alt: "Wema Bank logo" },
    { name: "CRC Credit Bureau Limited", src: "/crc.jpg", alt: "CRC Credit Bureau logo" },
    { name: "BankOne", src: "/bankone.png", alt: "BankOne logo" },
    { name: "Diikript", src: "/dikirpt.png", alt: "Diikript logo" },
    { name: "Global Accelerex", src: "/accelerex.png", alt: "Global Accelerex logo" },
]

const PartnersSection = () => {
    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Animate className="text-center mb-8 sm:mb-12">
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3 sm:mb-4">
                        Our Partners
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                        Trusted by forward-thinking partners and businesses
                    </p>
                </Animate>

                <Animate>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                        {partners.map((partner) => (
                            <div key={partner.name} className="rounded-3xl border border-border/50 bg-card p-6 flex h-24 sm:h-32 items-center justify-center text-center shadow-sm transition-all duration-300 hover:shadow-md">
                                {partner.src ? (
                                    <Image
                                        src={partner.src}
                                        alt={partner.alt}
                                        height={120}
                                        width={260}
                                        className="max-h-16 sm:max-h-24 w-auto object-contain"
                                    />
                                ) : (
                                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                        {partner.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </Animate>

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
