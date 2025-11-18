"use client"
import * as Icons from "lucide-react"
import { motion as m } from "motion/react"

type ServicesCardProp = {
  key: number;
  image: string;
  title: string;
  description: string;
  services: string[];
}

export default function ServicesCard({ image, title, description, services }: ServicesCardProp) {
  const Icon = (Icons as any)[image];

  return (
    <m.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col gap-5 py-6 px-6 border border-fuchsia-400/20 rounded-2xl 
             shadow-md bg-fuchsia-100/40 backdrop-blur-xl 
             hover:bg-fuchsia-100/60 hover:shadow-fuchsia-200/40"
    >
      {Icon && (
        <div className="p-3 rounded-xl bg-white/40 w-fit shadow-inner">
          <Icon className="w-8 h-8 text-fuchsia-800 drop-shadow-sm" />
        </div>
      )}

      <h1 className="text-2xl font-extrabold text-fuchsia-900 tracking-wide">
        {title}
      </h1>

      <h2 className="text-fuchsia-950/80 text-base leading-relaxed">
        {description}
      </h2>

      {/* <ul className="flex flex-col gap-2 mt-2">
    {services.map((service: string, index: number) => (
      <li
        key={index}
        className="flex items-center gap-2 text-fuchsia-950/90 hover:text-fuchsia-800 transition-colors"
      >
        <Icons.ChevronRight className="w-4 h-4 text-fuchsia-700" />
        {service}
      </li>
    ))}
  </ul> */}
    </m.div>


  )
}