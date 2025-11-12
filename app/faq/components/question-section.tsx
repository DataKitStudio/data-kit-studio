


"use client";

import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does DataKit Studio provide?",
    answer:
      "We offer a complete range of digital solutions — including social media management, web development, content creation, SEO optimization, and data-driven marketing strategies tailored to your brand.",
  },
  {
    question: "How long does it take to start a project?",
    answer:
      "Once we understand your requirements, our team typically begins within a week. Timelines may vary depending on project complexity and deliverables.",
  },
  {
    question: "Can you handle both design and development?",
    answer:
      "Absolutely! Our team includes expert designers, developers, and strategists who work together to ensure your project looks great and performs flawlessly.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer flexible maintenance and support packages to keep your website, campaigns, and digital assets optimized even after launch.",
  },
  {
    question: "How can I get a quote for my project?",
    answer:
      "You can fill out our contact form or reach us directly via email at hello@datakitstudio.com — we’ll get back to you within 24 hours with a tailored proposal.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col flex-grow items-center gap-10 px-5 sm:px-10 md:px-20 py-20 bg-gradient-to-b from-white to-fuchsia-50">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-extrabold text-fuchsia-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600">
          Got questions? We’ve got answers. Here’s everything you need to know before working with us.
        </p>
      </div>

      <div className="w-full max-w-3xl flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-fuchsia-200 bg-white/60 backdrop-blur-md rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="font-semibold text-lg text-fuchsia-900">
                {faq.question}
              </span>
              <m.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-fuchsia-600 w-6 h-6" />
              </m.div>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <m.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="px-5 pb-5 text-gray-700"
                >
                  {faq.answer}
                </m.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
