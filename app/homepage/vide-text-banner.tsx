"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import PopButton from "../components/helper-components/pop-button";
import { useRouter } from "next/navigation";

// Lazy-load VideoPlayer AFTER hydration (improves FCP + LCP)
const VideoPlayer = dynamic(
    () => import("../components/helper-components/video-player"),
    {
        ssr: false,
        loading: () => (
            <div className="h-[250px] md:h-[300px] bg-gray-200 animate-pulse rounded-4xl w-full" />
        ),
    }
);

const introText =
    "A dedicated team of specialists, delivering remarkable work to our clients worldwide!";
const introTitle = "Turn Your Bold Ideas Into Profit";
const introTag = "Our Performance Marketing Services are Certified by";

export default function VideoTextBanner() {
    const route = useRouter();

    return (
        <section className="relative flex flex-col h-auto bg-cover bg-center bg-no-repeat lg:h-dvh pb-20 overflow-hidden">

            {/* ✅ HERO BACKGROUND IMAGE (with priority for LCP) */}
            <Image
                src="/Images/background/banner-bg.png"
                alt="Hero background"
                fill
                priority
                quality={85}
                className="object-cover -z-0"
            />

            <div className="flex flex-col items-center py-10 w-full">
                <div className="flex flex-col items-center justify-center gap-10 lg:flex-row xl:w-[75%] w-[95%]">

                    {/* 🎥 VIDEO — NOW LAZY LOADED (NOT PART OF LCP) */}
                    <div className="relative w-full flex-1 max-w-[400px] rounded-4xl overflow-hidden h-[250px] md:h-[400px]">
                        <VideoPlayer videoUrl="/Videos/homepage/homepage-banner.webm" />
                    </div>

                    {/* 📝 TEXT COLUMN */}
                    <div className="z-1 flex-1 flex flex-col justify-around items-center gap-10 w-full">

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
