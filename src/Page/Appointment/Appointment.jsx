import AvaiableLawyer from "./AvaiableLawyer/AvaiableLawyer";
import { format } from 'date-fns';
import { useState } from "react";

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Loading from "../../Component/Loading/Loading";
import Location from "../../Component/Location/Location";
import { RiArrowRightDoubleFill } from "react-icons/ri";



const Appointment = () => {
    const Data = {
        title: {
          label: 'APPOINTMENT',
          subLabel: null,
    
        },
        links: [
          { label: null, icon: null },
          { label: 'APPOINTMENT', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
      };

    const [selected, setSelected] = useState(new Date());

<Loading/>
    return (
        <div className="flex flex-col w-full  items-center  sm:max-w-sm">
            <Location {...Data} />
             <div className="text-3xl font-['Poppins'] font-semibold leading-[32px] text-white">
                Find your Lawyer
            </div>
            <div className="flex flex-row justify-center items-center align-middle gap-5">
            <input className="w-full h-10 rounded-[35px] mt-5 px-5 border-black border-2" type="url" placeholder="Search" />
            <select className="bg-white mt-5 h-10 hover:bg-white rounded-full border-black border-2 " >
                            <option value="ALL" className="lang text-center">
                              All
                            </option>
                            <option value="Criminal"  className=" text-center">
                            Criminal Lawyer
                            </option>
                            <option value="Land"  className=" text-center">
                            Land Lawyer
                            </option>
                            <option value="Civil"  className=" text-center">
                            Civil Lawyer
                            </option>
                        </select>
           </div>
            <AvaiableLawyer></AvaiableLawyer>
            <div className="bg-[#212222] w-1/2 flex flex-col justify-center sm:mt-3  sm:w-3/4 sm:p-5 h-20 shrink-0 items-center rounded-[35px]">
                <div className="text-6xl lg:text-4xl md:text-3xl sm:text-lg  font-['Poppins'] font-semibold leading-[32px] text-white">
                    TAKE APPOINTMENT
                </div>
            </div>
            <div className="text-3xl mt-10 font-['Poppins'] font-semibold leading-[32px] text-black">
                Online Now
            </div>
            <AvaiableLawyer ></AvaiableLawyer>
            <div className=" bg-white rounded-lg">
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}

                    className="p-5"
                />
            </div>
            <h1 className="text-lg font-bold mt-5 text-black">Avaiable Lawyer on {format(selected, 'PP')}.</h1>
            <AvaiableLawyer></AvaiableLawyer>

           
        </div>
    );
};

export default Appointment;