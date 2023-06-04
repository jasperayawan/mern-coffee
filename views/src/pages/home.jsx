import AboutCoffee from "../components/aboutCoffee";
import Card from "../components/card";
import FeaturedCoffee from "../components/featuredCoffee";
import Hero from "../components/hero";

export default function Home(){
    return(
        <>
            <Hero/>
            <AboutCoffee/>
            <FeaturedCoffee/>
        </>
    )
}