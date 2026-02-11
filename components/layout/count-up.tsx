"use client"

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    decimals?: number;
}

export const CountUp = ({
    end,
    suffix = '',
    prefix = '',
    duration = 2000,
    decimals = 0
}: CountUpProps) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    setIsVisible(true);
                    hasAnimated.current = true;
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const startTime = Date.now();
        const endTime = startTime + duration;

        const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = easeOutQuart * end;

            setCount(currentCount);

            if (now < endTime) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(updateCount);
    }, [isVisible, end, duration]);

    const formattedCount = count.toFixed(decimals);

    return (
        <div ref={elementRef} className="text-4xl font-bold mb-2">
            {prefix}{formattedCount}{suffix}
        </div>
    );
};
