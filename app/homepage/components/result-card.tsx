

import { resultData } from "@/app/data/data"
import CountUp from "react-countup"

export default function ResultCard() {
    return (
        <div className="flex flex-col xl:px-20 py-5 px-5 lg:flex-row gap-4  w-full xl:justify-center items-center ">
            {
                resultData.map((result, index: number) => (
                    <div className="text-center p-5 rounded-xl backdrop-blur-md bg-white/20 border-2 border-primary/30  md:flex-row flex-col w-full">
                        <h1 className="text-2xl text-red-500 font-extrabold"><CountUp end={result.result} decimals={1} duration={1} />{result.value}</h1>
                        <h2 className="text-sm text-secondary">{result.topic}</h2>
                    </div>
                ))
            }
        </div>
    )
}