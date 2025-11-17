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
        <div className="bg-[url('/Images/background/banner-bg.png')] bg-cover bg-center flex flex-col xl:flex-row w-full lg:h-dvh justify-between gap-10 xl:gap-20 items-center lg:px-50 px-10 py-10 lg:pb-40 lg:pt-20">
            <div className=" overflow-hidden rounded-4xl">
                <div className="flex-1 h-auto w-auto relative min-w-50 max-w-100">
                    <VideoPlayer videoUrl={videoData} />
                </div>
            </div>
            <div className="flex flex-2 flex-col justify-around items-center gap-10 w-full h-auto">
                <h1 className="text-4xl text-center md:text-6xl font-bold bg-gradient-to-b from-fuchsia-900 via-[#f081f3] to-[#a3a9ce] bg-clip-text text-transparent">{introTitle}</h1>
                <h1 className="text-lg text-center italic text-dark text-justify">{introText}</h1>
                <PopButton onClick={() => route.push("/getstarted")} text="Book a Call" className="font-bold" icon="Phone" />
                <h1 className="text-md font-bold text-dark text-justify">{introTag}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                    <div className="flex gap-2 items-center">
                        <div className="relative w-8 h-8">
                            <Image src={"Images/partners/meta-logo-facebook-svgrepo-com.svg"} fill alt="google" />
                        </div>
                        <h1 className="text-md text-md text-dark">Meta partner</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="relative w-8 h-8">
                            <Image src={"Images/partners/google-svgrepo-com.svg"} fill alt="google" />
                        </div>
                        <h1 className="text-md text-dark">Google partner</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="relative w-8 h-8">
                            <Image src={"Images/partners/shopify-color-svgrepo-com.svg"} fill alt="google" />
                        </div>
                        <h1 className="text-md text-dark">Shopify partner</h1>
                    </div>

                </div>

            </div>

        </div>
    )
}

