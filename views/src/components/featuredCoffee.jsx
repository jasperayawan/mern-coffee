import Card from "./card"
import DataCardCoffee from "../pages/dataCardCoffee"

const displayCardCoffee = (DataCardCoffee) => {
    return(
        <Card 
            key={DataCardCoffee.id}
            imageCoffee={DataCardCoffee.imageCoffee}
            name={DataCardCoffee.name} 
            description={DataCardCoffee.description}/>
    )
}


export default function FeaturedCoffee(){
    return(
        <div className=" __featuredCoffee">
            <div className="md:max-w-6xl mx-auto h-screen flex flex-col justify-center">
                <div className="max-w-lg flex flex-col gap-3 mb-4">
                    <h1 className="__titleEverySection">Featured Coffee</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Ducimus, dicta labore explicabo, nisi officiis
                        earum laborum est quasi facilis, provident eligendi repellendus omnis hic accusantium?.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {DataCardCoffee.map(displayCardCoffee)}
                </div>
            </div>
        </div>
    )
}

