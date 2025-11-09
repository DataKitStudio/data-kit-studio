
import { fetchFromStrapi } from "@/lib/strapi"
import CardLight from "./components/card-light"


export default async function ServicesBanner() {

    const data: any = await fetchFromStrapi("services")

    return (
        <div className="flex flex-col bg-primary justify-between items-center gap-20 items-center width-full bg-fuchsia-900 xl:mt-30 mt-10 sm:px-40 md:px-50 px-20 py-15">
            <h1 className="md:text-5xl text-4xl font-bold text-light">What we provide?</h1>
        
            <CardLight />
            </div>
    )
}