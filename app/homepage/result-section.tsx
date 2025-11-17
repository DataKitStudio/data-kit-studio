import VideoPlayer from "../components/helper-components/video-player";
import ResultCard from "./components/result-card";
import VideoUrl from "@/public/Videos/homepage/background-service.json"


export default function ResultSection() {
    return (
        <div className="w-full bg-light flex flex-col py-10 items-center">
            <div className="flex flex-col items-center min-h-[300px] lg:flex-row gap-8 lg:w-[75%] w-[95%] rounded-3xl  py-10  overflow-hidden border border-fuchsia-300/50 shadow-lg shadow-fuchsia-300 ">

                <div className="z-10 flex flex-col gap-8 items-center px-10">
                    <h1 className="text-4xl text-secondary font-extrabold">Numbers are telling our story</h1>
                    <h2 className="text-sm text-dark">
                        Numbers that showcase our commitment to excellence
                    </h2>
                </div>

                <div className="relative w-full h-full z-10">
                    <VideoPlayer
                        videoUrl={VideoUrl}
                        className="absolute top-0 left-0 blur-sm object-fill z-0"
                    />
                    <ResultCard />
                </div>
            </div>
        </div>


    )
}