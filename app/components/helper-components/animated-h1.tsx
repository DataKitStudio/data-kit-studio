"use client"
import {motion as m} from "motion/react"

type AnimatedH1Prop = {
    text: string,
    className?: string,
}

export default function AnimatedH1(data: AnimatedH1Prop) {
    return(
        <m.h1
            transition={{duration:1, ease:"easeOut"}} 
            initial={{y: 50, opacity: 0}} 
            whileInView={{y:0, opacity:1}} 
            viewport={{amount:0.3}} 
            className={data.className}
        >{data.text}</m.h1>
    )

}