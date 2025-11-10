
import CardLight from "./components/card-light"


export default function ServicesBanner() {

    return (
        <div className="flex flex-col bg-light justify-between items-center gap-20 items-center width-full xl:mt-30 mt-10 px-10 xl:px-20 py-15">
            <div className="flex flex-col gap-3 items-center w-full">
                <h1 className="md:text-5xl text-4xl font-bold text-dark">What we provide?</h1>
                <h2 className="text-xl font-bold text-dark text-justify">Comprehensive social media solutions tailored to<i className="text-primary font-extrabold"> Grow Your Brand</i></h2>
            </div>
            
            <CardLight />
            </div>
    )
}