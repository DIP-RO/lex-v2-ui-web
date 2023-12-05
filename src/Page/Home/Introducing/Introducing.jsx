import Loading from "../../../Component/Loading/Loading";


const Introducing = () => {
    <Loading/>
    return (
        <div className="xl:hidden md:hidden lg:hidden max-w-sm mb-5">
            <h1 className="text-xl font-bold text-white ml-12">Introducing Lex.Ai</h1>
            <div className="relative flex  justify-end w-full items-end pt-6 pb-1 px-6">
                <div className=" w-1/2  flex items-center mb-10">
                    <div className="text-sm font-['Poppins'] font-semibold w-5/6 bg-[rgba(74,_58,_58,_0.68)] text-white py-2 px-5 rounded-2xl">
                        Feel free to ask anything...
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="shadow-[0px_18px_16px_0px_rgba(0,_0,_0,_0.25)] w-1/2 h-5 bg-[rgba(74,_58,_58,_0.68)] absolute top-[115px] left-[170px] rounded-lg" />
                    <img src="https://i.ibb.co/DLpxn4F/image.png" id="Chatbot" className="relative w-28 ml-5" />
                </div>
            </div>
        </div>
    );
};

export default Introducing;
