import Case from "../../Component/Case/Case";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Location from "../../Component/Location/Location";
const CaseStudyDetails = () => {
    const Data = {
        title: {
          label: 'Case Studies Details',
          subLabel: null,
    
        },
        links: [
          { label: null, icon: null },
          { label: 'Case Studies Details', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
      };
    return (
        <div>
            <Location {...Data} />
            <div className="card card-side bg-base-100 rounded-none shadow-xl m-20">
                <figure className="w-1/3"><img src="https://i.ibb.co/RgBpQN3/1.jpg" alt="Movie" /></figure>
                <div className="card-body w-2/3">
                    <h2 className="card-title">One problem of criminal activities is accounting for the proceeds without raising the suspicion of law enforcement agencies</h2>
                    <p className="mt-3">Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    <h1 className="mt-3"><span className="font-bold">Retribution –</span> Criminals ought to Be Punished in some way.</h1>
                    <h1><span className="font-bold">Deterrence –</span> Individual deterrence is aimed toward the specific.</h1>
                    <h1><span className="font-bold">Incapacitation –</span> Designed simply to keep criminals away from society.</h1>
                    <h1><span className="font-bold">Rehabilitation –</span> Aims at transforming an offender.
                    </h1>
                    <p className="mt-3">Risus commodo viverra maecenas accumsan lacus vel facilisis. . Quis ipsum suspendisse ultrices gravida. accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                </div>
            </div>

            <div className="card lg:card-side bg-[#212222] shadow-xl rounded-none my-10">
                <div className="card-body w-1/2 py-10">
                    <h2 className="card-title text-white text-2xl">Our study process for this case</h2>
                    <div tabIndex={0} className="collapse collapse-arrow mt-5 border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            Challenge
                        </div>
                        <div className="collapse-content">
                            <p className="font-bold">One problem of criminal activities is accounting for the proceeds without raising the suspicion of law enforcement agencies</p>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            Solution
                        </div>
                        <div className="collapse-content">
                            <p className="font-bold">Now a days criminality is at the top amongst college and university going students.</p>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                        Result
                        </div>
                        <div className="collapse-content">
                        <p className="font-bold">A criminal case, in common law jurisdictions, begins when a person suspected of a crime.</p>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 max-h-screen py-10">
                    <div className=" border-8 border-[#b69d74] border-spacing-56 w-2/3 flex justify-center">
                        <img src="https://i.ibb.co/HTLdkVT/10.png" className="h-[500px]" alt="Album" />
                    </div>
                </div>


            </div>
            <div className="  flex flex-col justify-center sm:mt-3  sm:w-3/4 sm:p-5 h-20 shrink-0 items-center rounded-[35px]">
                <div className="text-6xl lg:text-4xl md:text-3xl sm:text-lg  font-['Poppins'] font-semibold leading-[32px] text-black">
                Related Cases
                </div>
            </div>
            
            <Case></Case>

        </div>
    );
};

export default CaseStudyDetails;