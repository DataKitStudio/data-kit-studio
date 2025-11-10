
import { motion as m } from "motion/react";
import { SendHorizonal, CheckCircle, Target, Lightbulb, Rocket } from "lucide-react";

export default function WhyChooseSection() {
    return(
        <div className="flex flex-col items-center gap-10 px-20 py-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
           Why Choose DataKit Studio?
         </h2>
         <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-6xl gap-6 items-center sm:gap-10">
                {[
                    "Data-driven strategies that deliver measurable ROI.",
                    "Creative campaigns tailored to your unique brand voice.",
                    "Transparent process and real-time collaboration.",
                ].map((text, i) => (
                <div
                key={i}
                className="bg-white rounded-xl p-6 border border-fuchsia-100 shadow-md flex flex-col items-center"
                >
              <CheckCircle className="w-10 h-10 text-secondary mb-3" />
              <p className="text-gray-700 text-sm sm:text-base">{text}</p>
                </div>
                ))}
            </div>
        </div>
    )
}