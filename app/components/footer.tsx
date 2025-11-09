"use client"
import { useRouter } from "next/navigation";
import { links, brand, contact, footer } from "../data/data";
import Image from "next/image";


export default function Footer() {

    const router = useRouter()

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-fuchsia-900 py-10 md:pl-30  md:text-start text-center">
            {
                footer.map((section) =>(
                    <div key={section.name} className="flex flex-col gap-5">
                        {
                            section.name !== "" ? (
                                <h1 className="text-white text-lg font-bold">{section.name}</h1> 
                            ) : null
                        }
                            
                        <div>
                        {
                            section.name === "Quick Links" ? (
                                links.map((link) => (
                                    <button className="text-white text-md w-full md:text-start" onClick={()=>router.push(link.route)}>{link.name}</button>
                                ))
                            ) : null
                        }
                        
                        {
                            section.name === "" ? (
                                brand.map((brand) => (
                                    <div className="flex flex-col md:items-start items-center">
                                        <div className="relative flex justify-center items-center relative w-30 h-8">
                                            <Image src={brand.logo} fill alt={brand.name}/>
                                                </div>
                                    <h1 className="text-white text-md">{brand.name}</h1>
                                    <h1 className="text-white text-md">{brand.copyright}</h1>
                                    </div>
                                ))
                            ) : null
                        }
                        {
                            section.name === "Contact" ? (
                                contact.map((info) =>(
                                    <div className="flex flex-col md:justify-center">
                                        <h1 className="text-white text-md">Phone: {info.phone}</h1>
                                        <h1 className="text-white text-md">Email: {info.email}</h1>
                                        <h1 className="text-white text-md">Phone: {info.address}</h1>
                                    </div>
                                ))
                            ): null
                        }
                        </div>
                    
                    </div>
                ))
            }
        </div>
    )
}