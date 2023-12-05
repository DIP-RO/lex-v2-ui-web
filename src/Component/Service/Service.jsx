import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const Service = () => {
    const service = [
        {
            id: 1,
            img: "https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/posts/11695/land-law.jpg",
            title: "Land Law",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking.",
        },
        {
            id: 2,
            img: "https://blog.ipleaders.in/wp-content/uploads/2022/06/Civil-law-1.jpg",
            title: "Civil Law",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking.",
        },
        {
            id: 3,
            img: "https://ndcriminal.com/wp-content/uploads/2020/11/Criminal-Defense-Attorney-Fargo-750x465.jpg",
            title: "Criminal Law",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking.",
        },
        // {
        //     id: 4,
        //     img: "https://dailyasianage.com/library/1625955780_9.jpg",
        //     title: "Cyber Crime",
        //     description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking.",
        // },
        // {
        //     id: 5,
        //     img: "https://contiguglia.com/wp-content/uploads/2020/05/AdobeStock_226728389-1080x675.jpeg",
        //     title: "Business Law",
        //     description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking.",
        // },
        // {
        //     id: 6,
        //     img: "https://www.wotitzkylaw.com/wp-content/uploads/2021/07/28907376_m.jpg",
        //     title: "Real Estate Law",
        //     description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking.",
        // },
    ];
<Loading/>
    return (
        <div className="sm:max-w-sm sm:mx-2 sm:mt-3">
            <h1 className="lg:mt-10 text-2xl lg:text-5xl md:text-5xl  font-bold text-white text-center md:mt-10  sm:ml-10 sm:text-center lg:text-center mb-5 md:mb-0">Our Services:</h1>
            <div className="lg:my-10 grid lg:grid-cols-3 md:pl-14  md:mt-10 md:gap-5 md:w-full md:grid-cols-2 grid-cols-2 lg:gap-5 sm:gap-2">
                {service.map((item) => (
                    <div key={item.id} className="">
                        <div className="flex relative">
                            <div className="absolute card bg-[#1d344a] lg:w-96 lg:m-10 border-dashed border-2 lg:h-[280px] md:w-72 md:h-72 sm:h-52 sm:w-full border-white hover:border-solid ">
                                <figure className="px-10 pt-10">
                                    <img src={item.img} alt={item.title} className="rounded-full lg:w-32 lg:h-32 md:w-20 md:h-20 sm:w-16 sm:h-16" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-white">{item.title}</h2>
                                    <p className="text-white hover:disabled: sm:hidden">{item.description}</p>
                                </div>
                            </div>
                            <div className="relative w-96 z-0 lg:ml-10 lg:mt-10 md:mt-0 sm:w-full lg:h-[280px] md:h-72 sm:h-52 border-2 border-black bg-gray-900 opacity-0 hover:opacity-100 rounded-2xl flex justify-center items-center md:w-72">
                                <Link to="/appointment">
                                <button className="animate-bounce btn bg-[#1d344a] hover:bg-[#1d344a] text-white">Consult Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center ">
            <button className="btn bg-[#1d344a] lg:mt-2 md:mt-8 hover:bg-[#1d344a]  text-white my-10">
                <Link to="/allService">SEE MORE</Link>
            </button>
            </div>
        </div>
    );
};

export default Service;
