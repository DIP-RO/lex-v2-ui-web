import Loading from "../Loading/Loading";

const Testymony = () => {
    const testymony = [
        {
            id: 1,
            name: 'Dr. Kudrat-E-Khuda Babu',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://faculty.daffodilvarsity.edu.bd/images/teacher/07fa8d65d467a5218990842ca125a9b2.png",
        },
        {
            id: 2,
            name: 'Dr. S.M. Saiful Hoque',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://faculty.daffodilvarsity.edu.bd/images/teacher/6ee58b6017ad9f5865715be5bfc5711e.JPG",
        },
        {
            id: 3,
            name: 'Dr. Liza Sharmin',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://faculty.daffodilvarsity.edu.bd/images/teacher/44edbe3e269300529fbd05bdbe587fc0.jpg",
        },
        {
            id: 4,
            name: 'Dr. Kudrat-E-Khuda Babu',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://faculty.daffodilvarsity.edu.bd/images/teacher/07fa8d65d467a5218990842ca125a9b2.png",
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
                        className="flex flex-col gap-5 w-[270px] h-[350px] items-center p-8 rounded-[22px] bg-[#212222]"
                    >
                        <img src={testy.image} className="w-[75px] h-[75px] rounded-full" alt={testy.name} />
                        <div className="text-center font-['Montserrat'] font-bold tracking-[2] leading-[19.2px] uppercase text-white mb-0">
                            {testy.name}
                        </div>
                        <div className="text-center font-['Open_Sans'] leading-[25.6px] text-white">
                            {testy.message}
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn bg-[#212222] hover:bg-[#212222] mt-4 text-white">SEE MORE</button>
        </div>
    );
};

export default Testymony;
