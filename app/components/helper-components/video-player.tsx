"use client";
import Lottie from "lottie-react";

type VideoPlayerProp = {
    videoUrl: object,
    className?: string
}

export default function VideoPlayer({ videoUrl, className }: VideoPlayerProp) {
    return (
        <Lottie className={`${className + " "}w-full h-full`} animationData={videoUrl} loop autoplay />
    )
}