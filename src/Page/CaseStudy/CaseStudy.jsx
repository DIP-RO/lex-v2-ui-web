import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Location from "../../Component/Location/Location";

const CaseStudy = () => {
    const data = [
        {
            bg: "https://i.ibb.co/RgBpQN3/1.jpg",
            name: "Finance",
            tittle: "Money Loundering",
            date: "12 Feb d2021",
        },
        {
            bg: "https://i.ibb.co/g4Ys9L6/4.jpg",
            name: "Cyber",
            tittle: "Cyber Crime Case",
            date: "13 Feb d2021",
        },
        {
            bg: "https://i.ibb.co/LrhDfk1/5.jpg",
            name: "Hack",
            tittle: "Bank Hack Case",
            date: "14 Feb d2021",
        },
    ]
    const LocData = {
        title: {
          label: 'Case Studies',
          subLabel: null,
    
        },
        links: [
          { label: null, icon: null },
          { label: 'Case Studies', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
      };

    return (
        <div>
            <Location {...LocData} />
            <div className="grid grid-cols-3">
                {
                    data.map((item, index) => (
                        <div key={index} className="card hero w-96 bg-base-100 shadow-xl rounded-none my-10 mx-auto h-96" style={{ backgroundImage: `url(${item.bg})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="card-body">
                                <h2 className="card-title">

                                    <div className=""></div>
                                </h2>
                                <p></p>
                                <div className="card-actions justify-start ">
                                    <div>
                                        <h1 className="text-white">{item.name}</h1>
                                        <h1 className="text-white mt-5 font-bold">{item.tittle}</h1>
                                        <h1 className="text-white mb-10">{item.date}</h1>
                                        <button className="btn btn-sm  lg:mt-2 md:mt-8 bg-transparent hover:bg-transparent  text-white mt-10">
                                            <Link to="/casestudy-details/:id">Read MORE</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CaseStudy;