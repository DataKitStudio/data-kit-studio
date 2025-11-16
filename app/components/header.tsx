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

  /* --------------------------------------------
     1. Scale height only (no width shrinking)
  --------------------------------------------- */
  const rawScale = useTransform(scrollY, [0, 120], [1, 0.9]);
  const scale = useSpring(rawScale, { stiffness: 180, damping: 18 });

  /* --------------------------------------------
     2. Background opacity
  --------------------------------------------- */
  const rawBgOpacity = useTransform(scrollY, [0, 120], [0.05, 0.15]);
  const bgOpacity = useSpring(rawBgOpacity, { stiffness: 120, damping: 20 });

  const backgroundColor = useTransform(
    bgOpacity,
    (v) => `rgba(255,255,255,${v})`
  );

  /* --------------------------------------------
     3. Blur ONLY when scrolling
  --------------------------------------------- */
  const blurFilter = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(16px)"]
  );

  return (
    <>
      <motion.header
        style={{
          scaleY: scale,
          backgroundColor,
          backdropFilter: blurFilter,
          WebkitBackdropFilter: blurFilter,
          transformOrigin: "top",   // ← FIX THE GAP
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
            alt="House of Influenca logo"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <Menu />

        <div className="md:hidden">
          <MobileMenuButton onOpen={() => setOpen(true)} />
        </div>
      </motion.header>

      {/* Drawer */}
      <MobileMenuDrawer open={open} setOpen={setOpen} />
    </>
  );
}
