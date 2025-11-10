import Image from "next/image";


export default function AgencySection() {
    return(
<div className="flex flex-col items-center w-[90%] md:w-[85%] lg:w-[80%] mx-auto rounded-xl shadow-xl p-6 md:p-10 border-1 border-fuchsia-100 bg-white">
  {/* Section Heading */}
  <h1 className="text-xl md:text-2xl font-bold text-primary text-center mb-6">
    About Our Agency
  </h1>

  {/* Content Layout */}
  <div className="flex flex-col md:flex-row items-center gap-10">
    {/* Text Section (2/3 width on md+) */}
    <div className="w-full md:w-2/3 order-2 md:order-1">
      <p className="text-justify text-gray-700 leading-relaxed text-sm md:text-base">
        <b className="text-primary text-4xl font-bold">I</b>n today’s fast-moving online world, standing out isn’t easy — but that’s where we come in.  
        At <i className="text-primary font-bold not-italic">DataKit Studio</i>, we combine the power of data and creativity to build campaigns that people notice and remember. 
        We study your audience, understand what works, and design strategies that deliver real results — not just views and clicks.
        <br /><br />
        Whether it’s planning content, managing campaigns, or improving engagement, our team focuses on creating marketing that truly matters. 
        Every project we take on is guided by research, creativity, and measurable growth.
        <br /><br />
        <span className="font-semibold text-primary">
          Our mission is clear:
        </span>{" "}
        to help your brand grow smarter, faster, and stronger through the perfect mix of data and creativity.
      </p>
    </div>

    {/* Image Section (1/3 width on md+) */}
    <div className="relative w-full md:w-1/3 h-auto flex justify-center order-1 md:order-2">
      <div className="w-full h-full flex justify-center items-center">
        <Image
          src="/Images/about-us/aboutagency.png"
          alt="About agency image"
          width={500}
          height={500}
          className="object-contain rounded-lg w-full h-auto"
        />
      </div>
    </div>
  </div>
</div>
    )
}