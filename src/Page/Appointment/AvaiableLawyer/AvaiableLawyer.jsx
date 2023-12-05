import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../Component/Loading/Loading";

const AvaiableLawyer = () => {
    const [lawyers, setLawyers] = useState([]);
    
    useEffect(() => {
        fetch("https://attractive-ruby-cow.cyclic.app/api/v1/lawyers/lawyers")
            .then((response) => response.json())
            .then((data) => setLawyers(data))
            .catch((error) => console.error("Error fetching law data:", error));
    }, []);
<Loading/>
    return (
        <div className="h-[450px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-14 md:gap-5 mt-10 sm:max-w-sm sm:gap-4 md:min-h-fit">
            {lawyers.map((lawyer) => (
                <div key={lawyer._id}>
                    <Link to={`/lawyardetails/${lawyer._id}`}>
                        <button
                            className="flex btn flex-col gap-5 lg:w-[270px] lg:h-[350px] md:w-[270px] md:h-[350px] sm:h-48 sm:w-44 items-center p-8 rounded-[22px] bg-[#1d344a] hover:bg-[#1d344a]"
                        >
                            <div className="flex flex-col justify-center items-center ">
                                <div>
                                    <img src={lawyer.image} className="w-[75px] h-[75px] rounded-full online" />
                                </div>
                                <div className="text-center font-['Montserrat'] font-bold tracking-[2] leading-[19.2px] uppercase text-[#bdcdf1] mb-0">
                                    {lawyer.name}
                                </div>
                                <div className="text-center font-['Open_Sans'] leading-[25.6px] text-white sm:hidden">
                                    {lawyer.description}
                                </div>
                            </div>
                        </button>
                    </Link>
                </div>
            ))}
            
        </div>
    );
};

export default AvaiableLawyer;