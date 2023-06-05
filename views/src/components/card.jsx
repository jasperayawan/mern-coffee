

export default function Card(props){
    return(
            <div className="flex flex-col gap-3 bg-white overflow-hidden">
                <div className="d-block overflow-hidden w-full h-[200px] object-cover">
                    <img src={props.imageCoffee} alt="" className=""/>
                </div>
                <div className="p-3 flex flex-col gap-4 justify-center items-center">
                    <h1 className="__coffeName">{props.name}</h1>
                    <p className="text-center">{props.description}</p>
                    <div className="flex justify-center items-center">
                        <button className="__buyBtn text-white py-2 px-4">View Details</button>
                    </div>
                </div>
            </div>
    )
}