"use client"
import {motion as m} from "motion/react";
import { LucideIcon } from "lucide-react";

type AnimatedButtonProp = {
    text: string,
    className?: string,
    duration?: number,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    sectionName?: string,
    buttonLogo?: string,
    Icon?: LucideIcon;
}

export default function AnimatedButton(data : AnimatedButtonProp) {
    return(
        <m.button
        transition={{duration:data.duration, ease:"easeOut"}}
                        initial={{y: 50, opacity: 0}} 
                        whileInView={{y:0, opacity:1}} 
                        viewport={{amount:0.3}} 
                        whileHover={{scale:1.1, rotate:1}} 
                        onClickCapture={data.onClick} 
                        className={data.className}
    >{data.text}{data.Icon && <data.Icon className="w-4 h-4" />}</m.button>
    )
}



