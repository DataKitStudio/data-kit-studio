"use client"
import AnimatedButton from "@/app/components/helper-components/animated-button";
import { SendHorizonal } from "lucide-react";

export default function FormSection() {
    return(
        <div className="flex flex-col items-center gap-10 py-10 bg-fuchsia-100/40">
            <h1 className="text-4xl font-extrabold text-primary">Your info please</h1>
            <form className="flex flex-col gap-10 w-[80%] sm:w-[60%] lg:w-[40%]">
            <input
          className="p-3 border rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          placeholder="Full Name*"
        />
        <input
          className="p-3 border rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          placeholder="Email*"
        />
        <input
          className="p-3 border rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          placeholder="Phone Number*"
        />
        <input
          className="p-3 border rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          placeholder="Company / Brand Name"
        />
        <select className="p-3 border rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-fuchsia-400">
        <option>Select Project Type</option>
        <option>Brand Strategy</option>
        <option>Social Media Marketing</option>
        <option>Web Development</option>
        <option>Video Production</option>
        <option>Other</option>
        </select>

      <textarea
        className="p-3 border rounded-md text-dark min-h-[150px] focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
        placeholder="Tell us more about your project..."
      />

      {/* Button */}
      <div className="flex justify-center pt-4">
        <AnimatedButton
          text="Submit Project"
          className="flex items-center gap-3 text-lg font-semibold px-6 py-3 rounded-xl shadow-lg border border-fuchsia-900 text-fuchsia-900 hover:bg-fuchsia-900 hover:text-white transition-all"
          Icon={SendHorizonal}
        />
      </div>
    </form>
          </div>
    )
}