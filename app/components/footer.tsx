"use client"
import { useRouter } from "next/navigation";
import { links, brand, contact, socialMedia } from "../data/data";
import Image from "next/image";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import * as Icons from "lucide-react"


export default function Footer() {

    const router = useRouter()

    return (
        <>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 bg-fuchsia-900 py-10 md:pl-30  md:text-start text-center">
                <div className="flex flex-col items-center md:items-start gap-7">
                    {
                        brand.map((data) => (
                            <>
                                <h1 className="text-light text-2xl font-bold">{data.title}</h1>
                                <div className="flex flex-col items-center md:items-start">
                                    <div className="relative flex justify-center items-center relative w-20 h-20">
                                        <Image src={data.logo} fill alt={data.title} />
                                    </div>
                                    <h2 className="text-light font-extrabold">{data.name}</h2>
                                </div>
                                <div className="flex gap-2">
                                    {
                                        socialMedia.map(({ key, image, link }) => {
                                            const Icon = (Icons as any)[image];
                                            if (!Icon) return null
                                            return (
                                                <a className="text-light" href={link}>
                                                    <Icon />
                                                </a>
                                            )
                                        })
                                    }
                                </div>

                            </>
                        ))
                    }
                </div>
                <div className="flex flex-col items-center md:items-start gap-7">
                    {
                        links.map((data) => (
                            <>
                                <h1 className="text-light text-2xl font-bold">{data.title}</h1>
                                {
                                    <div>


                                        {data.links.map((link) => {
                                            return (
                                                <button className="text-white text-md w-full md:text-start" onClick={() => router.push(link.route)}>{link.name}</button>
                                            )

                                        })}
                                    </div>
                                }
                            </>
                        ))
                    }
                </div>

                <div className="flex flex-col items-center md:items-start gap-7">
                    {
                        contact.map((data) => (
                            <>
                                <h1 className="text-light text-2xl font-bold">{data.title}</h1>
                                <div className="flex flex-col gap-2 md:items-start items-center">
                                    <h1 className="flex gap-2 text-white text-md"><PhoneCall />: {data.phone}</h1>
                                    <h1 className="flex gap-2 text-white text-md"><Mail />: {data.email}</h1>
                                    <h1 className="flex gap-2 text-white text-md"><MapPin />: {data.address}</h1>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col items-center bg-primary w-full pb-2">
                <h1 className="text-light">
                    <span className="font-extrabold">©</span> 2025 DataKit Studio. All rights reserved.
                </h1>
            </div>
        </>
    )
}