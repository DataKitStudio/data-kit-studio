"use client";

import { motion as m } from "framer-motion";

export default function OurTeamSection() {
  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center justify-center mx-auto rounded-2xl shadow-md shadow-fuchsia-200 bg-white p-6 md:p-10 my-10 border border-fuchsia-100 w-[90%] lg:w-[75%] "
    >
      {/* Title */}
      <m.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl font-extrabold text-primary text-center mb-2"
      >
        Our Team
      </m.h1>

      {/* Subtitle */}
      <m.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-sm md:text-base text-center font-medium text-dark mb-6"
      >
        Behind every great result is a great team — and ours is the core of everything we do.
      </m.h2>

      {/* Description */}
      <m.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-gray-700 text-justify leading-relaxed text-sm md:text-base"
      >
        At <span className="text-primary font-semibold">DataKit Studio</span>, our team is made up of
        creators,
        strategists, and  analysts who bring fresh ideas and real results to every project.
        We’re curious, passionate, and always focused on doing our best work.
        <br /><br />
        From crafting strategies to fine-tuning details, we believe success comes from  teamwork, innovation, and
        consistency.
        We don’t just create campaigns — <span className="text-primary font-semibold">we
          build connections that last.</span>
      </m.p>
    </m.div>
  );
}
