import Image from "next/image";



export default function OurPromiseSection() {
    return(
        <div className="flex flex-col items-center w-[90%] md:w-[85%] lg:w-[80%] mx-auto rounded-xl shadow-xl p-6 md:p-10 bg-white mb-20">
  {/* Section Heading */}
  <h1 className="text-xl md:text-2xl font-bold text-primary text-center mb-6">
    Our Promise
  </h1>

  {/* Content Layout */}
  <div className="flex flex-col md:flex-row items-center gap-10">
    {/* Text Section (2/3 width on md+) */}
    <div className="w-full md:w-2/3 order-2 md:order-1">
      <p className="text-justify text-gray-700 leading-relaxed text-sm md:text-base">
        We believe in turning insights into action, ideas into impact, and brands into leaders.
        <br /><br />
        At <span className="text-primary font-bold">DataKit Studio</span>, we don’t just follow trends — 
        we  create them. 
        We’re here to make sure your brand doesn’t just 
        <span className="text-primary font-semibold"> grow online</span>, 
        but 
         grows with meaning.
        <br /><br />
        <span className="font-bold text-primary">
          DataKit Studio —
        </span>{" "}
        <span className="text-primary font-semibold">
          Where Data Meets Creativity.
        </span>
      </p>
    </div>

    {/* Image Section (1/3 width on md+) */}
    <div className="relative w-full md:w-1/3 flex justify-center order-1 md:order-2">
      <Image
        src="/Images/about-us/meeting.png"
        alt="About agency image"
        width={500}
        height={500}
        className="object-contain rounded-lg w-full h-auto"
      />
    </div>
  </div>
</div>
    )
}