import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../Component/Loading/Loading";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const AvaiableLawyer = () => {
    const [lawyers, setLawyers] = useState([]);

    useEffect(() => {
        fetch("https://attractive-ruby-cow.cyclic.app/api/v1/lawyers/lawyers")
            .then((response) => response.json())
            .then((data) => setLawyers(data))
            .catch((error) => console.error("Error fetching law data:", error));
    }, []);
    <Loading />
    return (
        <div className="h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-8 md:gap-5  sm:max-w-sm sm:gap-4 md:min-h-fit">
            {lawyers.map((lawyer) => (
                <div key={lawyer._id}>
                    <Link to={`/lawyardetails/${lawyer._id}`}>
                        <div className="w-[300px]  shadow-xl m-20">
                            <figure ><img src={lawyer.image} alt="Shoes" className="w-[300px] h-[350px]" /></figure>
                            <div className="flex flex-col items-center justify-center  z-10 ">
                                <div className="bg-[#343a40]  rounded-3xl -mt-7 flex gap-4 p-5 items-center justify-center">

                                    <FaFacebookF className=" text-white" />
                                    <CiInstagram className=" text-white" />
                                    <FaTwitter className=" text-white" />
                                    <FaLinkedin className=" text-white" />
                                </div>
                                <h2 className="card-title">
                                {lawyer.name}
                                </h2>
                                <p className=" my-3">{lawyer.specialization}</p>

                            </div>
                        </div>
                    </Link>
                </div>
            ))}

        </div>
    );
};

export default AvaiableLawyer;