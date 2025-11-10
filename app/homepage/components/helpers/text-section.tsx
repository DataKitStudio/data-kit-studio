'use client'

import {motion as m} from 'motion/react';



type TextSectionProp = {
    isEven: boolean,
    title: string;
    description: string;
    delay: number
}

export default function TextSection({title, description, isEven, delay} : TextSectionProp) {
    return(
        <m.div initial={{ opacity: 0, x: isEven ? -60 : 60,  }} whileInView={{ opacity: 1,x: 0 }} transition={{ duration: 1.5, ease: "easeOut", delay: delay }} viewport={{once:true, amount: 0.3 }}    
                whileHover={{scale:1.1}} className="flex flex-col justify-center sm:items-center items-start h-full flex-1">
            <h1 className="text-lg sm:text-center text-start font-bold text-dark">{title}</h1>
            <h2 className="text-md sm:text-center text-start text-dark">{description}</h2>
        </m.div>
    )
}