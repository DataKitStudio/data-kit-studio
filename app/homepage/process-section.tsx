"use client";

import Image from "next/image";
import { motion as m } from "framer-motion";
import { Target, Lightbulb, Rocket } from "lucide-react";

export default function HowItWorksSection() {
    const number = [
        "1", "", "2", "", "3"
    ]
    const steps = [
        {
            number: "1",
            title: "Plan Your Growth",
            desc: "Dream big, strategize with us, and turn plans into profits.",
            icon: Target
        },
        {
            number: "2",
            title: "Dummy",
            desc: "Dummy",
            icon: Target
        },
        {
            number: "3",
            title: "Handover the project",
            desc: "We're your project navigators, turning plans into reality. Smooth sailing guaranteed.",
            icon: Lightbulb
        },
        {
            number: "4",
            title: "Dummy",
            desc: "Dummy",
            icon: Target
        },
        {
            number: "5",
            title: "Count the profit",
            desc: "Sit back, relax, and let the profits set sail. Your success story starts with us!",
            icon: Rocket
        }
    ];

    return (
        <div className="flex flex-col w-full items-center justify-center pb-30">
            <div className="flex flex-col border border-fuchsia-100/50 shadow-xl shadow-fuchsia-100 rounded-2xl py-10 lg:px-20 px-5 items-center gap-10 w-[95%] xl:w-[75%]">

                <h2 className="text-6xl sm:text-7xl font-bold bg-gradient-to-b from-fuchsia-900 via-[#f081f3] to-[#a3a9ce] bg-clip-text text-transparent text-center">
                    How it starts?
                </h2>

                <hr className="border border-fuchsia-100 w-full" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full">
                    <div className="flex justify-center items-start order-1 md:order-2">
                        <Image
                            src="/Images/getstarted/daily-payment1.jpg"
                            width={300}
                            height={300}
                            alt="Chart Image"
                            className=""
                        />
                    </div>

                    <div className="flex flex-row flex-shrink-0 md:w-[400px] w-full gap-10 order-2 md:order-1">
                        <div>
                            {number.map((index, i) => (
                                index !== "" ? (
                                    <div
                                        key={i}
                                        className="w-10 h-10 flex items-center justify-center bg-fuchsia-100 
                                            text-fuchsia-700 font-bold rounded-full shadow-sm z-10 hover:bg-fuchsia-700 hover:text-white"
                                    >
                                        {index}
                                    </div>
                                ) : (
                                    <div key={i} className="text-gray-400">
                                        <div className="top-10 ml-4.5 w-[2px] lg:h-[90px] md:h-[90px] sm:h-[60px] h-[80px] bg-fuchsia-200"></div>
                                    </div>
                                )
                            ))}

                        </div>
                        <div>
                            {steps.map((index, i) => (
                                index.title !== "Dummy" ? (
                                    <div
                                        key={i}
                                    >
                                        <h3 className="font-bold text-dark text-xl mb-1">{index.title}</h3>
                                        <p className="text-gray-600">{index.desc}</p>
                                    </div>
                                ) : (
                                    <div key={i} className="text-gray-400">
                                        <div className="h-[30px] lg:h-[25px]"></div>
                                    </div>
                                )
                            ))}
                        </div>
                        <div>

                        </div>


                    </div>


                </div>

            </div>
        </div>
    );
}