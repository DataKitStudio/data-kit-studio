
import VideoPlayer from "@/app/components/helper-components/video-player";
import videoData from "@/public/Videos/services-page/services.json";
import AnimatedH1 from "@/app/components/helper-components/animated-h1";

export default function Categories() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start lg:px-40 px-10 py-10 gap-10 md:gap-20">
      <div className="flex flex-col justify-between gap-6 sm:gap-10 md:w-2/3 text-dark text-center md:text-left">
        <AnimatedH1
          text="Services We Provide"
          className="text-3xl sm:text-4xl font-extrabold text-primary"
        />
        <AnimatedH1
          text="Comprehensive digital solutions tailored to elevate your brand and drive measurable results"
          className="text-lg sm:text-xl text-gray-700"
        />
      </div>
      <div className="relative w-full h-auto w-auto relative md:w-1/2 lg:w-1/3 rounded-4xl overflow-hidden">
        <VideoPlayer videoUrl={videoData} />
      </div>
    </div>
  );
}
