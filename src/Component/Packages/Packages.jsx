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
    {
      id: 4,
      title: "Super Premium",
      images: "https://i.ibb.co/TBR75Hw/image.png",
    },
  ];

  return (
    <div className="flex flex-col w-full justify-center items-center px-4 lg:px-0">
      <h1 className="text-4xl font-bold text-center mb-4 mt-10">
        PACKAGES
      </h1>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-5 w-full max-w-7xl">
        {packages.map((data) => (
          <Link key={data.id} to="coming-soon">
            <div className="card bg-[#212222] hover:bg-[#b69d74] shadow-xl">
              <figure className="pt-10">
                <img
                  src={data.images}
                  alt={data.title}
                  className="rounded-xl "
                />
              </figure>
              <div className="card-body items-center text-center p-4 lg:p-6">
                <h1 className="card-title text-white">{data.title}</h1>
                <p className="text-white">If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn bg-transparent hover:bg-transparent text-white my-5">
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
