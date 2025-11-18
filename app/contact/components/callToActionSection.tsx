"use client"
import { motion as m } from "framer-motion"
import { SendIcon } from "lucide-react"
import React, { useState } from "react"
import ContactUsForm from "./contact-form";

export default function CallToActionSection() {

    return (
        <div className="w-full flex flex-col items-center pt-10 gap-10">
            <div className="lg:w-[75%] w-[95%]">
                <m.h1
                    transition={{ duration: 1, ease: "easeOut" }}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-primary text-4xl font-bold lg:w-1/2 ">Let’s collaborate and craft your next big digital success.</m.h1>
            </div>
            <ContactUsForm />
        </div>
    )
}