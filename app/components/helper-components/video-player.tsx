"use client";

import Lottie from "lottie-react";
import { useRef, useState, useEffect } from "react";

type VideoPlayerProp = {
    videoUrl: object,
    className?: string
}

export default function VideoPlayer({ videoUrl, className }: VideoPlayerProp) {

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            {
                threshold: 0.1,
                rootMargin: "100px"
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={className}>
            {isVisible && (
                <Lottie
                    animationData={videoUrl}
                    loop
                    autoplay
                    style={{ width: "100%", height: "100%" }}
                />
            )}
        </div>
    );
}