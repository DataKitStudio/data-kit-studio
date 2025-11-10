
import VideoPlayer from "@/app/components/helper-components/video-player"
import { provenData } from "@/app/data/data"
import Image from "next/image"
import researchVideoData from "@/public/Videos/proven-section/discovery.json"

export default function ProvenCard() {
    return(
        <div className="grid grid-cols1 gap-4 lg:px-10">
            {
                provenData.map((data) => (
                    <div className="flex flex-row gap-0 h-60 items-start p-5">
                        {data.key % 2 === 0 ? (
                        <>
                        <div className="flex flex-col justify-center h-full flex-1">
                        <h1 className="text-lg font-bold text-dark">{data.title}</h1>
                        <h2 className="text-md text-dark">{data.description}</h2>
                        </div>
                        <div className="flex-1 h-20 w-40 relative">
        
                            {/* <Image src={data.image} fill alt={data.title} className="object-cover rounded-lg" /> */}
                        </div>
    
                        </>
                    ) : (
                        <>
    
                        <div className="flex-1 w-full h-full relative">
                            <VideoPlayer videoUrl={researchVideoData} />
                            {/* <Image src={data.image} fill alt={data.title} className="object-cover rounded-lg" /> */}
                        </div>
                        <div className="flex flex-col justify-center items-center border-l-1 h-full flex-1">
                            <h1 className="text-lg text-center font-bold text-dark">{data.title}</h1>
                            <h2 className="text-md text-center text-dark">{data.description}</h2>
                        </div>
                        </>
)}
                        
                    </div>
                ))
            }
        </div>
    )
}