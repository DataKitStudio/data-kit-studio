"use client";
import Image from "next/image";
import { motion as m, scale } from "motion/react";
import VideoPlayer from "../components/helper-components/video-player";
import videoData from "@/public/Videos/homepage/video-banner.json";
import PopButton from "../components/helper-components/pop-button";
import { useRouter } from "next/navigation";

const introText = "A dedicated team of specialists, delivering remarkable work to our clients worldwide!"
const introTitle = "Turn Your Bold Ideas Into Profit"
const introTag = "Our Performance Marketing Services are Certified by"

export default function VideoTextBanner() {
    const route = useRouter()

    return (
        <div className="bg-[url('/Images/background/banner-bg.png')] bg-cover bg-center flex flex-col xl:flex-row w-full justify-between gap-10 xl:gap-20 items-center md:px-50 px-10 py-10 lg:pb-40 lg:pt-20">
            <div className=" overflow-hidden rounded-4xl">
                <div className="flex-1 h-100 w-100 relative min-w-50">
                    <VideoPlayer videoUrl={videoData} />
                </div>
            </div>
            <div className="flex flex-2 flex-col justify-around items-center gap-10 w-full h-auto">
                <h1 className="text-4xl text-center md:text-6xl font-bold bg-gradient-to-b from-fuchsia-900 to-[#f081f3] bg-clip-text text-transparent">{introTitle}</h1>
                <h1 className="text-lg text-center italic text-dark text-justify">{introText}</h1>
                <PopButton onClick={() => route.push("/getstarted")} text="Get Started" className="" icon="Rocket" />
                <h1 className="text-md italic text-dark text-justify">{introTag}</h1>
            </div>

        </div>
    )
}

