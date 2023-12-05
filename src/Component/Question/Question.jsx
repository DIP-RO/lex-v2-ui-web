import Loading from "../Loading/Loading";

const Question = () => {
    <Loading/>
    return (
        <div className="hero min-h-fit my-10 sm:hidden">
            <div className="hero-content flex-col gap-10 lg:flex-row-reverse md:flex-row-reverse">
                <div className="w-full md:w-1/2">
                    <img src="https://i.ibb.co/WyM7qdQ/image.png" className="max-w-sm" />
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-5xl font-bold text-white">Any Question?</h1>
                    <p className="py-6 text-white">Feel free to contact with us. We are available 24/7</p>
                    <p className="pb-6 text-2xl font-semibold text-white">You can reach us through:</p>
                    <div className="flex bg-slate-600 w-fit h-16 rounded-2xl">
                        <button className="btn bg-transparent border-none hover:bg-transparent">
                            <img src="https://i.ibb.co/6BGY8XB/image.png" className="w-16 p-2" />
                        </button>
                        <button className="btn bg-transparent border-none hover:bg-transparent">
                            <img src="https://i.ibb.co/3znP2pC/image.png" className="w-16 p-2" />
                        </button>
                        <button className="btn bg-transparent border-none hover:bg-transparent">
                            <img src="https://i.ibb.co/4YCK6hs/image.png" className="w-16 p-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
