"use client"
import {motion as m} from "motion/react"
import React from "react";

type PopButtonProp = {
    text: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function PopButton(data: PopButtonProp) {
    return(
        <m.button onClick={data.onClick} className="bg-primary text-white px-20 py-5 font-extrabold text-lg rounded-4xl shadow-md" whileHover={{scale:1.1}}>{data.text}</m.button>
    )
}