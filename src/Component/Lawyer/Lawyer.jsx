import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import AvaiableLawyer from "../../Page/Appointment/AvaiableLawyer/AvaiableLawyer";

const Lawyer = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    fetch("https://attractive-ruby-cow.cyclic.app/api/v1/lawyers/lawyers")
      .then((response) => response.json())
      .then((data) => setLawyers(data))
      .catch((error) => console.error("Error fetching law data:", error));
  }, []);
  <Loading />;
  return (
    <div className="flex lg:mt-10 md:mt-10  flex-col justify-center items-center  sm:hidden">
      <h1 className="text-4xl font-bold text-center">Recommended Lawyers</h1>
      {/* <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-8">
                {lawyers.map((lawyer) => (
                    <div key={lawyer.id} className="flex flex-col items-center justify-center p-5">
                        <Link to={`/lawyardetails/${lawyer._id}`}>
                        <img className="w-[300px] h-[350px] rounded-3xl" src={lawyer.image} alt="" />
                        </Link>
                        <h1 className="text-2xl font-bold text-center mt-2 text-white">{lawyer.name}</h1>
                        <h3 className="text-xl font-bold text-center text-white">{lawyer.specialization}</h3>
                    </div>
                ))}
            </div> */}
      <AvaiableLawyer />
      <button className="btn bg-[#212222] lg:mt-2 md:mt-4 hover:bg-[#212222]  text-white my-10">
        <Link to="/appointment">SEE MORE</Link>
      </button>
    </div>
  );
};

export default Lawyer;
