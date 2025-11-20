"use client";

import Lottie from "lottie-react";
import { useRef, useState, useEffect } from "react";

type VideoPlayerProp = {
    videoUrl: object,
    className?: string
}

export default function VideoPlayer({ videoUrl, className }: VideoPlayerProp) {

    const containerRef = useRef<HTMLDivElement>(null);
    const lottieRef = useRef<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            {
                threshold: 0.2,
                rootMargin: "200px"
            }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!lottieRef.current) return;
        if (isVisible) lottieRef.current.play();
        else lottieRef.current.pause();
    }, [isVisible]);

    return (
        <div ref={containerRef} className={className}>
            <Lottie
                className={className}
                lottieRef={lottieRef}
                animationData={videoUrl}
                autoplay={false}
                loop
                style={{ width: "100%", height: "100%" }}
                preload="none"
            />
        </div>
    );
}
