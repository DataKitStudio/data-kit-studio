

import { provenData } from "@/app/data/data"
import TextSection from "./helpers/text-section"
import VideoSection from "./helpers/video-section"


export default function ProvenCard() {
    return(
        <div className="grid grid-cols-1 gap-4 lg:px-10 lg:">
            {
                provenData.map((data) => (
                    <div className="flex flex-row gap-0 h-60 items-start p-5">
                        {data.key % 2 === 0 ? (
                        <>
                        <TextSection description={data.description} title={data.title} key={data.key}/>
                        <VideoSection image={data.image} key={data.key} />
                        </>
                    ) : (
                        <>
                        <VideoSection image={data.image} key={data.key} />
                        <TextSection description={data.description} title={data.title} key={data.key}/>
                        </>
)}
                        
                    </div>
                ))
            }
        </div>
    )
}