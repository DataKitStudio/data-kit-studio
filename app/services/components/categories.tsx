"use client";
import { ArrowRight } from "lucide-react";
import VideoPlayer from "@/app/components/helper-components/video-player";
import videoData from "@/public/Videos/surfing.json";
import { categories } from "@/app/data/categoriesData";
import AnimatedH1 from "@/app/components/helper-components/animated-h1";
import AnimatedButton from "@/app/components/helper-components/animated-button";

export default function Categories() {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-20 items-center px-6 sm:px-10 lg:px-20 xl:px-40 py-10">
      {/* Left section */}
      <div className="flex flex-1 flex-col justify-between gap-10 sm:gap-20 md:items-start text-white">
        <AnimatedH1 text="Services We Provide" className="text-3xl text-dark sm:text-4xl font-extrabold" />

        <div className="flex flex-col justify-around gap-4 w-full">
          {categories.map((category) => (
            <div key={category.key}>
              <AnimatedButton
                text={category.name}
                duration={category.key}
                className="flex w-full justify-between items-center text-sm sm:text-xs font-bold text-black border-2 p-4 rounded-xl shadow-md 
                hover:border-fuchsia-900 hover:text-fuchsia-900 bg-white"
                onClick={() =>
                  document
                    .getElementById(category.name)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                Icon={ArrowRight}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right section - video */}
      <div className="flex-1 relative w-full h-full min-h-[250px] mt-10 sm:mt-0">
        <VideoPlayer videoUrl={videoData} />
      </div>
    </div>
  );
}
