"use client";

import { menuList } from "../data/data";
import { motion as m } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

export default function DesktopMenu() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex flex-row gap-10 items-center">
      {menuList.map((item) => {
        const isActive = pathname === item.href;
        return (
          <m.button
            key={item.href}
            onClick={() => router.push(item.href)}
            whileHover={{ scale: isActive ? 1 : 1.08 }}
            className={`font-extrabold transition-all ${isActive ? "text-fuchsia-900" : "text-black hover:text-fuchsia-900"
              }`}
          >
            {item.name}
          </m.button>
        );
      })}
    </div>
  );
}
