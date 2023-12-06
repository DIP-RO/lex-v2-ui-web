import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


const Location = ({ title, links }) => {
    return (

        <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/jV7kFz1/image.png)' }}>
            <div className="hero-overlay bg-opacity-90 max-h-96"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full">
                    <div>
                        <div className="flex-col ml-24 mt-28 mb-10 flex gap-10 ">
                            <div className="">
                                <h1 className="text-5xl font-bold">
                                    <span className="text-white mr-2">{title.label}</span>{title.subLabel}
                                </h1>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Link to='/' className="flex gap-2 items-center">
                                    <FaHome className=" text-2xl" />
                                    <h1 className="text-2xl text-white font-bold">Home</h1>
                                </Link>
                                {links.map((link, index) => (
                                    <div key={index} className="flex items-center gap-2">

                                        {link.icon && <link.icon className=" text-2xl"/>}
                                        <h1 className='text-2xl font-bold text-white'>{link.label}</h1>
                        </div>
                    ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div >

    );
};

export default Location;