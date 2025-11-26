"use client";

import Image from "next/image";
import { Target, Lightbulb, Rocket } from "lucide-react";

export default function HowItWorksSection() {
    const steps = [
        {
            number: "1",
            title: "Plan Your Growth",
            desc: "Dream big, strategize with us, and turn plans into profits.",
            icon: Target
        },
        {
            number: "2",
            title: "Handover the project",
            desc: "We're your project navigators, turning plans into reality. Smooth sailing guaranteed.",
            icon: Lightbulb
        },

        {
            number: "3",
            title: "Count the profit",
            desc: "Sit back, relax, and let the profits set sail. Your success story starts with us!",
            icon: Rocket
        }
    ];

    return (
        <div className="flex flex-col w-full items-center justify-center pb-30">
            <div className="flex flex-col border border-fuchsia-100 shadow-xl shadow-fuchsia-100 rounded-2xl py-10 lg:px-20 px-5 items-center gap-10 w-[95%] xl:w-[75%]">

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

                    <div className="flex sm:flex-row flex-col">
                        <div className="flex-1 min-w-[220px]">
                            {
                                steps.map((service, key) => (
                                    <div key={key} className="w-full" >
                                        <div className="flex items-center gap-5">
                                            <h1 className="w-10 h-10 flex items-center justify-center bg-fuchsia-100 
                                            text-fuchsia-700 font-bold rounded-full shadow-sm z-10 hover:bg-fuchsia-700 hover:text-white">{service.number}</h1>
                                            <div className="flex-1 bg-gradient-to-r from-fuchsia-100  px-5 py-2 rounded-xl">
                                                <h2 className="text-primary text-lg font-bold ">{service.title}</h2>
                                                <h2 className="text-primary text-[15px] ">{service.desc}</h2>
                                            </div>

                                        </div>
                                        {
                                            key !== steps.length - 1 ? (
                                                <div className="border-l ml-5 -my-12 h-30 border-fuchsia-100"></div>
                                            ) : null
                                        }

                                    </div>
                                ))
                            }
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}