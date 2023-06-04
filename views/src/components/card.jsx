

export default function Card(props){
    return(
        <div>
            <div className="flex flex-col">
                <img src={props.imageCoffee} alt="" />
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <button>View Details</button>
            </div>
        </div>
    )
}