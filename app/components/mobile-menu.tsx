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
                    {/* Overlay */}
                    <m.div
                        className="fixed inset-0 bg-black/50 z-[190]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    />

                    {/* Drawer */}
                    <m.div
                        className="fixed top-0 right-0 h-auto rounded-2xl p-2 py-10 max-h-screen 
               w-2/3 bg-white shadow-2xl shadow-fuchsia-300/50 z-[200]
               flex flex-col items-center justify-start overflow-y-auto"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
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
                                    // whileHover={{ scale: 1.05 }}
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
