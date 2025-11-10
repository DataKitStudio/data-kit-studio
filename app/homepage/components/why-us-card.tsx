'use client'
import {motion as m} from "motion/react"
import { whyUsData } from "@/app/data/data"
import { CircleCheckBigIcon } from "lucide-react"


export default function WhyUsCard(){
    return(
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {whyUsData.map((data) => (
                <m.div
  key={data.key}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: data.key * 0.1 }}
  viewport={{ amount: 0.2 }}
  className="flex gap-4 items-start"
>
  <CircleCheckBigIcon className="text-purple-700 w-6 h-6 mt-1 flex-shrink-0" />
  <div className="flex flex-col gap-1">
    <h1 className="text-lg font-bold text-gray-900">{data.title}</h1>
    <h2 className="text-gray-700 text-sm leading-relaxed">
      {data.description}
    </h2>
  </div>
</m.div>
            ))}
        </div>
    )
}