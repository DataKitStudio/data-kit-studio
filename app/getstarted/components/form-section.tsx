"use client"
import PopButton from "@/app/components/helper-components/pop-button";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FormSection() {

  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    project: "",
    message: "",
    type: "Project Form"
  })

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateData()) return;
    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (res.ok) {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        project: "",
        message: "",
        type: "Project Form"
      });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  }

  const validateData = () => {
    if (!formData.name) {
      setError("Please provide your name!");
      return false;
    } else if (!formData.email) {
      setError("Please provide your email!");
      return false;
    } else if (!formData.message) {
      setError("Please enter your message!");
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  return (
    <div className="w-full flex flex-col bg-fuchsia-100/40 items-center">

      <div className="flex flex-col items-center w-[95%] lg:w-[40%] items-center gap-10 px-5 py-10 ">
        <Toaster position="top-center" reverseOrder={false} />
        <h1 className="text-6xl sm-text-7xl  font-bold bg-gradient-to-b from-fuchsia-900 via-[#f081f3] to-[#a3a9ce] bg-clip-text text-transparent">Your info please</h1>
        <div>

        </div>
        <form className="flex flex-col flex-grow-0 w-full gap-10 " onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="p-3 border rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            placeholder="Full Name*"
            required
          />

          <input
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="p-3 border rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            placeholder="Email*"
            required
          />

          <input
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            className="p-3 border rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            placeholder="Phone Number"
          />

          <input
            name="organization"
            onChange={handleChange}
            value={formData.organization}
            className="p-3 border rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            placeholder="Company / Brand Name"
          />

          <select
            name="project"
            onChange={handleChange}
            value={formData.project}
            required
            className="p-3 border rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          >
            <option value="">Select Project Type</option>
            <option value="Brand Strategy">Brand Strategy</option>
            <option value="Social Media Marketing">Social Media Marketing</option>
            <option value="Web Development">Web Development</option>
            <option value="Video Production">Video Production</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="message"
            required
            onChange={handleChange}
            value={formData.message}
            className="p-3 border rounded-md text-dark min-h-[150px] focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            placeholder="Tell us more about your project..."
          />

          {/* Button */}
          <div className="flex justify-center pt-4">
            <PopButton text="Submit Project" icon="SendHorizontal" />
          </div>
        </form>
      </div>
    </div>
  )
}