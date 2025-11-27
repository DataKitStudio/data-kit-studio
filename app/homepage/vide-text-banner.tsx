"use client";

import Image from "next/image";
import VideoPlayer from "../components/helper-components/video-player";
import PopButton from "../components/helper-components/pop-button";
import { useRouter } from "next/navigation";

const introText =
    "A dedicated team of specialists, delivering remarkable work to our clients worldwide!";
const introTitle = "Turn Your Bold Ideas Into Profit";
const introTag = "Our Performance Marketing Services are Certified by";

export default function VideoTextBanner() {
    const route = useRouter();

    return (
        <section
            className="flex flex-col h-auto bg-cover bg-center bg-no-repeat lg:h-dvh pb-20"
            style={{ backgroundImage: "url('/Images/background/banner-bg.png')" }}
        >
            <div className="flex flex-col items-center py-10 w-full">
                <div className="flex flex-col items-center justify-center gap-10 lg:flex-row xl:w-[75%] w-[95%]">
                    {/* VIDEO (lazy-loaded, not LCP) */}
                    <div className="relative w-full flex-1 max-w-[400px] rounded-4xl overflow-hidden">
                        <VideoPlayer videoUrl="/Videos/homepage/homepage-banner.webm" />
                    </div>

                    {/* TEXT COLUMN */}
                    <div className="flex-1 flex flex-col justify-around items-center gap-10 w-full">
                        <h1 className="text-4xl text-center md:text-6xl font-bold bg-gradient-to-b from-fuchsia-900 via-[#f081f3] to-[#a3a9ce] bg-clip-text text-transparent">
                            {introTitle}
                        </h1>

                        <h1 className="text-lg text-center italic text-dark">{introText}</h1>

                        <PopButton
                            onClick={() => route.push("/getstarted")}
                            text="Book a Call"
                            className="font-bold"
                            icon="Phone"
                        />

                        <h1 className="text-md font-bold text-dark text-center">{introTag}</h1>

                        {/* PARTNER ICONS */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                            {[
                                {
                                    src: "/Images/partners/meta-logo-facebook-svgrepo-com.svg",
                                    label: "Meta partner",
                                },
                                {
                                    src: "/Images/partners/google-svgrepo-com.svg",
                                    label: "Google partner",
                                },
                                {
                                    src: "/Images/partners/shopify-color-svgrepo-com.svg",
                                    label: "Shopify partner",
                                },
                            ].map((partner, i) => (
                                <div className="flex gap-2 items-center" key={i}>
                                    <Image
                                        src={partner.src}
                                        alt={partner.label}
                                        width={32}
                                        height={32}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <h1 className="text-md text-dark">{partner.label}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
