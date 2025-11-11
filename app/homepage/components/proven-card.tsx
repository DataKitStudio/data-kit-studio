

import { provenData } from "@/app/data/data"
import TextSection from "./helpers/text-section"
import VideoSection from "./helpers/video-section"


export default function ProvenCard() {
    return(
        <div className="grid grid-cols-1 gap-4 pb-10 lg:px-10 lg:">
            {
                provenData.map((data) => (
                    <div className="flex flex-row gap-0 h-60 items-start sm:p-5 p-3 overflow-hidden rounded-2xl shadow-xl shadow-fuchsia-100 border border-fuchsia-200 hover:shadow-2xl hover:shadow-fuchsia-300">
                        {data.key % 2 === 0 ? (
                        <>
                        <TextSection description={data.description} title={data.title} isEven={true} delay={data.key * 0.2}/>
                        <VideoSection image={data.image} isEven={true} delay={data.key * 0.2 + 0.15} />
                        </>
                    ) : (
                        <>
                        <VideoSection image={data.image} isEven={false} delay={data.key * 0.2} />
                        <TextSection description={data.description} title={data.title} isEven={false} delay={data.key * 0.2 + 0.15}/>
                        </>
)}
                        
                    </div>
                ))
            }
        </div>
    )
}