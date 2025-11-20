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
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            {
                threshold: 0.2,
                rootMargin: "200px",
            }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!videoRef.current) return;

        if (isVisible) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
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
