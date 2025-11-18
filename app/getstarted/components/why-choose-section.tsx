
import { motion as m } from "motion/react";
import { SendHorizonal, CheckCircle, Target, Lightbulb, Rocket } from "lucide-react";

export default function WhyChooseSection() {
    return (
        <div className="flex flex-col w-full py-20 items-center">
            <div className="flex flex-col items-center gap-10 w-[95%] xl:w-[75%] py-20 px-10 shadow-md shadow-fuchsia-300 rounded-2xl">
                <h2 className="text-6xl p-2 sm:text-7xl font-bold bg-gradient-to-b from-fuchsia-900 via-[#f081f3] to-[#a3a9ce] bg-clip-text text-transparent">
                    Why Choose DataKit Studio?
                </h2>
                <hr className="border border-fuchsia-100 w-full" />
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-6xl gap-6 items-center sm:gap-10">
                    {[
                        "Data-driven strategies that deliver measurable ROI.",
                        "Creative campaigns tailored to your unique brand voice.",
                        "Transparent process and real-time collaboration.",
                    ].map((text, i) => (
                        <div
                            key={i}
                            className="bg-white flex flex-col"
                        >
                            <CheckCircle className="w-10 h-10 text-secondary mb-3" />
                            <p className="text-gray-700 text-sm sm:text-base">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}