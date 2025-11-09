"use client"
import {motion as m} from "framer-motion"
import { SendIcon } from "lucide-react"
import React, { useState } from "react"
import ContactUsForm from "./contact-form";

export default function CallToActionSection() {

    return(
        <div className="w-full py-10 px-10 md:px-40 flex flex-col gap-10">
            <div className="">
                 <m.h1 
                 transition={{duration:1, ease:"easeOut"}}
                initial={{x:-50, opacity:0}} 
                whileInView={{x:0, opacity:1}} 
                 className="text-primary text-4xl font-bold md:w-1/2">Let’s collaborate and craft your next big digital success.</m.h1>
            </div>
            <ContactUsForm />
        </div>
    )
}