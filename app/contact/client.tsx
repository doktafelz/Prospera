"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"
import { useState } from "react"
import { Toaster, toast } from 'sonner';
import Animate from "@/components/layout/animate"



export default function ContactPageClient() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_FORM_ACCESS_KEY,
                    ...formData
                }),
            });

            const result = await response.json();
            if (result.success) {
                toast.success("Message sent successfully!");
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };




    return (
        <div className="flex min-h-screen flex-col">
            <Toaster />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <Animate>
                                <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
                                    Contact Us
                                </h1>
                            </Animate>

                            <Animate delay="200">
                                <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                                    At Prospera Finance Limited, we are committed to making your financial journey seamless. Whether you're
                                    seeking loans, investment opportunities, or simply need more information, our team is here to help.
                                </p>
                            </Animate>
                        </div>
                    </div>
                </section>

                {/* Contact Information & Form */}
                <section className="py-12 md:py-16 lg:py-20">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Reach Us Directly</h2>
                                    <div className="space-y-4">
                                        <Card>
                                            <CardContent className="p-4 flex items-start gap-4">
                                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                    <Phone className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold mb-1">Phone</p>
                                                    <a
                                                        href="tel:08039695299"
                                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                                    >
                                                        0803 969 5299
                                                    </a>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardContent className="p-4 flex items-start gap-4">
                                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                    <Mail className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold mb-1">Email</p>
                                                    <a
                                                        href="mailto:enquiries@prosperagroup.co"
                                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                                    >
                                                        enquiries@prosperagroup.co
                                                    </a>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardContent className="p-4 flex items-start gap-4">
                                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                    <MapPin className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold mb-1">Address</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        House 1, 52 Junction by 5th Avenue, Festac Town, Lagos
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Connect With Us Online</h2>
                                    <div className="flex gap-4">
                                        <a
                                            href="https://instagram.com/prosperafinanceltd"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                            aria-label="Instagram"
                                        >
                                            <Instagram className="h-5 w-5" />
                                        </a>
                                        <a
                                            href="https://www.facebook.com/profile.php?id=61581047943087"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                            aria-label="Facebook"
                                        >
                                            <Facebook className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                                    <p className="text-sm text-muted-foreground mb-6">
                                        Have a question or want to discuss your options? Fill out the form below and our team will get back
                                        to you within 24 hours.
                                    </p>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <Label htmlFor="fullName" className="text-sm font-semibold">
                                                Full Name <span className="text-destructive">*</span>
                                            </Label>
                                            <Input
                                                id="fullName"
                                                required
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                className="mt-1.5"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="email" className="text-sm font-semibold">
                                                Email Address <span className="text-destructive">*</span>
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="mt-1.5"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="phone" className="text-sm font-semibold">
                                                Phone Number <span className="text-destructive">*</span>
                                            </Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="mt-1.5"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="subject" className="text-sm font-semibold">
                                                Subject
                                            </Label>
                                            <Select
                                                value={formData.subject}
                                                onValueChange={(value) => setFormData({ ...formData, subject: value })} required
                                            >
                                                <SelectTrigger className="mt-1.5">
                                                    <SelectValue placeholder="Select a subject" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Loans">Loans</SelectItem>
                                                    <SelectItem value="Investments">Investments</SelectItem>
                                                    <SelectItem value="POS Request">POS Request</SelectItem>
                                                    <SelectItem value="Partnership">Partnership</SelectItem>
                                                    <SelectItem value="General">General Enquiry</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <Label htmlFor="message" className="text-sm font-semibold">
                                                Message
                                            </Label>
                                            <Textarea
                                                id="message"
                                                rows={5}
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="mt-1.5"
                                            />
                                        </div>

                                        <Button type="submit" size="lg" className="w-full cursor-pointer" disabled={isSubmitting}>
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
