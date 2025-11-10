"use client"
import { motion as m } from "motion/react";
import { SendHorizonal, CheckCircle, Target, Lightbulb, Rocket } from "lucide-react";

export default function HowItWorksSection() {
    return(
        <div className="flex flex-col gap-10 items-center px-20 py-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                How It Works
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                {[
                    { icon: Target, title: "1. Tell Us Your Goals", desc: "Share your vision, needs, and what success looks like for you." },
                    { icon: Lightbulb, title: "2. We Strategize", desc: "Our team crafts a custom strategy aligned with your objectives." },
                    { icon: Rocket, title: "3. Launch & Grow", desc: "We bring your project to life and monitor performance for growth." },
                ].map((step, i) => (
                <m.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-fuchsia-100 flex flex-col items-center text-center"
            >
              <step.icon className="w-12 h-12 text-fuchsia-600 mb-4" />
              <h3 className="font-bold text-lg text-primary mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{step.desc}</p>
            </m.div>
            ))}
        </div>
        </div>
    )
}