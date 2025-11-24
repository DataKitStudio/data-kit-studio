"use client"
import { motion as m } from "framer-motion"
import React from "react";
import * as Icons from "lucide-react"

type PopButtonProp = {
    text: string;
    className?: string;
    icon?: string;
    loading?: boolean;
    loadingEnabled?: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PopButton(data: PopButtonProp) {

    const Icon = data.icon ? (Icons as any)[data.icon] : null;

    const isLoading = data.loadingEnabled && data.loading;

    const isDisabled = data.disabled;

    const baseClasses =
        `${data.className || ""} relative bg-light text-dark border border-fuchsia-300 
        hover:bg-gradient-to-r from-fuchsia-900 to-[#f081f3] hover:text-light 
        px-20 py-5 text-lg rounded-4xl shadow-md shadow-fuchsia-300 overflow-hidden
        ${isDisabled ? "opacity-60 cursor-not-allowed" : ""}`;

    return (
        <m.button
            onClick={isDisabled ? undefined : data.onClick}
            disabled={isDisabled}
            className={baseClasses}
            variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 },
            }}
            initial="rest"
            animate="rest"
            whileHover="hover"
            transition={{ duration: 0.25, ease: "easeOut" }}
        >
            <m.span
                className="block text-center"
                variants={{
                    rest: { x: 0 },
                    hover: Icon ? { x: -20 } : { x: 0 },
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            >
                {isLoading ? "Sending" : data.text}
            </m.span>
            {Icon && (
                <m.span
                    className="absolute right-[55px] top-1/2 -translate-y-1/2"
                    variants={
                        !isLoading
                            ? {
                                rest: { opacity: 0, x: 10 },
                                hover: { opacity: 1, x: 0 },
                            }
                            : undefined
                    }

                    animate={
                        isLoading
                            ? {
                                opacity: [1, 1, 0],
                                x: [0, 22, 40],
                                scale: [1, 1.1, 1]
                            }
                            : {
                                opacity: 0,
                                x: 0,
                            }
                    }

                    transition={
                        isLoading
                            ? {
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }
                            : {
                                duration: 0.25,
                                ease: "easeOut",
                            }
                    }
                >
                    <Icon size={22} />
                </m.span>
            )}
        </m.button>
    )
}
