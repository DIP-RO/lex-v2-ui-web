import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import axios from 'axios';
import Loading from "../Loading/Loading";

const Navbar = () => {

    const { t, i18n } = useTranslation()
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [record, setRecord] = useState([]);

    const onChangeLang = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    useEffect(() => {
        for (let index = 0; index < document.getElementsByClassName('lang').length; index++) {
            const element = document.getElementsByClassName('lang')[index];
            if (element.value === i18n.language) {
                element.setAttribute("selected", "true")
            }
        }
    })


    useEffect(() => {
        axios.get('https://attractive-ruby-cow.cyclic.app/api/v1/lawData/lawData')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const filter = (e) => {

        const keyword = e.target.value;
        const Result = data.filter(f => f.Problem.includes(keyword))  
        setRecord(Result.slice(0, 5));

    };
<Loading/>
    return (
        <div className="navbar sticky z-10 top-0 bg-[#1d344a] sm:hidden  flex justify-between border-b-2 border-black ">
            <div className="navbar-start  ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52">
                        <li className='text-white '><Link to="/">{t("home")}</Link></li>
                        <li className='text-white '><Link to="/appointment">Appointment</Link></li>
                        <li className='text-white '><Link to="/blog">Blog</Link></li>
                        <li className='text-white '><Link to="/about">About</Link></li>
                        <li className='text-white '><Link to="/contact">Contact</Link></li>
                        <li className='text-white '><Link to="/app">App</Link></li>
                        <>
                            <li>
                                <Link to="/dashboard/profile"><div className="w-10 rounded-full ">
                                    <img alt='' src="https://i.ibb.co/tKB8PxV/user-circle-1.png" />
                                </div></Link>
                            </li>
                        </>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost">
                    <figure ><img className='h-[95px] w-[131px] mt-[-24px]' src="https://i.ibb.co/7QmYQ3C/image.png" alt="logo" /></figure>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex cursor-pointer">
                <ul className="menu menu-horizontal p-0">
                    <li className='text-white mt-5 normal-case'><Link to="/">{t("Home.Navbar.home")}</Link></li>
                    <li className='text-white mt-5'><Link to="/appointment">{t("Home.Navbar.appointment")}</Link></li>
                    <li className='text-white mt-5 '><Link to="/blog">{t("Home.Navbar.blog")}</Link></li>
                    <li className='text-white mt-5 '><Link to="/about">{t("Home.Navbar.about")}</Link></li>
                    <li className='text-white mt-5 '><Link to="/contact">{t("Home.Navbar.contact")}</Link></li>
                    <li className='text-white mt-5 mr-14'><Link to="/app">App</Link></li>
                    <li>
                        <select className="bg-white mt-2 h-12 hover:bg-white rounded-full" onChange={onChangeLang}>
                            <option value="en" className="lang">
                                EN
                            </option>
                            <option value="বাংলা" className="lang">
                                বাংলা
                            </option>
                        </select>
                    </li>
                    <li className=" "><div id="RootRoot" className="flex flex-row justify-between w-full items-start ">
                        <div className="flex flex-row  items-start">
                            <div className="dropdown dropdown-hover">
                                <input
                                    tabIndex={0}
                                    className="bg-white flex flex-col justify-center pl-4 w-64 shrink-0 h-12 items-start rounded-[25px]"
                                    placeholder={t("Home.Navbar.search")}
                                    onChange={filter}
                                />
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-b-box w-52 max-w-fit"
                                >
                                    {record.map((item) => (
                                        <Link key={item._id} to={`/law-details/${item._id}`}>
                                            <li className="w-52 overflow-hidden">{item.Query}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                          
                        </div>
                    </div>
                    </li>
                    {user?.uid ?
                        <li>
                            <Link to="/dashboard">
                                <div className="w-24 rounded-full ">
                                    <img alt='' src="https://i.ibb.co/tKB8PxV/user-circle-1.png" />
                                </div>
                            </Link>
                        </li>
                        : <li className='text-white mt-5'><Link to="/login">Login</Link></li>

                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;