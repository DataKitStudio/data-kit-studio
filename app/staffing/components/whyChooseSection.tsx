import { CircleChevronRight } from "lucide-react";

export default function WhyChooseSection() {
    return (
        <div className="flex flex-col pb-20 items-center w-full ">
            <div className="flex w-[90%] lg:w-[66%] flex-col gap-10 rounded-2xl shadow-md shadow-fuchsia-300 p-10 border border-primary/40 bg-light">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <h1 className="md:text-7xl py-2 text-center text-5xl bg-gradient-to-b from-fuchsia-900 to-[#f081f3] bg-clip-text text-transparent font-bold">Why Choose DataKit Studio</h1>
                        <hr className="border border-fuchsia-100" />
                    </div>
                    <ul className="grid md:grid-cols-2 gap-5">
                        <li className="flex text-lg gap-5">
                            <CircleChevronRight className="text-fuchsia-300 flex-shrink-0" size={20} />
                            Expert support without building an internal recruitment team
                        </li>
                        <li className="flex text-lg gap-5">
                            <CircleChevronRight className="text-fuchsia-300 flex-shrink-0" size={20} />
                            Faster and more efficient hiring cycles
                        </li>
                        <li className="flex text-lg gap-5">
                            <CircleChevronRight className="text-fuchsia-300 flex-shrink-0" size={20} />
                            Structured and transparent process
                        </li>
                        <li className="flex text-lg gap-5">
                            <CircleChevronRight className="text-fuchsia-300 flex-shrink-0" size={20} />
                            Cost-effective staffing solutions
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}