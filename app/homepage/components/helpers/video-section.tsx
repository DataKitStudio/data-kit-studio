"use client"
import VideoPlayer from "@/app/components/helper-components/video-player"
import {motion as m} from "motion/react"

type VideoSectionProp = {
    key: number,
    image: {}
}

export default function VideoSection({image, key}: VideoSectionProp) {
    return(
        <m.div  initial={{ opacity: 0, x: key % 2 === 0 ? 60 : -60, }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ amount: 0.3 }}    
                        whileHover={{scale:1.1}} className="flex-1 w-full h-full relative">
            <VideoPlayer videoUrl={image} />
        </m.div>
    )
}