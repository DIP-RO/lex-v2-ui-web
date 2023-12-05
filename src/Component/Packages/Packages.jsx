import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const Packages = () => {
  const packages = [
    {
      id: 1,
      title: "Regular",
      images: "https://i.ibb.co/KqRC5B0/image.png",
    },
    {
      id: 2,
      title: "Super",
      images: "https://i.ibb.co/tCxFT2q/image.png",
    },
    {
      id: 3,
      title: "Premium",
      images: "https://i.ibb.co/TBR75Hw/image.png",
    },
  ];
  <Loading />;
  return (
    <div className="flex flex-col w-full ">
      <h1 className="text-center text-5xl font-['Open_Sans'] font-bold text-white mt-10">
        PACKAGES
      </h1>
      <div className="grid  lg:ml-10 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 md:gap-5 grid-cols-3 lg:gap-6 sm:gap-2 mt-10 lg:mx-10 p-2">
        {packages.map((data) => (
          <Link key={data.id} to="coming-soon">
            <div className="card w-96 bg-[#1d344a] shadow-xl">
              <figure className=" pt-10">
                <img
                  src={data.images}
                  alt={data.title}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h1 className="card-title text-white">{data.title}</h1>
                <p className="text-white">If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn bg-[#1d344a] lg:mt-2 md:mt-8 hover:bg-[#1d344a]  text-white my-10">
                    <Link to="/coming-soon">View Details</Link>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Packages;
