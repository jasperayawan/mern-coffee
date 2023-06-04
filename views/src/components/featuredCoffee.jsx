import Card from "./card"
import DataCardCoffee from "../pages/dataCardCoffee"

const displayCardCoffee = (DataCardCoffee) => {
    return(
        <Card 
            key={DataCardCoffee.id}
            name={DataCardCoffee.name} 
            description={DataCardCoffee.description}/>
    )
}


export default function FeaturedCoffee(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 h-screen justify-center items-center max-w-5xl mx-auto">
            {DataCardCoffee.map(displayCardCoffee)}
        </div>
    )
}