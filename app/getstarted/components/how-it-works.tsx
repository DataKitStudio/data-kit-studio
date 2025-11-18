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
        <div className="flex flex-col w-full items-center justify-center py-10">
            <div className="flex flex-col shadow-md border border-fuchsia-100/50 shadow-fuchsia-300 rounded-2xl py-20 lg:px-20 px-5 items-center gap-10 w-[95%] xl:w-[75%]">

                <h2 className="text-6xl sm:text-7xl font-bold bg-gradient-to-b from-fuchsia-900 via-[#f081f3] to-[#a3a9ce] bg-clip-text text-transparent text-center">
                    How it starts?
                </h2>

                <hr className="border border-fuchsia-100 w-full" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full">

                    {/* RIGHT SIDE IMAGE — NOW FIRST ON MOBILE */}
                    <div className="flex justify-center items-start order-1 md:order-2">
                        <Image
                            src="/Images/getstarted/daily-payment1.jpg"
                            width={300}
                            height={300}
                            alt="Chart Image"
                            className=""
                        />
                    </div>

                    {/* LEFT SIDE TIMELINE — NOW SECOND ON MOBILE */}
                    {/* LEFT SIDE TIMELINE */}
                    <div className="flex flex-row flex-shrink-0 md:w-[400px] w-full gap-10 order-2 md:order-1">
                        <div>
                            {number.map((index, i) => (
                                index !== "" ? (
                                    <div
                                        key={i}
                                        className="w-10 h-10 flex items-center justify-center bg-fuchsia-100 
                                            text-fuchsia-700 font-bold rounded-full shadow-sm z-10"
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
                                        <h3 className="font-bold text-xl mb-1">{index.title}</h3>
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

// /<div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

// {/* RIGHT SIDE IMAGE — NOW FIRST ON MOBILE */ }
// <div className="flex justify-center items-start order-1 md:order-2">
//     <Image
//         src="/Images/getstarted/daily-payment1.jpg"
//         width={300}
//         height={300}
//         alt="Chart Image"
//         className="rounded-xl shadow-lg"
//     />
// </div>

// {/* LEFT SIDE TIMELINE — NOW SECOND ON MOBILE */ }
// {/* TIMELINE LEFT SIDE */ }
// <div className="flex flex-col gap-10 order-2 md:order-1">

//     {steps.map((step, i) => (
//         step.title !== "Dummy" ? (
//             <div key={i} className="grid grid-cols-[50px_1fr] gap-4 relative">

//                 {/* Number + line */}
//                 <div className="flex flex-col items-center">

//                     {/* number circle */}
//                     <div className="w-10 h-10 flex items-center justify-center bg-fuchsia-100
//                         text-fuchsia-700 font-bold rounded-full shadow-sm">
//                         {step.number}
//                     </div>

//                     {/* check if any real step exists after this one */}
//                     {steps.slice(i + 1).some(s => s.title !== "Dummy") && (
//                         <div className="w-[2px] bg-fuchsia-200 flex-1"></div>
//                     )}
//                 </div>

//                 {/* text */}
//                 <div>
//                     <h3 className="font-bold text-xl mb-1">{step.title}</h3>
//                     <p className="text-gray-600">{step.desc}</p>
//                 </div>

//             </div>
//         ) : (
//             <div key={i} className="h-10"></div>
//         )
//     ))}

// </div>



//                 </div >