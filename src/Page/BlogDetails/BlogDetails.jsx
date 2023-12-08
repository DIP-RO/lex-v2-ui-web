import { CiCalendarDate } from "react-icons/ci";
import { FaSearch, FaUser } from "react-icons/fa";
import FindBlog from "../Blog/FindBlog/FindBlog";
import Location from "../../Component/Location/Location";
import { RiArrowRightDoubleFill } from "react-icons/ri";
const BlogDetails = () => {
    const Data = {
        title: {
          label: 'Blog Details',
          subLabel: null,
    
        },
        links: [
          { label: null, icon: null },
          { label: 'Blog Details', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
      };
    return (
        <div className="mb-5">
            <Location {...Data} />
            <div className="flex justify-center gap-5 mt-5">
            <div className="w-6/12">
                <div className="  bg-base-100 shadow-xl flex flex-col gap-5">
                    <figure><img src="https://i.ibb.co/NV7swZc/2.jpg" className="w-full max-h-screen" alt="Album" /></figure>
                    <div className=" px-4">
                        <h2 className=" text-2xl font-bold mt-5 ">One problem of criminal activities is accounting for the proceeds without raising the suspicion of law enforcement agencies</h2>

                        <div className="flex gap-5 mt-5">
                            <p className="text-gray-700 text-base mb-2 flex items-center justify-center gap-2">
                                <CiCalendarDate /> December 5, 2023
                            </p>
                            <p className="text-gray-700 text-base mb-2 flex items-center justify-center gap-2">
                                <FaUser /> John Doe
                            </p>
                        </div>
                        <h2 className=" text-xl  my-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.

                            Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always.</h2>
                    </div>
                </div>
            </div>
            <div className="4/12">
                <div className="flex mt-5">
                    <input className="w-3/4 h-10   px-5 border-black border-2" type="url" placeholder="Search" />
                    <FaSearch className="text-white bg-black h-10 w-1/4 p-2" />
                </div>
                <div>
                    <h2 className=" text-2xl font-bold mt-10">Recent Blogs</h2>
                    <div className=" bg-base-100 shadow-xl flex gap-5 mt-5">
                        <figure><img src="https://i.ibb.co/wKRbSx4/3.jpg" alt="Movie"  className="h-40 w-40"/></figure>
                        <div className="">
                            <h2 className=" text-lg ">There are many variations of passages.</h2>
                            <div className="flex gap-5 mt-5">
                            <p className="text-gray-700 text-base mb-2 flex items-center justify-center gap-2">
                                <FaUser /> admin
                            </p>
                            <p className="text-gray-700 text-base mb-2 flex items-center justify-center gap-2">
                                <CiCalendarDate /> December 5, 2023
                            </p>
                           
                        </div>
                        </div>
                    </div>
                    <div className=" bg-base-100 shadow-xl flex gap-5 mt-5">
                        <figure><img src="https://i.ibb.co/Zh08zxt/4.jpg" alt="Movie"  className="h-40 w-40"/></figure>
                        <div className="">
                            <h2 className=" text-lg ">There are many variations of passages.</h2>
                            <div className="flex gap-5 mt-5">
                            <p className="text-gray-700 text-base mb-2 flex items-center justify-center gap-2">
                                <FaUser /> admin
                            </p>
                            <p className="text-gray-700 text-base mb-2 flex items-center justify-center gap-2">
                                <CiCalendarDate /> December 5, 2023
                            </p>
                           
                        </div>
                        </div>
                    </div>
                    <div className=" bg-base-100 shadow-xl flex gap-5 mt-5">
                        <figure><img src="https://i.ibb.co/t8vCgXr/5.jpg" alt="Movie"  className="h-40 w-40"/></figure>
                        <div className="">
                            <h2 className=" text-lg ">There are many variations of passages.</h2>
                            <div className="flex gap-5 mt-5">
                            <p className="text-gray-700 text-base mb-2 flex items-center justify-center gap-2">
                                <FaUser /> admin
                            </p>
                            <p className="text-gray-700 text-base mb-2 flex items-center justify-center gap-2">
                                <CiCalendarDate /> December 5, 2023
                            </p>
                           
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="  flex flex-col justify-center sm:mt-3  sm:w-3/4 sm:p-5 h-20 shrink-0 items-center rounded-[35px]">
                <div className="text-6xl lg:text-4xl md:text-3xl sm:text-lg  font-['Poppins'] font-semibold leading-[32px] text-black">
                Related Blogs
                </div>
            </div>
        <FindBlog></FindBlog>
        </div>
    );
};

export default BlogDetails;