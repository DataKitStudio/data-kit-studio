"use client"
import {services,platforms} from "../data/data"
import Image from "next/image"
import {motion as m} from "motion/react"

export default function PlatformBanner() {
    return(
        <div className="flex flex-col w-full justify-between gap-10 items-center p-10 px-20 bg-gradient-to-r from-fuchsia-900 via-purple-700 to-pink-600">
            <h1 className="text-4xl text-light font-extrabold">Platforms</h1>
            <div className="flex flex-row flex-wrap justify-center gap-4">
            {
                platforms.map((platform) =>(
                    <m.div key={platform.key} initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: platform.key, ease: "easeOut" }} viewport={{ amount: 0.3 }}    
                         className="flex gap-2 items-center justify-center">
                        <div className="relative w-15 h-15">
                        <Image src={platform.icon} fill alt={platform.name} />
                        </div>
                        {/* <h1 className="text-sm text-dark font-bold">{platform.name}</h1> */}
                    </m.div>
                ))
            }
            </div>
            
        </div>
    )
}