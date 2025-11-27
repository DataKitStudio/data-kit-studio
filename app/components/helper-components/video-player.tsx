"use client";

import { useRef, useState, useEffect } from "react";

type VideoPlayerProps = {
    videoUrl: string;
    className?: string;
};

export default function VideoPlayer({ videoUrl, className }: VideoPlayerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const initObserver = () => {
            const observer = new IntersectionObserver(
                (entries) => {
                    setIsVisible(entries[0].isIntersecting);
                },
                {
                    threshold: 0.25,
                    rootMargin: "200px",
                }
            );

            if (containerRef.current) observer.observe(containerRef.current);
            return () => observer.disconnect();
        };

        if ("requestIdleCallback" in window) {
            (window as any).requestIdleCallback(initObserver);
        } else {
            setTimeout(initObserver, 50);
        }
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isVisible) {
            video.play().catch(() => { });
        } else {
            video.pause();
            video.currentTime = 0;
        }
    }, [isVisible]);

    return (
        <div ref={containerRef} className={className}>
            <video
                ref={videoRef}
                src={videoUrl}
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
