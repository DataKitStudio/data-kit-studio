"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import Image from "next/image";
import Menu from "@/app/components/menu";
import { MobileMenuButton, MobileMenuDrawer } from "./mobile-menu";

export default function Header({ className = "" }: { className?: string }) {
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);

  // Fade-in background on scroll
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 0.15]);
  const backgroundColor = useTransform(
    bgOpacity,
    (v) => `rgba(255, 255, 255, ${v})`
  );

  return (
    <>
      <motion.header
        style={{
          backgroundColor,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)"
        }}
        className={`
          ${className}
          sticky top-0 z-50
          flex flex-row w-full justify-between items-center
          px-6 sm:px-10 xl:px-30 md:px-10
          py-3
          border-b border-white/20
        `}
      >
        <div className="flex-shrink-0 flex items-center">
          <Image
            src="/Images/logo-header-main.png"
            height={64}
            width={200}
            alt="Datakitstudio logo"
            priority
          />
        </div>

        <Menu />

        <div className="md:hidden">
          <MobileMenuButton onOpen={() => setOpen(true)} />
        </div>
      </motion.header>

      <MobileMenuDrawer open={open} setOpen={setOpen} />
    </>
  );
}
