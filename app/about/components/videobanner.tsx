
import VideoPlayer from "@/app/components/helper-components/video-player";
import videoData from "@/public/Videos/aboutus.json"
import AgencySection from "./agency-section";
import WhatWeDo from "./what-we-do-section";
import OurTeamSection from "./our-team-section";
import OurPromiseSection from "./our-promise-section";

export default function VideoBanner(){
    return(
        <div className="flex flex-col items-center gap-30 w-dvw">
            <h1 className="text-4xl text-primary font-extrabold ">About Us</h1>
            <AgencySection/>
            <WhatWeDo />
            <OurTeamSection />
            <OurPromiseSection/>
            {/* <div className="flex flex-col items-center lg:px-70 justify-between gap-9">
                <h1 className="text-4xl text-primary font-extrabold ">About Us</h1>
                <div className="relative w-full h-full min-w-[250]">
                    <VideoPlayer videoUrl={videoData} />
                </div>
            </div>
            <div className=" py-20">
                <p className="text-justify text-xl text-dark">
                    At <i className="text-primary font-bold">House of Influenca</i>, we don’t just follow trends — we create them.
                    We’re a full-service social media and digital marketing agency built to help brands <i className="text-primary font-bold">influence, inspire, and ignite growth </i> in the digital world.

                    <br/>From <i className="text-primary font-bold">influencer collaborations</i> and <i className="text-primary font-bold"> AI-powered automation </i>  to <i className="text-primary font-bold">creative branding </i> and content strategy, we blend innovation with storytelling to make your brand impossible to ignore.

                    Our team of creators, strategists, and tech enthusiasts work hand-in-hand to craft experiences that connect emotionally and convert effectively — because your brand deserves more than just visibility; it deserves a voice that stands out.
                </p>
            </div> */}
            
        </div>
    )
}