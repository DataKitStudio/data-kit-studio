import { ChevronRight } from "lucide-react";

interface Service {
  title: string;
  services: string[];
}

export default function InfluencerCard({service}: {service: Service}) {
    return(
        <div className="flex flex-col p-5 rounded-2xl shadow-xl gap-4
    bg-fuchsia-100/40 backdrop-blur-xl border border-fuchsia-200/40
    hover:bg-fuchsia-100/60 transition-all duration-300">
  <h1 className="text-gray-900 font-bold">{service.title}</h1>
  <div className="flex flex-col">
    {service.services.map((list) => (
      <div key={list} className="flex gap-2 items-center">
        <ChevronRight className="text-fuchsia-600 opacity-80" />
        <h1 className="text-gray-800/90">{list}</h1>
      </div>
    ))}
  </div>
</div>
    )
}