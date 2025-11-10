"use client"
import { MessageCircle, Rocket } from "lucide-react";
import {motion as m, scale} from "motion/react"
import { useRouter } from "next/navigation";


export default function CallToActionSection() {

    const router = useRouter()

    return(
        <div className="flex flex-col w-full p-20 gap-8 items-center">
            <h1 className="text-4xl text-dark font-extrabold text-center">
                Ready to <i className="text-secondary">GROW</i> your with us?
            </h1>
            <h2 className="text-lg text-dark text-center">
                Let's discuss how we can help your brand achieve remarkable growth through strategic digital marketing.
            </h2>
            <div className="flex sm:flex-row flex-col gap-15 w-full items-center justify-center">
                <m.button
                onClick={()=>{router.push("/getstarted")}}
                whileHover={{scale:1.1}}
                transition={{duration:0.5}}
                className="flex gap-2 bg-primary justify-center max-w-60 p-4 items-center rounded-xl font-bold text-light shadow-xl
                hover:bg-light hover:border-2 hover:border-primary hover:text-dark">Start Your Project <Rocket/></m.button>
                <m.button
                onClick={()=>{router.push("/contact")}}
                whileHover={{scale:1.1}}
                transition={{duration:0.5}}
                className="flex gap-2 border-2 justify-center max-w-60 border-primary text-primary items-center font-bold p-4 rounded-xl shadow-xl
                hover:bg-primary hover:text-light">Contact Sales<MessageCircle/></m.button>
            </div>
        </div>
    )
}