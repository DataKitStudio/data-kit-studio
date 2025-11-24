

type ServicesCardProp = {
  services: string[];
}

export default function ServicesCard({ services }: ServicesCardProp) {

  return (
    <div
      className="flex items-center w-fit gap-2 rounded-2xl"
    >
      {services.map((service, key) => (
        <h1 className="text-[11px] font-bold text-center text-light px-2 py-1  bg-gradient-to-r from-fuchsia-400 to-[#f081f3]/50 rounded-lg border-fuchsia-400/200 w-auto">
          {service}.
        </h1>
      ))}
    </div>


  )
}