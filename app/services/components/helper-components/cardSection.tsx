
import Card from "./card";

export type SubCategory = {
  key: number;
  name: string;
  description: string;
  image: string;
};


type CardSectionProp = {
  subsection: SubCategory[];
};

export default function CardSection({subsection} : CardSectionProp) {
    return(
        <div className="w-full flex flex-row flex-wrap gap-10 p-10 justify-center">
            {
                subsection.map((category) => (
                    <Card key={category.key} details={category} />
                ))
            }
        </div>
    )
}