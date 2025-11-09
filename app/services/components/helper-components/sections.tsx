
import { categories } from "@/app/data/categoriesData"
import CardSection from "./cardSection"

export default function Sections() {
    return(
        categories.map((category) =>(
           <section
  key={category.key}
  id={category.name}
  className="w-full flex flex-col justify-between items-center gap-8 sm:gap-12 px-6 sm:px-10 py-16"
>
  <div className="w-full text-center">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-fuchsia-900">
      {category.name}
    </h1>
  </div>
  <div className="w-full">
    <CardSection subsection={category.subCategories} />
  </div>
</section>

        ))
    )
}