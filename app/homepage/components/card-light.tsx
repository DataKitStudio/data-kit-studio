"use client"
import {motion as m} from "motion/react"
import Image from "next/image"
import { services } from "@/app/data/data"


export default function CardLight() {

    return(
        <div  className="grid md:grid-cols-3 grid-cols-1 gap-4  xl:flex-row  items-center justify-center gap-10 width-full">
            {
                    services.map((service) =>(
                        <m.div key={service.key} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ amount: 0.3 }}    
                        whileHover={{scale:1.1}} className="flex gap-5 p-5 flex-col justify-around md:items-start items-center backdrop-blur-md bg-white/20 border-2 border-primary/30 shadow-lg xl:w-[300] w-full lg:h-80 h-auto  rounded-2xl ">
                            <Image src={service.imageUrl} width={70} height={100} alt={service.title}/>
                            <h1 className="text-xl text-primary font-extrabold">{service.title}</h1>
                            <h1 className="text-md text-dark">{service.description}</h1>
                        </m.div>
                    ))
                }
            </div>
    )
}