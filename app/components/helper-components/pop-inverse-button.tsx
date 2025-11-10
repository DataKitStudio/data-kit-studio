"use client"
import clsx from "clsx";
import {motion as m} from "motion/react"
import React from "react";

type PopInverseButtonProp = {
    text: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PopInverseButton(data: PopInverseButtonProp) {
   return(
    <m.button className={clsx(data.className,"text-black border-2 border-primary hover:bg-primary hover:text-white bg-light px-7 py-4 rounded-4xl shadow-md") } whileHover={{scale:1.1}} transition={{duration:1, ease:"easeOut"}} onClick={data.onClick}>{data.text}</m.button>
   )
    
}