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
      transition={{ duration: 0.7, ease: "easeOut" }}
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
    </m.div>


  )
}