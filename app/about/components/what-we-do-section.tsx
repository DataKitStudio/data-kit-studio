import Image from "next/image";



export default function WhatWeDo(){
    return(
<div className="flex flex-col items-center w-[90%] md:w-[85%] lg:w-[80%] mx-auto rounded-xl shadow-xl p-6 md:p-10 border-1 border-fuchsia-100 bg-white">
  {/* Section Heading */}
  <h1 className="text-xl md:text-2xl font-bold text-primary text-center mb-6">
    What We Do
  </h1>

  {/* Content Layout */}
  <div className="flex flex-col md:flex-row items-center gap-10">
    {/* Text Section (2/3 width on md+) */}
    <div className="w-full md:w-2/3 order-2 md:order-1">
      <p className="text-justify text-gray-700 leading-relaxed text-sm md:text-base">
        In today’s fast-moving online world, 
        <span className="text-primary font-semibold"> standing out isn’t easy </span>
        — but that’s where we come in. At 
        <span className="text-primary font-bold"> DataKit Studio</span>, 
        we combine the power of 
        <span className="text-primary font-semibold"> data </span> 
        and 
        <span className="text-primary font-semibold"> creativity </span> 
        to build campaigns that 
        <span className="text-primary font-semibold"> people notice and remember.</span> 
        We study your audience, understand what works, and design strategies that deliver 
        <span className="text-primary font-semibold"> real results </span> 
        — not just views and clicks.
        <br /><br />
        Whether it’s 
        <span className="text-primary font-semibold"> planning content</span>, 
        <span className="text-primary font-semibold"> managing campaigns</span>, 
        or 
        <span className="text-primary font-semibold"> improving engagement</span>, 
        our team focuses on creating marketing that 
        <span className="text-primary font-semibold"> truly matters.</span> 
        Every project we take on is guided by 
        <span className="text-primary font-semibold"> research</span>, 
        <span className="text-primary font-semibold"> creativity</span>, 
        and 
        <span className="text-primary font-semibold"> measurable growth.</span>
        <br /><br />
        <span className="font-bold text-primary">
          Our mission is clear:
        </span>{" "}
        to help your brand grow 
        <span className="text-primary font-semibold"> smarter</span>, 
        <span className="text-primary font-semibold"> faster</span>, 
        and 
        <span className="text-primary font-semibold"> stronger</span> 
        through the perfect mix of 
        <span className="text-primary font-semibold"> data and creativity.</span>
      </p>
    </div>

    {/* Image Section (1/3 width on md+) */}
    <div className="relative w-full md:w-1/3 flex justify-center order-1 md:order-2">
      <Image
        src="/Images/about-us/aboutus-whatwedo.png"
        alt="What we do image"
        width={500}
        height={500}
        className="object-contain rounded-lg w-full h-auto"
      />
    </div>
  </div>
</div>
    )
}