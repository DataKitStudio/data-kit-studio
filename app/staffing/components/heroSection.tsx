"use client"
import PopButton from "@/app/components/helper-components/pop-button";
import VideoPlayer from "@/app/components/helper-components/video-player";
import { useRouter } from "next/navigation";


export default function StaffingHeroSection() {

    const router = useRouter()

    return (
        <section className="flex flex-col items-center h-auto py-10 pb-20">
            <div className="flex flex-col-reverse xl:flex-row gap-5 items-center justify-center lg:w-[75%] w-[95%]">
                <div className="flex flex-col gap-10 xl:items-start items-center justify-center">
                    <h1 className="md:text-7xl py-2 xl:text-start text-center text-5xl bg-gradient-to-b from-fuchsia-900 to-[#f081f3] bg-clip-text text-transparent font-bold">Build Your Team
                        With the Right Talent </h1>
                    <h2 className="text-lg xl:text-start text-center bg-gradient-to-b from-fuchsia-900 to-[#f081f3] bg-clip-text text-transparent font-bold">End to end Staffing services Designed to simplify hiring</h2>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <PopButton onClick={() => { router.push("/getstarted") }} text="Get Started" />
                        <PopButton onClick={() => { router.push("/contact") }} text="Contact Us" />
                    </div>

                </div>
                <div className="relative w-full relative max-w-[400px] rounded-4xl overflow-hidden">
                    <VideoPlayer videoUrl="/Videos/homepage/homepage-banner.webm" />
                </div>
            </div>


        </section>
    )
}