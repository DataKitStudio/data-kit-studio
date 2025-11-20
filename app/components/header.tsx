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
     Smooth, lightweight animations (no transforms)
  --------------------------------------------- */

  // Header padding shrink on scroll (very cheap)
  const rawPadding = useTransform(scrollY, [0, 120], [16, 8]); // px
  const paddingY = useSpring(rawPadding, { stiffness: 140, damping: 18 });

  // Background opacity
  const bgOpacity = useTransform(scrollY, [0, 120], [0.05, 0.15]);
  const backgroundColor = useTransform(
    bgOpacity,
    (v) => `rgba(255,255,255,${v})`
  );

  return (
    <>
      <motion.header
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
          backgroundColor,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)"
        }}
        className={`
          ${className}
          sticky top-0 z-50
          flex flex-row w-full justify-between items-center
          px-6 sm:px-10 xl:px-30 md:px-10
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

        {/* Desktop Menu */}
        <Menu />

        {/* Mobile Burger */}
        <div className="md:hidden">
          <MobileMenuButton onOpen={() => setOpen(true)} />
        </div>
      </motion.header>

      {/* Drawer */}
      <MobileMenuDrawer open={open} setOpen={setOpen} />
    </>
  );
}
