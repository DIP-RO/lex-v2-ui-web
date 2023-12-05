import { Link, Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import ButtomNavigation from "../Component/ButtomNavigation/ButtomNavigation";
import Loading from "../Component/Loading/Loading";
import useAdmin from "../Hook/UseAdmin";
import useUser from "../Hook/useUser";

const DashBoard = () => {
    const { logOut, user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isUser] = useUser(user?.email);



    <Loading />
    return (
        <div className="max-w-full sm:max-w-sm">
            <Navbar></Navbar>
            <div className='flex lg:flex-wrap bg-gray-900 min-h-screen md:flex-row'>
                <div className='bg-gray-900 w-1/4  border-r-2 border-black min-h-screen sm:hidden'>
                    <h1 className="  flex justify-center h-10 items-center gap-3 w-full my-5 bg-[#DA1E37] hover:bg-[#DA1E37] border-0 border-spacing-0 rounded-l-3xl text-white rounded-r-none ml-5"> <img
                        src="https://file.rendit.io/n/DMLiYpHTZnxxLEt4ZZbT.svg"
                        id="Icon"
                        className=" w-4 shrink-0"
                    />DashBoard</h1>

                    {
                        isAdmin &&
                        <>
                            <Link to="/dashboard/addLawyer"><button className="btn text-white w-full my-2 bg-gray-900 hover:bg-gray-900 border-0"><img
                                src="https://file.rendit.io/n/jrh2bdbn2ThJZbvydcGZ.svg"
                                id="IconRoot"
                                className="w-4"
                            /> Add Lawyer</button></Link>
                            <Link to="/dashboard/addService"><button className="btn text-white w-full my-2 bg-gray-900 hover:bg-gray-900 border-0"><img
                                src="https://file.rendit.io/n/KbbQnmyRu4YNEpCvYYec.svg"
                                id="IconRoot"
                                className="w-4"
                            /> Add Service</button></Link>
                            <Link to="/dashboard/allUser"><button className="btn text-white w-full my-2 bg-gray-900 hover:bg-gray-900 border-0"><img
                                src="https://file.rendit.io/n/KbbQnmyRu4YNEpCvYYec.svg"
                                id="IconRoot"
                                className="w-4"
                            /> All User</button></Link>
                            <Link to="/dashboard/allTestimonial"><button className="btn text-white w-full my-2 bg-gray-900 hover:bg-gray-900 border-0"><img
                                src="https://file.rendit.io/n/KbbQnmyRu4YNEpCvYYec.svg"
                                id="IconRoot"
                                className="w-4"
                            /> All Testimonial</button></Link>
                        </>
                    }

                    {
                        isUser &&
                        <>
                            <Link to="/dashboard/review"><button className="btn text-white w-full my-2 bg-gray-900 hover:bg-gray-900 border-0"><img
                                src="https://file.rendit.io/n/zRWaGOKN4sY4Ueb6Qfaw.svg"
                                id="IconRoot"
                                className="w-4"
                            /> Reviews</button></Link>
                            <Link to="/dashboard/bookmark"><button className="btn text-white w-full my-2 bg-gray-900 hover:bg-gray-900 border-0"><img
                                src="https://file.rendit.io/n/KbbQnmyRu4YNEpCvYYec.svg"
                                id="IconRoot"
                                className="w-4"
                            /> Bookmarks</button></Link>
                            <Link to="/dashboard/message"><button className="btn text-white w-full my-2 bg-gray-900 hover:bg-gray-900 border-0"><img
                                src="https://file.rendit.io/n/jrh2bdbn2ThJZbvydcGZ.svg"
                                id="IconRoot"
                                className="w-4"
                            /> Messages</button></Link>

                            <Link to="/dashboard/booking"><button className="btn text-left text-white w-full mt-5 mb-2 bg-gray-900 hover:bg-gray-900 border-0"><img
                                src="https://file.rendit.io/n/0YB4KAOY7CqXouZklsN3.svg"
                                id="IconRoot"
                                className="w-4 "
                            />  My Appointment</button></Link>
                        </>
                    }




                    <Link to="/dashboard/allAppointment"><button className="btn text-left text-white w-full mt-5 mb-2 bg-gray-900 hover:bg-gray-900 border-0"><img
                        src="https://file.rendit.io/n/0YB4KAOY7CqXouZklsN3.svg"
                        id="IconRoot"
                        className="w-4 "
                    />  All Appointment</button></Link>




                    <Link to="/dashboard/addBlog"><button className="btn text-white w-full my-2 bg-gray-900 hover:bg-gray-900 border-0"><img
                        src="https://file.rendit.io/n/KbbQnmyRu4YNEpCvYYec.svg"
                        id="IconRoot"
                        className="w-4"
                    /> Add Blog</button></Link>


                    <div className="text-xs ml-10 font-['Raleway'] font-light tracking-[1] leading-[27px] uppercase text-[#999999] ">
                        Account
                    </div>
                    <Link to="/dashboard/profile"><button className="btn text-white w-full my-2 bg-gray-900 hover:bg-gray-900 border-0"><img
                        src="https://file.rendit.io/n/HmEYbnl7OL8xoIj41mEx.svg"
                        id="IconRoot"
                        className="w-4"
                    /> My Profile</button></Link>
                    <button className="btn text-white w-full my-2 bg-gray-900 hover:bg-gray-900 border-0" onClick={logOut}><img
                        src="https://file.rendit.io/n/OK1UKF1nQhsmTRonUJkv.svg"
                        id="IconRoot"
                        className="w-4"
                    /> Logout</button>
                </div>
                <div className='bg-gray-900 lg:w-3/4 sm:w-full min-h-screen md:w-3/4'>
                    <Outlet></Outlet>
                </div>

            </div>
            <ButtomNavigation></ButtomNavigation>
            <Footer></Footer>
        </div>
    );
};

export default DashBoard;