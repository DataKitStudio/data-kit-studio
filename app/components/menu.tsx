"use client";

import { menuList } from "../data/data";
import { motion as m, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <nav className="flex flex-col md:flex-row flex-1 justify-around items-center py-4">
      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row justify-around items-center w-full">
        {menuList.map((list) => {
          const isActive = pathname === list.href;
          return (
            <m.button
              type="button"
              key={list.href}
              onClick={() => handleNavigate(list.href)}
              whileHover={{ scale: isActive ? 1 : 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`font-extrabold transition-all duration-300 ${
                isActive
                  ? "text-fuchsia-900"
                  : "text-black hover:text-fuchsia-900"
              }`}
            >
              {list.name}
            </m.button>
          );
        })}
      </div>

      {/* Mobile Hamburger */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="md:hidden fixed top-4 right-6 z-50 text-black"
          aria-label="Toggle menu"
        >
          <MenuIcon size={28} />
        </button>
      )}

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 md:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            <m.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-2/3 max-w-sm bg-white shadow-2xl flex flex-col items-center justify-center md:hidden z-50 overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="fixed top-4 right-6 text-black z-[60]"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>

              {menuList.map((list) => {
                const isActive = pathname === list.href;
                return (
                  <m.button
                    type="button"
                    key={list.href}
                    onClick={() => handleNavigate(list.href)}
                    whileHover={{ scale: isActive ? 1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full text-center py-4 font-extrabold text-lg transition-colors ${
                      isActive
                        ? "text-fuchsia-900 bg-fuchsia-50"
                        : "text-black hover:text-fuchsia-900"
                    }`}
                  >
                    {list.name}
                  </m.button>
                );
              })}
            </m.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
