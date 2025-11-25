"use client";

import { useRef, useState, useEffect } from "react";

type VideoPlayerProp = {
    videoUrl: string;
    className?: string;
};

export default function VideoPlayer({ videoUrl, className }: VideoPlayerProp) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const setupObserver = () => {
            const observer = new IntersectionObserver(
                (entries) => {
                    const entry = entries[0];
                    setIsVisible(entry.isIntersecting);
                },
                {
                    threshold: 0.2,
                    rootMargin: "200px",
                }
            );

            if (containerRef.current) observer.observe(containerRef.current);

            return () => observer.disconnect();
        };

        if ("requestIdleCallback" in window) {
            (window as any).requestIdleCallback(setupObserver);
        } else {
            setTimeout(setupObserver, 1);
        }
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isVisible) {
            if (video.paused) video.play().catch(() => { });
        } else {
            if (!video.paused) video.pause();
            video.currentTime = 0;
        }
    }, [isVisible]);

    return (
        <div ref={containerRef} className={className}>
            <video
                ref={videoRef}
                src={videoUrl}
                className={className}
                loop
                muted
                playsInline
                preload="none"
                controls={false}
                onContextMenu={(e) => e.preventDefault()}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
}
