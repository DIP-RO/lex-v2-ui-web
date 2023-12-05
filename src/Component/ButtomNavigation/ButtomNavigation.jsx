import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import Loading from "../Loading/Loading";

const ButtomNavigation = () => {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" ,link:"/"},
    { name: "Appointment", icon: "business-outline", dis: "translate-x-16" ,link:"/appointment" },
    { name: "Chat", icon: "chatbubble-outline", dis: "translate-x-32" ,link:"/lex-Ai" },
    { name: "Blog", icon: "book-outline", dis: "translate-x-48" ,link:"/blog" },
    { name: "Profile", icon: "person-outline", dis: "translate-x-64",link:"/dashboard" },
  ];

  const [active, setActive] = useState(2);
  
  const { logOut } = useContext(AuthContext);
  
<Loading/>
  return (
    <div className="fixed bottom-0 ml-2 z-10 xl:hidden lg:hidden md:hidden max-w-sm bg-white max-h-[4.4rem] rounded-t-xl">
      <div className="px-6">
        <ul className="flex relative">
          <span
            className={`bg-[#1d344a] mb-5 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
          >
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
            ></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
            ></span>
          </span>
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <a
                className="flex flex-col text-center pt-6"
                onClick={() => {
                  setActive(i);
                }}
              >
                <span
                  className={`text-xl cursor-pointer duration-500 ${
                    i === active && "-mt-6 text-white"
                  }`}
                >
                  <Link to={menu.link}><ion-icon name={menu.icon}></ion-icon></Link>
                </span>
                <span
                  className={` ${
                    active === i
                      ? "translate-y-4 duration-700 opacity-100"
                      : "opacity-0 translate-y-10"
                  } `}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      
    </div>
  );
};

export default ButtomNavigation;
