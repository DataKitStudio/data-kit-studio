

export default function InfluencerCard({ service }: { service: string[] }) {
  return (
    <div className="w-full flex">
      <div className="flex w-fit px-5 py-0.5 rounded-xl bg-gradient-to-r from-fuchsia-900 via-[#f081f3] to-[#a3a9ce]">
        {service.map((list, key) => (
          <h1 className="text-[9px] text-light">{list}.</h1>
        ))}
      </div>
    </div>

  )
}