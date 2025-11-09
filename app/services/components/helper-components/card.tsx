"use client"
import { SubCategory } from "./cardSection";
import Image from "next/image";
import {motion as m} from "motion/react"


export default function Card( {details} : {details: SubCategory}) {
    return(
        <m.div 
        transition={{duration:1, ease: "easeOut"}}
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity: 1}}
        whileHover={{scale: 1.1}}
        className="flex flex-col w-100 justify-between gap-6 items-center
            bg-gradient-to-b from-fuchsia-900 via-fuchsia-800 to-fuchsia-900 p-10 text-white p-5 pt-0 rounded-xl overflow-hidden shadow-xl">
            <div className="w-100 h-70 relative shadow-xl">
                <Image src={details.image} fill alt={details.name} />
            </div>
                <h1 className="text-rose-100 text-2xl font-bold">{details.name}</h1>
                <h2 className="text-justify text-pink-200/90 text-md">{details.description}</h2>
            </m.div>
    )
}