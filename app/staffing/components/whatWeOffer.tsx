import CardLight from "@/app/homepage/components/card-light";
import { staffingServices } from "@/app/data/data";


export default function WhatWeOffer() {
    return (
        <div className="flex flex-col pb-20 items-center w-full ">
            <div className="flex w-[90%] lg:w-[66%] flex-col gap-10 rounded-2xl shadow-md shadow-fuchsia-300 p-10 border border-primary/40 bg-light">
                <div className="flex flex-col gap-10">
                    <h1 className="md:text-7xl py-2 text-center text-5xl bg-gradient-to-b from-fuchsia-900 to-[#f081f3] bg-clip-text text-transparent font-bold">
                        What we offer
                    </h1>
                    <hr className="border border-fuchsia-100" />
                </div>

                <div className="flex flex-col items-center justify-center xl:flex-row gap-5">
                    <CardLight data={staffingServices} />
                </div>
            </div>
        </div>
    )
}