
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Location from "../../Component/Location/Location";
import AvaiableLawyer from "../Appointment/AvaiableLawyer/AvaiableLawyer";
const ServiceDetails = () => {
    const Data = {
        title: {
          label: 'Service Details',
          subLabel: null,
    
        },
        links: [
          { label: null, icon: null },
          { label: 'Service Details', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
      };
    return (
        <div>
            <Location {...Data} />
            <div className=" mt-10 flex flex-col justify-center sm:mt-3  sm:w-3/4 sm:p-5 h-20 shrink-0 items-center rounded-[35px]">
                <div className="text-4xl font-bold text-center mt-5">
                Criminal Law
                </div>
            </div>
            <div className="card card-side bg-base-100 rounded-none shadow-xl mx-28 my-10">
                
                <div className="card-body w-2/3">
                    <h2 className="card-title">One problem of criminal activities is accounting for the proceeds without raising the suspicion of law enforcement agencies</h2>
                    <p className="mt-3">Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    <h1 className="mt-3"><span className="font-bold">Retribution –</span> Criminals ought to Be Punished in some way.</h1>
                    <h1><span className="font-bold">Deterrence –</span> Individual deterrence is aimed toward the specific.</h1>
                    <h1><span className="font-bold">Incapacitation –</span> Designed simply to keep criminals away from society.</h1>
                    <h1><span className="font-bold">Rehabilitation –</span> Aims at transforming an offender.
                    </h1>
                    <p className="mt-3">Risus commodo viverra maecenas accumsan lacus vel facilisis. . Quis ipsum suspendisse ultrices gravida. accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    <p className="mt-3">Risus commodo viverra maecenas accumsan lacus vel facilisis. . Quis ipsum suspendisse ultrices gravida. accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    <p className="mt-3">Risus commodo viverra maecenas accumsan lacus vel facilisis. . Quis ipsum suspendisse ultrices gravida. accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                </div>
            </div>
            <div className=" mt-10 flex flex-col justify-center sm:mt-3  sm:w-3/4 sm:p-5 h-20 shrink-0 items-center rounded-[35px]">
                <div className="text-4xl font-bold text-center mt-5">
                Recommended Lawyers
                </div>
            </div>
            <AvaiableLawyer/>
        </div>
    );
};

export default ServiceDetails;