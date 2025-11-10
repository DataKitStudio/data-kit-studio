import ProvenCard from "./components/proven-card";


export default function ProvenProcess() {
    return(
        <div className="flex flex-col items-center gap-8 py-10 px-10 w-full">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-4xl font-extrabold text-primary">Our Proven Process</h1>
                <h2 className="text-xl font-bold text-dark">From strategy to execution, we follow a systematic approach that delivers results</h2>
            </div>
            <ProvenCard/>
        </div>
    )
}