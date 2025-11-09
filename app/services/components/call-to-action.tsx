"use client"
import PopInverseButton from "@/app/components/helper-components/pop-inverse-button"
import {motion as a} from "motion/react"
import { useRouter } from "next/navigation"

const desctitle1 = "✨ Your Vision, Our Expertise"
const description1 = " — Let’s Grow Together At House of Influenca, we don’t just offer services — we craft digital experiences that inspire action and drive results. From powerful social media strategies and influencer collaborations to AI-driven automation and creative branding, we help your brand stand out, scale up, and connect meaningfully with your audience. "
const desctitle2 = "Ready to elevate your digital presence? "
const description2= "👉 Let’s build something extraordinary —"


export default function CallToAction(){
    const router = useRouter();
    const handleClick = () =>{
        router.push("/contact")
    }
    return(
        <div className="flex flex-col justify-around gap-5 xl:px-40 px-5 py-20">
            <h1 className="text-justif text-dark text-xl font-bold">{desctitle1}</h1>
            <h1 className="text-md text-dark text-justify font-bold sm:pl-20 pl-0">{description1}</h1>
            <h1 className="text-justif text-dark text-xl font-bold">{desctitle2}</h1>
            <h1 className="text-md text-dark font-bold sm:pl-20 pl-0">{description2 +" "} 
                <PopInverseButton text="Get Started Today" onClick={handleClick}/>
            </h1>
        </div>
    )
}