
import { servicesData } from "@/app/data/categoriesData"
import ServicesCard from "./helper-components/services-card"


export default function ServicesSection() {
    return(
        <div className="grid lg:grid-cols-3 grid-cols-1 xl:px-40 lg:px-20 py-10 px-10 gap-8">
            {
                servicesData.map((service, index:number) =>(
                    <ServicesCard key={service.key} image={service.image} title={service.title} description={service.description} services={service.services} />
                ))
            }
        </div>
    )
}