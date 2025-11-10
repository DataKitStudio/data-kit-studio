"use client";

import Image from "next/image";
import { motion as m } from "framer-motion";

export default function AgencySection() {
  return (
    <section className="flex flex-col items-center gap-10 w-[90%] md:w-[85%] lg:w-[80%] mx-auto rounded-2xl shadow-2xl p-6 md:p-12 border border-fuchsia-100 bg-white/90 backdrop-blur-md">
      {/* Heading */}
      <m.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl md:text-3xl font-bold text-primary text-center mb-8 tracking-wide"
      >
        About Our Agency
      </m.h1>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image Section */}
        <m.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full md:w-1/3 flex justify-center order-1 md:order-1"
        >
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src="/Images/about-us/aboutagency.png"
              alt="About agency image"
              width={500}
              height={500}
              className="object-contain rounded-xl w-full h-auto shadow-lg hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </m.div>

        {/* Text Section */}
        <m.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-2/3 order-2 md:order-2"
        >
          <p className="text-justify text-gray-700 leading-relaxed text-sm md:text-base tracking-wide">
            <b className="text-primary text-4xl font-bold">I</b>n today’s
            fast-moving online world, standing out isn’t easy — but that’s where
            we come in.
            <br />
            <br />
            At{" "}
            <i className="text-primary font-bold not-italic">DataKit Studio</i>,
            we combine the power of data and creativity to build campaigns that
            people notice and remember. We study your audience, understand what
            works, and design strategies that deliver real results — not just
            views and clicks.
            <br />
            <br />
            Whether it’s planning content, managing campaigns, or improving
            engagement, our team focuses on creating marketing that truly
            matters. Every project we take on is guided by research, creativity,
            and measurable growth.
            <br />
            <br />
            <span className="font-semibold text-primary">
              Our mission is clear:
            </span>{" "}
            to help your brand grow smarter, faster, and stronger through the
            perfect mix of data and creativity.
          </p>
        </m.div>
      </div>
    </section>
  );
}
