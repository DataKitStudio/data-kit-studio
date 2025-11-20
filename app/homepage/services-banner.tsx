
import VideoBanner from "../about/components/videobanner"
import VideoPlayer from "../components/helper-components/video-player"
import CardLight from "./components/card-light"
import VideoData from "@/public/Videos/homepage/service-arrow.json"
// import BackgroundVideo from "@/public/Videos/homepage/background-animation.json"
import NormalButton from "../components/helper-components/normal-button"
import AnimatedAsset from "../components/helper-components/animated-asset"


export default function ServicesBanner() {

    return (
        <div className="flex flex-col bg-white/10 justify-between items-center gap-20 items-center width-full py-10">
            <div className="flex flex-col relative items-center shadow-xl shadow-fuchsia-100 lg:w-[75%] w-[95%] h-auto py-10 px-10  rounded-2xl ">
                <div className="flex flex-col gap-10 pb-10 items-center w-full">
                    <div className="w-full bg-white/10 flex flex-col  items-center">
                        <AnimatedAsset svgSrc="/Images/Services.svg" animation="float" className="w-35 h-13" />
                        <h1 className="md:text-7xl z-1 text-5xl bg-gradient-to-b from-fuchsia-900 to-[#f081f3] bg-clip-text text-transparent font-bold text-dark">What we provide?</h1>
                    </div>
                    <hr className="border z-1 w-full border-dark/10" />
                </div>
                <AnimatedAsset svgSrc="/Images/blur-background.png" animation="rotate" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-70 h-70" />
                <CardLight />
                <NormalButton text="Want to discuss" text2=" Let's Schedule a Call" icon="PhoneCall" className="w-auto" />
            </div>

        </div>
    )
}