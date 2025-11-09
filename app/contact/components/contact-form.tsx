"use client"
import AnimatedButton from "@/app/components/helper-components/animated-button";
import { Send, SendHorizonal } from "lucide-react";
import {motion as m} from "motion/react"
import { useState } from "react";


const inputStyle="p-2 text-lg text-dark placeholder-dark border-2 w-full sm:w-70 rounded-md"

export default function ContactUsForm() {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        organization:"",
        phone:"",
        message:"",
        website:""
    }) 
    
    const [error, setError] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value, 
        }));
    }

  

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault
        validateData()
        if(error === null){
            setError(null)
            console.log("Submitted")
            return
        }
    }

      const validateData = () =>{
        if(formData.name == null) {
            setError("Please provide your name!")
        } else if (formData.email === null) {
            setError("Please provide your email!")
        } else if (formData.phone === null) {
            setError("Please provide your phone!")
        } else if (formData.message === null) {
            setError("Please enter your message!")
        }
    }

    return(
        <m.form 
        transition={{duration:1, ease:"easeOut"}}
             initial={{x:-50, opacity:0}} 
             whileInView={{x:0, opacity:1}} 
        className="flex flex-col justify-between gap-3 shadow-md p-3 sm:p-10 rounded-md ">
            <m.h1
            transition={{duration:1, ease:"easeOut"}}
             initial={{x:-30, opacity:0}} 
             whileInView={{x:0, opacity:1}} 
             className="text-xl font-bold text-primary w-full text-start pb-10">Chat with us<span className="text-red-500">!</span></m.h1>
            <m.h2
            transition={{duration:1, ease:"easeOut"}}
             initial={{x:-30, opacity:0}} 
             whileInView={{x:0, opacity:1}} 
             className="text-xl font-bold text-dark">To,</m.h2>
            <m.h2 
            transition={{duration:1, ease:"easeOut"}}
             initial={{x:-30, opacity:0}} 
             whileInView={{x:0, opacity:1}} 
            className="text-lg font-bold text-dark">hello@hello.com</m.h2>
            {error && (
            <m.p initial={{x:-20}} whileInView={{x:0}} className="text-red-500 text-sm mt-1">{error}</m.p>
        )}
            <div className="flex flex-wrap justify-start items-start gap-3 pt-10">
                <input onChange={handleChange} name="name" className={inputStyle} placeholder="Name*"/>
                <input onChange={handleChange} name="email" className={inputStyle} placeholder="Email*" required/>
                <input onChange={handleChange} name="phone" className={inputStyle} placeholder="Phone*" required/>
                <input onChange={handleChange} name="organization" className={inputStyle} placeholder="Organization"/>
                <input onChange={handleChange} name="website" className={inputStyle} placeholder="Website"/>
            </div>
            <div>
                <textarea onChange={handleChange} name="message" className={inputStyle} placeholder="Message Any*" required/>
            </div>           
            <AnimatedButton text="Send" Icon={SendHorizonal} className="flex justify-between gap-6 items-center border-2 border-primary px-4
             py-2 w-30 text-dark rounded-xl text-xl font-bold"/>
        </m.form>
    )
}