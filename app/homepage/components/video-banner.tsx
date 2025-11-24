"use client"

import dynamic from "next/dynamic";

const VideoTextBanner = dynamic(() => import("../vide-text-banner"), {
    ssr: false,
    loading: () => (
        <div className="h-60 bg-gray-200 animate-pulse rounded-xl" />
    )
});

export default function LazyVideoBanner() {
    return <VideoTextBanner />;
}
