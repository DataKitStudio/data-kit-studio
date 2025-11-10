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
        <div className="flex flex-col justify-center gap-8 xl:px-40 md:px-20 px-6 py-20 bg-gradient-to-b from-fuchsia-50 to-white rounded-2xl shadow-md">
  <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
    At <span className="font-bold text-fuchsia-800">DataKit Studio</span>, we turn 
    <span className="text-fuchsia-700 font-semibold"> ideas into measurable growth</span>.  
    From <span className="font-medium text-fuchsia-700">social media</span> and 
    <span className="font-medium text-fuchsia-700"> SEO</span> to 
    <span className="font-medium text-fuchsia-700"> design</span> and 
    <span className="font-medium text-fuchsia-700"> web development</span> — our expert team 
    builds strategies that make your brand 
    <span className="font-semibold text-fuchsia-800"> impossible to ignore</span>.
    <br /><br />
    Whether you need <span className="font-semibold text-fuchsia-700">reach</span>, 
    <span className="font-semibold text-fuchsia-700"> results</span>, or a 
    <span className="font-semibold text-fuchsia-700"> complete digital transformation</span> — 
    we’re here to make it <span className="font-bold text-fuchsia-800">happen</span>.
  </p>

  <h1 className="text-lg md:text-xl text-dark font-bold text-center md:text-left">
    {description2 + " "}
    <PopInverseButton text="Get Started Today" onClick={handleClick} />
  </h1>
</div>
    )
}