import Card from "./card"
import DataCardCoffee from "../pages/dataCardCoffee"

export default function FeaturedCoffee(){
    return(
        <div className=" __featuredCoffee py-5 min-h-screen flex justify-center items-center px-4">
            <div className="flex flex-col">
                <div className="max-w-lg flex flex-col gap-3 mb-4">
                    <h1 className="__titleEverySection">Featured Coffee</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Ducimus, dicta labore explicabo, nisi officiis
                        earum laborum est quasi facilis, provident eligendi repellendus omnis hic accusantium?.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {DataCardCoffee.map((DataCardCoffee) => (
                        <Card 
                            key={DataCardCoffee.id}
                            imageCoffee={DataCardCoffee.imageCoffee}
                            name={DataCardCoffee.name} 
                            description={DataCardCoffee.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

