"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";

const MapContent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const address = searchParams.get("address") || "";
    const encodedAddress = encodeURIComponent(address);

    // Google Maps Embed API iframe URL with marker
    const mapSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed&z=15`;

    return (
        <div className="min-h-screen container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex items-center justify-between py-4">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="gap-2 cursor-pointer"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Button>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Location View</span>
                </div>
            </div>

            {/* Address Display */}
            <div className="pb-6">
                <div className="bg-card border rounded-lg p-4 mb-4">
                    <h2 className="text-sm font-medium text-muted-foreground mb-1">
                        Address
                    </h2>
                    <p className="text-lg font-semibold text-foreground">{address}</p>
                </div>
            </div>

            {/* Map Container */}
            <div className="pb-8">
                <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg border">
                    <iframe
                        src={mapSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen

                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                    />
                </div>
            </div>
        </div>
    );
};

// Wrap component with Suspense
const Map = () => {
    return (
        <Suspense fallback={<div className="p-6 text-center">Loading map...</div>}>
            <MapContent />
        </Suspense>
    );
};

export default Map;
