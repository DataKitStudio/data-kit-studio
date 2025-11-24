import VideoPlayer from "@/app/components/helper-components/video-player"
import NormalButton from "@/app/components/helper-components/normal-button"
import * as Icon from "lucide-react"


type ServiceSectionProp = {
    heading: string,
    subHeading?: string,
    description: string,
    buttonTextMain: string,
    buttonTextSecondary: string,
    videoUrl: string,
    icon: keyof typeof Icon;
    extraComponent?: React.ReactNode;
    servicesComponent?: React.ReactNode;
    reverse?: boolean;
}

export default function ServiceSection({ heading, subHeading, description, buttonTextMain, reverse, buttonTextSecondary, icon, videoUrl, extraComponent, servicesComponent }: ServiceSectionProp) {
    return (
        <div className="flex flex-col pb-20 items-center w-full ">
            <div className="flex w-[90%] lg:w-[66%] flex-col gap-5 rounded-2xl shadow-md shadow-fuchsia-300 p-10 border border-primary/40 bg-light">
                <div className={`flex flex-col justify-center items-center sm:flex-row gap-10 
                    ${reverse ? "sm:flex-row-reverse" : ""}`}>
                    <div className="flex flex-2 flex-col gap-10 order-2 sm:order-1">
                        <div className="flex flex-col items-start gap-5">
                            {extraComponent && (
                                <div className="w-full">
                                    {extraComponent}
                                </div>
                            )}
                            <h1 className="text-xl bg-gradient-to-b from-fuchsia-900 via-[#f081f3] to-[#a3a9ce] bg-clip-text text-transparent font-extrabold">{heading}</h1>
                            {subHeading && (
                                <h2 className="text-md bg-gradient-to-b from-fuchsia-900 via-[#f081f3] to-[#a3a9ce] bg-clip-text text-transparent font-bold">{subHeading}</h2>
                            )}
                        </div>

                        <h3 className="text-dark text-sm text-justify">
                            {description}
                        </h3>
                        {servicesComponent && (
                            <div className="w-full">
                                {servicesComponent}
                            </div>
                        )}

                    </div>

                    <div className="flex flex-1 md:justify-center rounded-4xl overflow-hidden relative w-full md:w-1/2 lg:w-1/3 order-1 sm:order-2">
                        <VideoPlayer videoUrl={videoUrl} />
                    </div>

                </div>
                <div className={`flex flex-col w-full items-center sm:items-start`}>
                    <NormalButton className="w-fit" text={buttonTextMain} text2={buttonTextSecondary} icon={icon} />
                </div>


            </div>
        </div>
    )
}