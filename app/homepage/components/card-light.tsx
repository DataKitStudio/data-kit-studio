"use client"
import { motion as m } from "motion/react"
import Image from "next/image"
import { services } from "@/app/data/data"


export default function CardLight() {

    return (
        <div className="grid sm:grid-cols-2 grid-cols-1  xl:flex-row  items-center justify-center width-full">
            {
                services.map((service) => (
                    <div className="flex gap-5 md:p-5 py-5 flex-row md:items-start items-center w-full h-auto ">

                        <Image src={service.imageUrl} width={30} height={50} alt={service.title} />
                        <div>
                            <h1 className="text-md text-dark font-bold">{service.title}</h1>
                            <h1 className="text-sm text-dark">{service.description}</h1>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}