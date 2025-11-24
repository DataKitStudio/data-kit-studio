import VideoPlayer from "@/app/components/helper-components/video-player"
import NormalButton from "@/app/components/helper-components/normal-button"


export default function InfluencerSection() {
    return (
        <div className="flex flex-col pb-20 items-center w-full ">

            <div className="flex w-[90%] lg:w-[75%] flex-col gap-10 rounded-2xl shadow-lg shadow-fuchsia-300 p-10 border border-primary/40 bg-light">

                <div className="flex flex-col justify-center items-center lg:flex-row gap-10">

                    <div className="flex flex-2 flex-col gap-10 order-2 lg:order-1">
                        <div className="flex flex-col items-start gap-5">
                            <h1 className="text-4xl text-primary font-extrabold">Are you an influencer looking for help?</h1>
                            <h2 className="text-xl text-primary font-bold">This is what we have for you.</h2>
                        </div>

                        <h3 className="text-dark text-sm text-justify">
                            Whether you’re just starting out or already growing fast, we’ve got everything you need to build your brand, boost engagement, and grow your income...
                        </h3>

                        <div className="flex flex-col w-full items-center sm:items-start">
                            <NormalButton className="w-fit" text="Interested?" text2="Let's book a call!" icon="PhoneCall" />
                        </div>
                    </div>

                    <div className="flex flex-1 md:justify-center rounded-4xl overflow-hidden relative w-full md:w-1/2 lg:w-1/3 order-1 lg:order-2">
                        <VideoPlayer videoUrl="/Videos/services-page/influencer.webm" />
                    </div>

                </div>

            </div>
        </div>
    )
}