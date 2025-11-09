"use client"
import Image from "next/image"
import { map } from "motion/react-client"
import {services, platforms} from "../data/data"
import {motion as m} from "motion/react"
import { Variants } from "motion/react"
// import {useRef} from "react"


export default function ServicesBanner() {

    const cardVariants: Variants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 300,
        opacity:1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}
    // const scrollRef = useRef(null);

    return (
        <div className="flex flex-col bg-primary justify-between items-center gap-20 items-center width-full bg-fuchsia-900 xl:mt-30 mt-10 sm:px-40 md:px-50 px-20 py-15">
            <h1 className="md:text-5xl text-4xl font-bold text-light">What we provide?</h1>
        
            <div  className="flex flex-col xl:flex-row items-center justify-center gap-10 width-full">
                {
                    services.map((service) =>(
                        <m.div key={service.key} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ amount: 0.3 }}    
                        whileHover={{scale:1.1}} className="flex p-5 flex-col justify-around items-center bg-white w-[300] min-h-100 rounded-2xl shadow-lg flex-shrink-0 ">
                            <Image src={service.imageUrl} width={70} height={100} alt={service.title} />
                            <h1 className="text-xl text-dark font-extrabold">{service.title}</h1>
                            <h1 className="text-lg text-dark font-bold text-justify">{service.description}</h1>
                        </m.div>
                    ))
                }
            </div>
            </div>
    )
}