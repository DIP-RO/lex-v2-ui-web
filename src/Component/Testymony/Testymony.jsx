import Loading from "../Loading/Loading";

const Testymony = () => {
    const testymony = [
        {
            id: 1,
            name: 'Stella Larson',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://i.ibb.co/VTsfwGj/fpdl-in-person-wearing-glasses-500927-366-normal.jpg",
        },
        {
            id: 2,
            name: 'Olga Jhonso',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://i.ibb.co/9qYCL6s/fpdl-in-realistic-3d-cartoon-character-with-glasses-beard-899449.jpg",
        },
        {
            id: 3,
            name: 'Paul Smith',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://i.ibb.co/2YSrjK7/fpdl-in-gothic-style-girl-cartoon-character-3d-beautiful-black-hair.jpg",
        },
        {
            id: 4,
            name: 'Nat Reynolds',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://i.ibb.co/Ky2pcj9/3d-portrait-businessman-23-2150793877.jpg",
        },
    ];
<Loading/>
    return (
        <div className="flex flex-col justify-center items-center my-20 sm:hidden">
            <div>
                <h1 className="text-center text-4xl font-['Orbitron'] font-bold leading-[14px] uppercase text-white w-min">Feedback</h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-14 md:gap-6 mt-10 ">
                {testymony.map((testy) => (
                    <div
                        key={testy.id}
                        className="flex flex-col gap-5 w-[270px] h-[350px] items-center p-8 rounded-[22px] bg-[#1d344a]"
                    >
                        <img src={testy.image} className="w-[75px] h-[75px] rounded-full" alt={testy.name} />
                        <div className="text-center font-['Montserrat'] font-bold tracking-[2] leading-[19.2px] uppercase text-[#bdcdf1] mb-0">
                            {testy.name}
                        </div>
                        <div className="text-center font-['Open_Sans'] leading-[25.6px] text-white">
                            {testy.message}
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn bg-[#1d344a] hover:bg-[#1d344a] mt-4 text-white">SEE MORE</button>
        </div>
    );
};

export default Testymony;
