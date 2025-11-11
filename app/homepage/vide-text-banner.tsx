"use client";
import Image from "next/image";
import {motion as m, scale} from "motion/react";
import VideoPlayer from "../components/helper-components/video-player";
import videoData from "@/public/Videos/homepage/homepage-video.json";
import PopButton from "../components/helper-components/pop-button";
import { useRouter } from "next/navigation";

const introText = "We combine social media strategy, AI automation, and expert consulting to help businesses grow faster, smarter, and more efficiently. From content creation to customer automation, we build systems that amplify your brand and scale your impact."
const introTitle = "Why us?"

export default function VideoTextBanner(){
    const route = useRouter()
    
    return(
        <div className="bg-light flex flex-col xl:flex-row w-full h-auto justify-between gap-10 xl:gap-20 items-center md:px-50 px-10">
            <div className="flex-1 relative h-100 w-1/2 min-w-50">
                <VideoPlayer videoUrl= {videoData} />
            </div>
            <div className="flex flex-1 flex-col justify-around items-center gap-10 w-full h-auto">
                <h1 className="text-5xl text-dark font-extrabold">{introTitle}</h1>
                <h1 className="text-lg text-dark text-justify">{introText}</h1>
                <PopButton onClick={() => route.push("/getstarted")} text="Get Started" className=""/>
            </div>
            
        </div>
    )
}

