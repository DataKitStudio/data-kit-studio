"use client";
import { useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Menu from "@/app/components/menu";
import { MobileMenuButton, MobileMenuDrawer } from "./mobile-menu";

export default function Header({ className }: { className?: string }) {
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);

  const rawHeight = useTransform(scrollY, [0, 120], [90, 60]);
  const rawBgOpacity = useTransform(scrollY, [0, 120], [0.15, 0.35]);
  const rawBlur = useTransform(scrollY, [0, 120], ["blur(0px)", "blur(10px)"]);

  const height = useSpring(rawHeight, { stiffness: 180, damping: 18 });
  const bgOpacity = useSpring(rawBgOpacity, { stiffness: 120, damping: 20 });

  const backgroundColor = useTransform(bgOpacity, (v) => `rgba(255,255,255,${v})`);

  return (
    <>
      <motion.header
        style={{
          height,
          backdropFilter: rawBlur,
          WebkitBackdropFilter: rawBlur,
          backgroundColor,
        }}
        className={`
          ${className} 
          sticky top-0 z-50

          flex flex-row w-full justify-between items-center
          px-6 sm:px-10 xl:px-30 md:px-10
          border-b border-white/10
        `}
      >
        <div className="flex-shrink-0 flex items-center">
          <Image
            src="/Images/logo-header-main.png"
            height={64}
            width={200}
            alt="House of Influenca logo"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <Menu />

        {/* Mobile Menu Button (INSIDE header) */}
        <div className="md:hidden">
          <MobileMenuButton onOpen={() => setOpen(true)} />
        </div>
      </motion.header>

      {/* Drawer (OUTSIDE header, on top of everything) */}
      <MobileMenuDrawer open={open} setOpen={setOpen} />
    </>
  );
}
