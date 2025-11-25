"use client"
import PopButton from "@/app/components/helper-components/pop-button";
import { useRouter } from "next/navigation";

export default function CallToActionSection() {

    const router = useRouter()

    return (
        <div className="flex flex-col pb-20 items-center w-full ">
            <div className="flex w-[90%] lg:w-[66%] flex-col gap-10 rounded-2xl shadow-md shadow-fuchsia-300 p-10 border border-primary/40 bg-light">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <h1 className="text-4xl text-dark font-extrabold text-center">Ready to build your <span className="text-secondary">team</span>?</h1>
                    <PopButton onClick={() => { router.push("/contact") }} text="Speak to our hiring expert" />
                </div>
            </div>
        </div>
    )
}

