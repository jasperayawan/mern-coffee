
export default function AboutCoffee(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="imageCoffee_about h-screen"></div>
            <div className="flex justify-center h-screen">
                <div className="max-w-md gap-4 flex flex-col px-5 justify-center h-full">
                    <h1 className="text-3xl font-bold text-stone-800">Single Origin Coffee Imported World wide</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Maxime, voluptate molestias tenetur aliquid ipsa voluptas atque 
                        necessitatibus repudiandae! Est, commodi.</p>
                    <div>
                        <button className="__readmore text-white px-4 py-3">
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}