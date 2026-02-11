"use client"
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import amieProfile from "@/assets/amie-profile.jpg";
import stanleyProfile from "@/assets/stanley-profile.jpg";
import mishealProfile from "@/assets/misheal-profile.jpg";
import blessingProfile from "@/assets/blessing-profile.jpg";
import davidProfile from "@/assets/david-profile.jpg";
import graceProfile from "@/assets/grace-profile.jpg";
import Image from "next/image";
import Animate from "./animate";

const testimonials = [
    {
        quote: "Prospera Finance Limited has been an invaluable partner in our growth journey.",
        author: "Amie Oluwaseyi Angela",
        role: "CEO, La Kusine",
        image: amieProfile,
    },
    {
        quote: "Their expertise in financial management has enabled us to make informed decisions.",
        author: "Umeobi Stanley Ikenna",
        role: "CEO, Cadast",
        image: stanleyProfile,
    },
    {
        quote: "They offered us a flexible, affordable financing solution tailored to our unique needs.",
        author: "Mr. Misheal Ike Chukwuma",
        role: "CEO, Nevaeh Travel & Tour",
        image: mishealProfile,
    },
    {
        quote: "Their personalized approach to financial advisory has transformed how we manage our cash flow.",
        author: "Blessing Chiamaka Okonkwo",
        role: "Founder, Bloom Logistics",
        image: blessingProfile,
    },
    {
        quote: "The team's deep understanding of Nigerian SME challenges made all the difference for us.",
        author: "David Chinedu Okafor",
        role: "Managing Director, TechVentures",
        image: davidProfile,
    },
    {
        quote: "Working with Prospera Finance gave us the confidence to expand into new markets.",
        author: "Grace Ifeyinwa Nwachukwu",
        role: "CEO, Heritage Fabrics",
        image: graceProfile,
    },
];

export const TestimonialsCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center md:mb-12">
                    <Animate>
                        <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl mb-3">
                            What Our Clients Say
                        </h2>
                    </Animate>

                    <Animate delay="200">

                        <p className="text-base text-muted-foreground md:text-lg">
                            Success stories from businesses we've helped grow
                        </p>
                    </Animate>
                </div>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                                >
                                    <Card className="h-full transition-all duration-300 hover:shadow-lg">
                                        <CardContent className="p-6 flex flex-col h-full">
                                            <div className="flex items-start gap-4 mb-4">
                                                <Image priority
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                    width={50}
                                                    height={50}
                                                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                                                    unoptimized
                                                />
                                                <div className="flex-1">
                                                    <p className="text-base font-bold">{testimonial.author}</p>
                                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                                </div>
                                            </div>
                                            <p className="text-base text-muted-foreground leading-relaxed italic flex-1">
                                                "{testimonial.quote}"
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hidden md:flex h-10 w-10 rounded-full"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hidden md:flex h-10 w-10 rounded-full"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>

                <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                                }`}
                            onClick={() => emblaApi?.scrollTo(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                <Animate>
                    <div className="mt-8 text-center">
                        <Button asChild variant="outline" size="lg" className="h-12 text-base">
                            <a href="/testimonials">Read More Stories</a>
                        </Button>
                    </div>
                </Animate>
            </div>
        </section>
    );
};
