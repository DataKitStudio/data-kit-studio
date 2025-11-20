"use client";
import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import Image from "next/image";
import Menu from "@/app/components/menu";
import { MobileMenuButton, MobileMenuDrawer } from "./mobile-menu";

export default function Header({ className = "" }: { className?: string }) {
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);

  /* Smooth scale ONLY on Y axis (cheap on GPU) */
  const rawScale = useTransform(scrollY, [0, 120], [1, 0.9]);
  const scaleY = useSpring(rawScale, { stiffness: 160, damping: 20 });

  /* Animate only opacity — very cheap */
  const bgOpacity = useTransform(scrollY, [0, 120], [0.05, 0.15]);
  const backgroundColor = useTransform(bgOpacity, (v) => `rgba(255,255,255,${v})`);
  return (
    <>
      <motion.header
        style={{
          scaleY,
          backgroundColor: backgroundColor,

          // Keep blur static — DO NOT animate it
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",

          transformOrigin: "top"
        }}
        className={`
          ${className}
          sticky top-0 z-50
          flex flex-row w-full justify-between items-center
          px-6 sm:px-10 xl:px-30 md:px-10
          py-3
          border-b border-white/20
          bg-white/5
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
