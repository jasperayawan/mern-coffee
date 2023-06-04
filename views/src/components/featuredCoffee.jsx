import Card from "./card"
import DataCardCoffee from "../pages/dataCardCoffee"

const displayCardCoffee = (DataCardCoffee) => {
    return(
        <Card 
            name="Coffee 1" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolor dicta culpa nihil eligendi, quam accusamus."/>
    )
}


export default function FeaturedCoffee(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 h-screen justify-center items-center max-w-5xl mx-auto">
            {DataCardCoffee.map(displayCardCoffee)}
        </div>
    )
}