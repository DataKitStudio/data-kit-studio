import Image from "next/image";



export default function WhatWeDoSection() {
    return (
        <div className="flex flex-col pb-20 items-center w-full ">
            <div className="flex w-[90%] lg:w-[66%] flex-col gap-10 rounded-2xl shadow-md shadow-fuchsia-300 p-10 border border-primary/40 bg-light">
                <div>
                    <h1 className="md:text-7xl py-2 text-center text-5xl bg-gradient-to-b from-fuchsia-900 to-[#f081f3] bg-clip-text text-transparent font-bold">
                        What we do
                    </h1>
                    <hr className="border border-fuchsia-100" />
                </div>

                <div className="flex flex-col items-center justify-center xl:flex-row gap-5">
                    <h1 className="flex-1">We act as your trusted hiring partner, offering end-to-end staffing support so you can focus on growing your business while we handle the recruitment workload</h1>

                    <div className="flex-1 relative rounded-2xl overflow-hidden">
                        <Image src={"/Images/staffing/hiring.png"} objectFit="contain" alt="hiring image" height={1890} width={3780} />
                    </div>
                </div>
            </div>
        </div>
    )
}