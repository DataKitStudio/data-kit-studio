

import { resultData } from "@/app/data/data"

export default function ResultCard() {
    return(
        <div className="flex flex-col xl:px-20 py-5 px-5 lg:flex-row gap-4  w-full xl:justify-center items-center ">
            {
                resultData.map((result) => (
                    <div className="text-center p-5 rounded-xl backdrop-blur-md bg-white/20 border-2 border-primary/30 shadow-lg md:flex-row flex-col w-full">
                        <h1 className="text-2xl text-red-500 font-extrabold">{result.result}</h1>
                        <h2 className="text-md text-secondary">{result.topic}</h2>
                    </div>
                ))
            }
        </div>
    )
}