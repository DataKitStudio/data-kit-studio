"use client";

import { resultData } from "@/app/data/data";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ResultCard() {
    return (
        <div className="flex flex-col xl:px-20 py-5 px-5 xl:flex-row gap-4 w-full xl:justify-center items-center">
            {resultData.map((result, index) => {
                const { ref, inView } = useInView({
                    triggerOnce: true,       // animate only once
                    threshold: 0.2           // 20% visible before triggering
                });

                return (
                    <div
                        key={index}
                        ref={ref}
                        className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            } text-center p-5 rounded-xl bg-white/20 border-2 border-primary/30 md:flex-row flex-col w-full`}
                    >

                        <h1 className="text-2xl text-red-500 font-extrabold">
                            {inView ? (
                                <CountUp
                                    end={result.result}
                                    decimals={1}
                                    duration={1}
                                />
                            ) : (
                                0  // number before animation starts
                            )}
                            {result.value}
                        </h1>

                        <h2 className="text-sm text-secondary">
                            {result.topic}
                        </h2>
                    </div>
                );
            })}
        </div>
    );
}
