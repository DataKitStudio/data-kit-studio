"use client";

import { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { menuList } from "../data/data";
import { useRouter, usePathname } from "next/navigation";

export function MobileMenuButton({ onOpen }: { onOpen: () => void }) {
    return (
        <button
            onClick={onOpen}
            className="md:hidden text-black z-[300]"
        >
            <MenuIcon size={28} />
        </button>
    );
}

export function MobileMenuDrawer({ open, setOpen }: any) {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <AnimatePresence>
            {open && (
                <>
                    <m.div
                        className="fixed inset-0 bg-black/50 z-[190]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        style={{ transform: "translate3d(0,0,0)" }}
                        onClick={() => setOpen(false)}
                    />

                    <m.div
                        className="fixed top-0 right-0 w-1/2 h-full pt-20 
                        bg-white/30 backdrop-blur-xl shadow-lg
                        z-[200]"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4 }}
                    >
                        <button
                            className="absolute top-4 right-4 text-black"
                            onClick={() => setOpen(false)}
                        >
                            <X size={28} />
                        </button>

                        {menuList.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <m.button
                                    key={item.href}
                                    onClick={() => {
                                        router.push(item.href);
                                        setOpen(false);
                                    }}
                                    className={`w-full py-4 text-center font-extrabold text-lg 
                                        ${isActive
                                            ? "text-fuchsia-900 bg-fuchsia-50"
                                            : "text-black hover:text-fuchsia-900"
                                        }`}
                                >
                                    {item.name}
                                </m.button>
                            );
                        })}
                    </m.div>
                </>
            )}
        </AnimatePresence>
    );
}
