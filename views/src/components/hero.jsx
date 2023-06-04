import '../App.css'

export default function Hero(){
    return(
        <div className="Hero">
            <div className='min-h-screen flex justify-center flex-col items-center backdrop-blur-sm h-full w-full'>
                <div className="max-w-5xl mx-auto px-4 flex flex-col gap-4">
                    <h1 className='text-white text-4xl font-bold text-center '>The most delicious of the town</h1>
                    <p className='text-zinc-100'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias consectetur, repudiandae provident in dolores optio.</p>
                    <div className='flex justify-center items-center'>
                        <button className='__buyBtn px-4 py-3 text-white'>Buy Coffee</button>
                    </div>
                </div>
            </div>
        </div>
    )
}