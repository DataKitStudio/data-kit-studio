"use client"
import {motion as m} from "motion/react"
import Image from "next/image"
import { services } from "@/app/data/data"


export default function CardLight() {

    return(
        <div  className="flex flex-col xl:flex-row items-center justify-center gap-10 width-full">
            {
                    services.map((service) =>(
                        <m.div key={service.key} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ amount: 0.3 }}    
                        whileHover={{scale:1.1}} className="flex p-5 flex-col justify-around items-center bg-white w-[300] min-h-100 rounded-2xl shadow-lg flex-shrink-0 ">
                            <Image src={service.imageUrl} width={70} height={100} alt={service.title}/>
                            <h1 className="text-xl text-dark font-extrabold">{service.title}</h1>
                            <h1 className="text-lg text-dark font-bold text-justify">{service.description}</h1>
                        </m.div>
                    ))
                }
            </div>
    )
}