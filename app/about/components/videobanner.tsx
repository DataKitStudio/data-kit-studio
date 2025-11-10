
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
            
            
        </div>
    )
}