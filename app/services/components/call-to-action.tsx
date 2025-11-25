"use client"
import PopButton from "@/app/components/helper-components/pop-button"
import { useRouter } from "next/navigation"


const description2 = "👉 Let’s build something extraordinary —"


export default function CallToAction() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact")
  }
  return (
    <div className="flex flex-col items-center w-full bg-gradient-to-b from-fuchsia-50 to-white">
      <div className="flex flex-col justify-center gap-8 w-[95%] xl:w-[75%] py-10">
        <p className="text-md md:text-md text-gray-700 leading-relaxed text-justify">
          At <span className="font-bold text-fuchsia-800">DataKit Studio</span>, we turn ideas into measurable growth.
          From social media and
          SEO to
          design and
          web development — our expert team
          builds strategies that make your brand
          <span className="font-semibold text-fuchsia-800"> impossible to ignore</span>.
          <br />
          Whether you need reach,
          results, or a
          complete digital transformation —
          we’re here to make it <span className="font-bold text-fuchsia-800">happen</span>.
        </p>

        <h1 className="flex flex-col items-center gap-5 sm:flex-row text-dark text-md">
          {description2 + " "}
          <PopButton text="Get Started Today" icon="Rocket" onClick={handleClick} />
        </h1>
      </div>
    </div>
  )
}