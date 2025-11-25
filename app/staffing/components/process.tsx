

import { staffingProcess } from "@/app/data/data"
import Image from "next/image"


export default function ProcessSection() {
    return (
        <div className="flex flex-col pb-20 items-center w-full ">
            <div className="flex w-[90%] lg:w-[66%] flex-col gap-10 rounded-2xl shadow-md shadow-fuchsia-300 p-10 border border-primary/40 bg-light">
                <h1 className="md:text-7xl py-2 text-center text-5xl bg-gradient-to-b from-fuchsia-900 to-[#f081f3] bg-clip-text text-transparent font-bold">Our Process</h1>
                <hr className="border border-fuchsia-100" />
                <div className="flex flex-col-reverse gap-10 sm:gap-0 sm:flex-row flex-col">
                    <div className="flex-1 min-w-[220px]">
                        {
                            staffingProcess.map((service, key) => (
                                <div key={key} className="w-full" >
                                    <div className="flex items-center gap-5">
                                        <h1 className="w-10 h-10 flex items-center justify-center bg-fuchsia-100 
                                            text-fuchsia-700 font-bold rounded-full shadow-sm z-10 hover:bg-fuchsia-700 hover:text-white">{service.key}</h1>
                                        <h2 className=" text-primary bg-gradient-to-r from-fuchsia-100  px-5 py-2 rounded-xl">{service.title}</h2>
                                    </div>
                                    {
                                        key !== staffingProcess.length - 1 ? (
                                            <div className="border-l ml-5 h-8 border-fuchsia-100"></div>
                                        ) : null
                                    }

                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full flex-1 flex flex-col items-center">
                        <div className="relative border border-fuchsia-200 rounded-2xl overflow-hidden">
                            <Image src={"/Images/staffing/uibanner.png"} objectFit="contain" alt="hiring image" height={400} width={300} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}