import { ChevronRight } from "lucide-react"
import Image from "next/image"
import InfluencerCard from "./helper-components/influencer-card"
import VideoPlayer from "@/app/components/helper-components/video-player"
import videoData from "@/public/Videos/services-page/influencer.json"

const influencerServices = [
    {
        title: "Brand Strategy & Personal Branding",
        services:[
            "Profile optimization (bio, highlights, link-in-bio setup)",
            "Content strategy planning",
            "Brand voice & visual identity",
            "Hashtag and keyword strategy"
        ]
    },
    {
        title: "Content Creation & Editing",
        services:[
            "Video editing (Reels, Shorts, YouTube)",
            "Thumbnail & caption design",
            "Photo retouching / color grading",
            "Scriptwriting & storytelling"
        ]
    },
    {
        title: "Social Media Management",
        services:[
            "Post scheduling",
            "Community management (comments, DMs)",
            "Hashtag research",
            "Engagement analytics & reporting"
        ]
    },
    {
        title: "Brand Collaboration & Sponsorship Management",
        services:[
            "Pitching to brands",
            "Creating media kits / influencer decks",
            "Negotiating deals & pricing",
            "Contract templates"
        ]
    },

    

]

export default function InfluencerSection() {
    return(
        <div className="flex flex-col pb-20 items-center w-full ">
            
            <div className="flex w-[90%] flex-col gap-10 rounded-2xl shadow-lg shadow-fuchsia-300 p-10 border border-primary/40 bg-light">
            
            <div className="flex flex-col justify-center items-center lg:flex-row gap-10">
                <div className="flex flex-2 flex-col gap-10">
                    <div className="flex flex-col items-start gap-5">
                <h1 className="text-4xl text-primary font-extrabold">Are you an influencer looking for help?</h1>
                <h2 className="text-xl text-secondary font-bold">This is what we have for you.</h2>
            </div>
                    <h3 className=" text-dark text-lg text-justify">
                        Whether you’re just starting out or already growing fast, we’ve got everything you need to build your brand, boost engagement, and grow your income. From content strategy and brand partnerships to audience analytics and creative design — our team helps you stand out, stay consistent, and focus on what you do best: creating amazing content.

                        Let us handle the rest — so you can spend more time connecting with your audience and turning your influence into real results.
                    </h3>
                </div>
                
                <div className="flex flex-1 md:justify-center rounded-2xl  relative w-1/3 md:w-1/3 md:h-[300px] justify-center relative">
                    <VideoPlayer videoUrl={videoData} />
                </div>
            </div>
            <h1 className="w-full text-center text-darl text-2xl font-extrabold">Services by us</h1>
                <div className="grid xl:grid-cols-4 grid-cols-1 gap-5">
                    {
                        influencerServices.map((service) =>(
                            <InfluencerCard service={service} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}