"use client";
import { motion as m } from "motion/react";
import { SendHorizonal, CheckCircle, Target, Lightbulb, Rocket } from "lucide-react";
import AnimatedButton from "@/app/components/helper-components/animated-button";

export default function GetStartedPage() {
    return (
        <div className="flex flex-col items-center py-20 w-full">
            <div className="flex flex-col justify-center gap-10 w-[95%] lg:w-[75%]">
                <m.h1 initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary">
                    Let’s Build Something Amazing Together 🚀
                </m.h1>
                <m.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl"
                >
                    Share your vision with us — and we’ll turn it into a strategy that drives results.
                    Whether you need design, marketing, or a complete brand overhaul, our team will make
                    your project a success from start to finish.
                </m.p>
            </div>
        </div>
    );
}
