import { PhoneCall } from "lucide-react";
import * as Icons from "lucide-react"




export default function NormalButton({ text, text2, icon, className }: { text: string, text2: string, icon?: string, className?: string }) {
    const Icon = icon ? (Icons as any)[icon] : null
    const style = className ? className : "";
    return (
        <div className={`${style + " "}bg-light p-2 border border-primary/20 rounded-2xl`}>
            <h1 className="flex gap-1 text-dark items-center flex-row">{text}{Icon && <Icon className="text-primary" size={15} />} <a className="text-primary underline" href="/contact">{text2} </a> </h1>
        </div>
    )
}