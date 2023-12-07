import { Link } from "react-router-dom";
import Loading from "../../Component/Loading/Loading";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import useAdmin from "../../Hook/UseAdmin";
import useUser from "../../Hook/useUser";

const DashboardHome = () => {

    const { logOut, user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isUser] = useUser(user?.email);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://attractive-ruby-cow.cyclic.app/api/v1/users/users/email/${user.email}`)
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching law data:", error));
    }, [user.email]);
    const data = [
        {
            id: 1,
            name: "Ask Your Queries",
            button: "ASK NOW",
            image: "https://file.rendit.io/n/xzPvYK0ASBiT4vCI4R94.png",
            link:"/Lex-Ai"
        },
        {
            id: 2,
            name: "Find Lawyer",
            button: "FIND NOW",
            image: "https://file.rendit.io/n/N1st8uHG6EHq8cG7c73L.png",
            link:"/appointment"
        },
        {
            id: 3,
            name: "Get Drafted",
            button: "DRAFT NOW",
            image: "https://file.rendit.io/n/qhpGQ3teD0v7NZXT5BMR.png",
            link:"/blog"
        },
        {
            id: 4,
            name: "Know Your Rights",
            button: "KNOW NOW",
            image: "https://file.rendit.io/n/daL28ImZoXmOchrX9fzz.png",
            link:"/casestudy"
        },

    ];

    <Loading />
    return (
        <div className="flex flex-col  items-center  ">
            <div className="lg:text-3xl mt-10 sm:text-center sm:text-xl font-['Raleway'] leading-[38px] text-white w-full my-3 lg:ml-5">
                Hello {users.firstName} {users.lastName} Let&apos;s get started.
            </div>
            <div className=" flex-1 justify-center bg-[#3b362c85]   p-20 items-center m-20">
                <div className="flex gap-20">

                    <div className="avatar">
                        <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={users.image} alt='' />
                        </div>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <h1 className="text-xl font-bold text-center mt-2 text-white">{users.firstName} {users.lastName}</h1>
                        <h3 className="text-xl font-bold  text-white">{users.phoneNumber}</h3>
                        <h3 className="text-xl font-bold  text-white">{users.address}</h3>
                    </div>

                </div>
                <div className="flex gap-5 mt-5">
                <Link to="/dashboard/comming"><button className="btn text-white w-full my-2 bg-[#b69d7485]   hover:bg-[#b69d74] border-0"><img
                                src="https://file.rendit.io/n/zRWaGOKN4sY4Ueb6Qfaw.svg"
                                id="IconRoot"
                                className="w-4"
                            /> Reviews</button></Link>
                            <Link to="/dashboard/bookmark"><button className="btn text-white w-full my-2 bg-[#b69d7485]   hover:bg-[#b69d74] border-0"><img
                                src="https://file.rendit.io/n/KbbQnmyRu4YNEpCvYYec.svg"
                                id="IconRoot"
                                className="w-4"
                            /> Bookmarks</button></Link>
                            <Link to="/dashboard/message"><button className="btn text-white w-full my-2 bg-[#b69d7485]   hover:bg-[#b69d74] border-0"><img
                                src="https://file.rendit.io/n/jrh2bdbn2ThJZbvydcGZ.svg"
                                id="IconRoot"
                                className="w-4"
                            /> Messages</button></Link>

                            <Link to="/dashboard/booking"><button className="btn text-left text-white w-full my-2 mb-2 bg-[#b69d7485]   hover:bg-[#b69d74] border-0"><img
                                src="https://file.rendit.io/n/0YB4KAOY7CqXouZklsN3.svg"
                                id="IconRoot"
                                className="w-4 "
                            />  My Appointment</button></Link>
                </div>
            </div>
            <div className="avatar mt-5 lg:hidden md:hidden xl:hidden">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/hFKnrDC/24-23-08.jpg" />
                </div>
            </div>
            

            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 lg:gap-6 lg:m-10 md:gap-6 md:m-5 sm:gap-5 sm:hidden">
                {data.map((item) => (
                    <div key={item.id} className="flex sm:p-5 w-full h-fit lg:m-5 bg-[#b69d7485]   hover:bg-[#b69d74] rounded-lg sm:flex-col-reverse justify-center items-center">
                        <div className="w-1/2 flex justify-center items-center">
                            <div>
                                <div className="text-lg font-['Raleway'] font-bold sm:text-base leading-[20.9px] text-white w-full">
                                    {item.name}
                                </div>
                                <Link to={item.link}>
                                    <button className="text-center w-24 h-10 sm:h-8 sm:w-20 mt-3 btn text-xs font-['Raleway'] leading-[12px] bg-white text-[#da1e37]">
                                        {item.button}
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-center items-center sm:hidden">
                            <img src={item.image} className="self-start lg:w-[150px] sm:w-24 py-10 sm:py-3" />
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex lg:flex-wrap bg-gray-900 min-h-screen md:flex-row md:hidden lg:hidden xl:hidden'>
                <div className='bg-gray-900 w-full   min-h-screen '>
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


                    <div className="text-xs ml-32 font-['Raleway'] font-light tracking-[1] leading-[27px] uppercase text-[#999999] ">
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

            </div>
        </div>
    );
};

export default DashboardHome;