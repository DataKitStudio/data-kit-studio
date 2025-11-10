import WhyUsCard from "./components/why-us-card";


export default function WhyUsSection() {
    return(
        <div className="flex flex-col gap-10 w-full bg-purple-50 p-10 py-10 xl:20 border-y-1">
            <div className="flex flex-col gap-10 w-full items-center">
                <h1 className="text-4xl font-extrabold text-primary">Why Choose Us</h1>
                <h2 className="text-xl font-bold text-secondary">We're not just another agency - here's what sets us apart</h2>
            </div>
            <WhyUsCard />
        </div>
    )
}