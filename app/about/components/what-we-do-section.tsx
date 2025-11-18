"use client";

import Image from "next/image";
import { motion as m } from "framer-motion";

export default function WhatWeDo() {
  return (
    <section className="flex flex-col gap-10 items-center w-[90%] lg:w-[75%] mx-auto ">
      {/* Section Heading */}
      <m.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl md:text-3xl font-bold text-primary text-center mb-8 tracking-wide"
      >
        What We Do
      </m.h1>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image Section */}
        <m.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/3 flex justify-center order-1 md:order-2"
        >
          <Image
            src="/Images/about-us/aboutus-whatwedo.png"
            alt="What we do image"
            width={500}
            height={500}
            className="object-contain rounded-xl w-full h-auto shadow-lg hover:scale-105 transition-transform duration-500 ease-out"
          />
        </m.div>

        {/* Text Section */}
        <m.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-2/3 order-2 md:order-1"
        >
          <p className="text-justify text-gray-700 leading-relaxed text-sm md:text-base tracking-wide">
            In today’s fast-moving online world,
            {" "}
            standing out isn’t easy{" "}
            — but that’s where we come in. At
            <span className="text-primary font-bold"> DataKit Studio</span>, we
            combine the power of data
            and creativity
            to build campaigns that
            {" "}
            people notice and remember.{" "}
            We study your audience, understand what works, and design strategies
            that deliver
            <span className="text-primary font-semibold"> real results </span>—
            not just views and clicks.
            <br />
            <br />
            Whether it’s planning content
            ,
            {" "}
            managing campaigns
            , or
            {" "}
            improving engagement
            , our team focuses on creating marketing that truly matters.{" "}
            Every project we take on is guided by research, creativity, and
            {" "}
            measurable growth.
            <br />
            <br />Our mission is clear:{" "}
            to help your brand grow
            <span className="text-primary font-semibold"> smarter</span>,
            <span className="text-primary font-semibold"> faster</span>, and
            <span className="text-primary font-semibold"> stronger</span> through
            the perfect mix of
            {" "}
            data and creativity.
          </p>
        </m.div>
      </div>
    </section>
  );
}
