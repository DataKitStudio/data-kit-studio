"use client";
import Lottie from "lottie-react";

type VideoPlayerProp = {
    videoUrl: object
}

export default function VideoPlayer({videoUrl}: VideoPlayerProp){
    return(
        <Lottie className="w-full h-full" animationData={videoUrl} loop autoplay />
    )
}