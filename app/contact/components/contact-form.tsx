"use client";

import { useRouter } from "next/navigation";
import { motion as m } from "framer-motion";
import { useState } from "react";
import { SendHorizonal, Phone, Mail, MapPin, Users } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import PopButton from "@/app/components/helper-components/pop-button";

const inputStyle =
  "p-3 text-base text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-fuchsia-500 w-full rounded-md bg-white/70 transition-all duration-300";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
    website: "",
    type: "Contact Form"
  });

  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateData()) return;
    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    let data;
    try {
      data = await res.json();
    } catch {
      data = null;
    };

    if (res.ok) {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        organization: "",
        phone: "",
        message: "",
        website: "",
        type: "Contact Form"
      });
    } else {
      console.log(res)
      toast.error("Something went wrong. Please try again.");
    }
  };

  const route = useRouter();

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
    <div className="flex flex-col items-center w-full">


      <div className="flex flex-col items-center gap-20 lg:w-[75%] w-[95%] py-20">
        <Toaster position="top-center" reverseOrder={false} />

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-6xl md:text-7xl p-4 bg-gradient-to-b from-fuchsia-900 via-[#f081f3] to-[#a3a9ce] bg-clip-text text-transparent font-bold text-fuchsia-900 mb-4">
            Let’s Work Together
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have a project in mind or just want to say hello? We’d love to hear from you.
            Our team is ready to help you plan, design, and grow your digital presence.
          </p>
        </m.div>

        <form
          className="w-full max-w-3xl flex flex-col gap-10 shadow-lg p-4 sm:p-12 rounded-2xl 
        border border-fuchsia-200 bg-white/80"
        >
          <div className="flex flex-col gap-10">
            <h2 className="text-2xl font-bold text-fuchsia-900">
              Chat with us<span className="text-fuchsia-500">!</span>
            </h2>
            <h3 className="text-md font-medium text-gray-700">
              <span className="font-bold">To:</span> hello@datakitstudio.com
            </h3>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex flex-wrap gap-3">
            <input onChange={handleChange} value={formData.name} name="name" placeholder="Name*" className={inputStyle} />
            <input onChange={handleChange} value={formData.email} name="email" placeholder="Email*" className={inputStyle} />
            <input onChange={handleChange} value={formData.phone} name="phone" placeholder="Phone" className={inputStyle} />
            <input onChange={handleChange} value={formData.organization} name="organization" placeholder="Organization" className={inputStyle} />
            <input onChange={handleChange} value={formData.website} name="website" placeholder="Website" className={inputStyle} />
          </div>

          <textarea
            onChange={handleChange}
            value={formData.message}
            name="message"
            placeholder="Message*"
            className={`${inputStyle} min-h-[120px]`}
          />

          <div className="flex flex-col justify-center gap-5 bg-fuchsia-50/60 p-6 rounded-xl border border-fuchsia-200">
            <h2 className="text-2xl font-bold text-fuchsia-900 mb-2">Contact Information</h2>

            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="text-fuchsia-600" /> 7002498166, 7002284047
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-fuchsia-600" /> hello@datakitstudio.com
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-fuchsia-600" /> Guwahati, Assam, India
            </div>

            <p className="text-sm text-gray-600 mt-3">
              We usually respond within{" "}
              <span className="text-fuchsia-900 font-semibold">24 hours</span>.
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <PopButton text="Send Message" icon="SendHorizontal" />

          </div>
        </form>

        <div
          className="w-full max-w-3xl rounded-xl overflow-hidden shadow-md border border-fuchsia-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.952001298582!2d91.74682631496004!3d26.14451648346182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5ac0b0000001%3A0x9f2cb5f7b1b292e5!2sGuwahati%2C%20Assam%2C%20India!5e0!3m2!1sen!2sin!4v1731321600000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl"
        >
          <Users className="w-10 h-10 mx-auto text-fuchsia-900 mb-3" />
          <h2 className="text-3xl font-bold text-fuchsia-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-700">
            Our passionate team of strategists, designers, and developers are always ready to
            collaborate with you. Every message we receive is read and replied to personally —
            because your project deserves real attention.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mt-10"
        >
          <h2 className="text-4xl font-extrabold text-fuchsia-900 mb-6">
            Ready to Grow Your Brand?
          </h2>
          <p className="text-gray-700 mb-6">
            Let’s start something amazing together. Whether it’s a new project or an ongoing partnership,
            we’re here to help your brand shine.
          </p>
          <PopButton text="Start Your Project" icon="SendHorizontal" onClick={() => {
            route.push("/getstarted");
          }} />
        </m.div>
      </div>
    </div>
  );
}
