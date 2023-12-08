import Loading from "../../../Component/Loading/Loading";
import { CiCalendarDate } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const FindBlog = () => {
    <Loading/>
    const blog = [
        {
          id: 1,
          name: 'stella larson',
          message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
          image: "https://i.ibb.co/NV7swZc/2.jpg",
        },
        {
          id: 2,
          name: 'Olga jhonso',
          message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
          image: "https://i.ibb.co/Jv4VL7t/1.jpg",
        },
        {
          id: 3,
          name: 'Paul Smith',
          message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
          image: "https://i.ibb.co/wKRbSx4/3.jpg",
        },
      ]



    return (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-8 md:gap-5 mt-5 mx-10">
            {blog.map((blog) => (
                 <div key={blog.id} className="bg-gray-100 flex items-center justify-center hover:-mt-10">
                 <div className="max-w-md bg-white rounded overflow-hidden shadow-lg">
                     <img
                         className="w-full h-64 object-cover"
                         src={blog.image}
                         alt="Card Image"
                     />
                     <div className="flex justify-center">
                         <button
                             className="text-white px-10 py-2 rounded-full"
                             style={{ backgroundColor: '#b69d74', marginTop: '-20px' }}
                         >
                             Rights Case
                         </button>
                     </div>
 
                     <div className="px-6 py-4">
                         <div className="font-bold text-xl mb-2">
                             Justice May For You If You Are Innocent
                         </div>
                         <div className="flex gap-5">
                             <p className="text-gray-700 text-base mb-2 flex items-center justify-center gap-2">
                             <CiCalendarDate /> December 5, 2023
                             </p>
                             <p className="text-gray-700 text-base mb-2 flex items-center justify-center gap-2">
                             <FaUser /> John Doe
                             </p>
                         </div>
 
                         <p className="text-gray-700 text-base">
                             Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         </p>
                         <Link to='/blog-details/:id'>
                         <button className="text-[#b69d74] font-medium mt-4">
                             Read More<i className="fa-solid fa-angle-right"></i>
                         </button>
                         </Link>
                     </div>
                 </div>
             </div>
            ))}
        </div>
    );
};

export default FindBlog;