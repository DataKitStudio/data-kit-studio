import CardLight from "./components/card-light";
import NormalButton from "../components/helper-components/normal-button";
import AnimatedAsset from "../components/helper-components/animated-asset";
import { services } from "@/app/data/data";

export default function ServicesBanner() {
    return (
        <section className="flex flex-col rounded-4xl -mt-10 bg-light justify-between items-center gap-20 w-full py-10">
            <div className="flex flex-col relative items-center border border-fuchsia-100 shadow-lg shadow-fuchsia-100/30 lg:w-[75%] w-[95%] py-10 px-10 rounded-2xl">

                <div className="flex flex-col gap-10 pb-10 items-center w-full relative z-10">

                    {/* FIXED: match AnimatedAsset props */}
                    <AnimatedAsset
                        svgSrc="/Images/Services.svg"
                        animation="float"
                        imgClassName="w-[140px] h-[60px]"
                    />

                    <h1 className="md:text-7xl text-5xl bg-gradient-to-b from-fuchsia-900 to-[#f081f3] bg-clip-text text-transparent font-bold">
                        What we provide?
                    </h1>

                    <hr className="border w-full border-dark/10" />
                </div>

                {/* GPU blur background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-fuchsia-400 blur-3xl rounded-full opacity-40 animate-[spin_30s_linear_infinite]" />

                <CardLight data={services} />

                <div className="w-full flex flex-col gap-10 items-center mt-10">
                    <a className="text-dark p-2 rounded-md border" href="/services">
                        View all services
                    </a>
                    <NormalButton
                        text="Want to discuss"
                        text2=" Let's Schedule a Call"
                        icon="PhoneCall"
                        className="w-auto"
                    />
                </div>
            </div>
        </section>
    );
}
