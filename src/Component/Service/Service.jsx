import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { FaBalanceScale, FaUserFriends, FaBriefcase, FaGraduationCap, FaGavel, FaShieldAlt } from 'react-icons/fa';
const Service = () => {
  const practiceAreas = [
    {
      "id": 1,
      "name": "Civil Law",
      "description": "Our attorneys are highly talented...",
      "icon": <FaBalanceScale />
    },
    {
      "id": 2,
      "name": "Family Law",
      "description": "Attorney of Our Squad is amazingly experienced...",
      "icon": <FaUserFriends />
    },
    {
      "id": 3,
      "name": "Business Law",
      "description": "You don't have to think about the business law...",
      "icon": <FaBriefcase />
    },
    {
      "id": 4,
      "name": "Education Law",
      "description": "Our Attorneys are exceptionally competent....",
      "icon": <FaGraduationCap />
    },
    {
      "id": 5,
      "name": "Criminal Law",
      "description": "We always offer the top attorneys to resolve...",
      "icon": <FaGavel />
    },
    {
      "id": 6,
      "name": "Cyber Law",
      "description": "Lyzo also provides cyber attorneys who are...",
      "icon": <FaShieldAlt />
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Our Legal Practice Areas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas?.map((area) => (
            <div
              key={area.id}
              className="bg-[#212222] hover:-mt-5 hover:bg-[#b69d74] rounded-lg shadow-md p-6 flex flex-col justify-between"
              style={{ backgroundImage: 'url(https://i.ibb.co/bFXh66d/7.png)' }}>
              <div className="flex justify-center mb-4">
                <span className="text-4xl text-white">{area.icon}</span>
              </div>
              <div>
                <h2 className="text-xl text-center font-semibold mb-4 text-white">{area.name}</h2>
                <p className=" text-white">{area.description}</p>
              </div>
              <div className="flex justify-center mt-5">
                <button className="btn  lg:mt-2 md:mt-8 bg-transparent  text-white my-10">
                  <Link to="/servicedetails/:id">Read MORE</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
