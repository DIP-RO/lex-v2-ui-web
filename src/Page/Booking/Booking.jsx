import Loading from "../../Component/Loading/Loading";
import AvaiableLawyer from "../Appointment/AvaiableLawyer/AvaiableLawyer";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Booking = () => {

  <Loading />
  return (
    <div>
      <div className="w-[300px]  shadow-xl m-20 bg-white">
        <figure ><img src="https://faculty.daffodilvarsity.edu.bd/images/teacher/6ee58b6017ad9f5865715be5bfc5711e.JPG" alt="Shoes" className="w-[300px] h-[350px]" /></figure>
        <div className="flex flex-col items-center justify-center  z-10 ">
          <div className="bg-[#343a40]  rounded-3xl -mt-7 flex gap-4 p-5 items-center justify-center">

            <FaFacebookF className=" text-white" />
            <CiInstagram className=" text-white" />
            <FaTwitter className=" text-white" />
            <FaLinkedin className=" text-white" />
          </div>
          <h2 className="card-title">
            Dr. S.M. Saiful Hoque
          </h2>
          <p className=" my-3">Family Consultant</p>

        </div>
      </div>
    </div>
  );
};

export default Booking;
