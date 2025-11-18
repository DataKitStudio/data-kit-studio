import { ChevronRight } from "lucide-react"
import Image from "next/image"
import InfluencerCard from "./helper-components/influencer-card"
import VideoPlayer from "@/app/components/helper-components/video-player"
import videoData from "@/public/Videos/services-page/influencer.json"
import NormalButton from "@/app/components/helper-components/normal-button"

const influencerServices = [
    {
        title: "Brand Strategy & Personal Branding",
        services: [
            "Profile optimization (bio, highlights, link-in-bio setup)",
            "Content strategy planning",
            "Brand voice & visual identity",
            "Hashtag and keyword strategy"
        ]
    },
    {
        title: "Content Creation & Editing",
        services: [
            "Video editing (Reels, Shorts, YouTube)",
            "Thumbnail & caption design",
            "Photo retouching / color grading",
            "Scriptwriting & storytelling"
        ]
    },
    {
        title: "Social Media Management",
        services: [
            "Post scheduling",
            "Community management (comments, DMs)",
            "Hashtag research",
            "Engagement analytics & reporting"
        ]
    },
    {
        title: "Brand Collaboration & Sponsorship Management",
        services: [
            "Pitching to brands",
            "Creating media kits / influencer decks",
            "Negotiating deals & pricing",
            "Contract templates"
        ]
    },



]

export default function InfluencerSection() {
    return (
        <div className="flex flex-col pb-20 items-center w-full ">

            <div className="flex w-[90%] lg:w-[75%] flex-col gap-10 rounded-2xl shadow-lg shadow-fuchsia-300 p-10 border border-primary/40 bg-light">

                <div className="flex flex-col justify-center items-center lg:flex-row gap-10">

                    {/* TEXT — default second, LG first */}
                    <div className="flex flex-2 flex-col gap-10 order-2 lg:order-1">
                        <div className="flex flex-col items-start gap-5">
                            <h1 className="text-4xl text-primary font-extrabold">Are you an influencer looking for help?</h1>
                            <h2 className="text-xl text-primary font-bold">This is what we have for you.</h2>
                        </div>

                        <h3 className="text-dark text-sm text-justify">
                            Whether you’re just starting out or already growing fast, we’ve got everything you need to build your brand, boost engagement, and grow your income...
                        </h3>

                        <div className="flex flex-col w-full items-center sm:items-start">
                            <NormalButton className="w-fit" text="Interested?" text2="Let's book a call!" icon="PhoneCall" />
                        </div>
                    </div>

                    {/* VIDEO — default first, LG second */}
                    <div className="flex flex-1 md:justify-center rounded-2xl overflow-hidden relative w-full md:w-1/2 lg:w-1/3 md:h-[300px] order-1 lg:order-2">
                        <VideoPlayer videoUrl={videoData} />
                    </div>

                </div>



                {/* <h1 className="w-full text-center text-dark text-2xl font-extrabold">Services by us</h1>
                <div className="grid xl:grid-cols-4 grid-cols-1 gap-5">
                    {
                        influencerServices.map((service) => (
                            <InfluencerCard service={service} />
                        ))
                    }
                </div> */}
            </div>
        </div>
    )
}