"use client"
import { useRouter } from "next/navigation";
import PopButton from "../components/helper-components/pop-button";


export default function CallToActionSection() {

    const router = useRouter()

    return (
        <div className="w-full flex flex-col items-center bg-primary">


            <div className="flex flex-col w-[95%] bg-primary gap-8 items-center">
                <h1 className="text-4xl text-dark font-extrabold text-center">
                    Ready to <i className="text-secondary">GROW</i> with us?
                </h1>

                <h2 className="text-lg text-dark text-center">
                    Let's discuss how we can help your brand achieve remarkable growth through strategic digital marketing.
                </h2>
                <div className="flex sm:flex-row flex-col gap-15 w-full items-center justify-center">
                    <PopButton text="Start Your Project" className="text-md" icon="Rocket" onClick={() => { router.push("/getstarted") }} />
                    <PopButton text="Contact Us" icon="MessageCircle" onClick={() => { router.push("/contact") }} />
                </div>
            </div>
        </div>
    )
}