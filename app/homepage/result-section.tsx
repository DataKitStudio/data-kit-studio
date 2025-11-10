import ResultCard from "./components/result-card";


export default function ResultSection() {
    return(
        <div className="flex flex-col gap-8 w-full items-center bg-background-500 py-10">
            <div className="flex flex-col gap-4 items-center px-10">
            <h1 className="text-4xl text-secondary font-extrabold"> Results that speaks </h1>
            <h2 className="text-xl text-dark font-bold">Numbers that showcase our commitment to excellence</h2>
            </div>
            <ResultCard />
        </div>
    )
}