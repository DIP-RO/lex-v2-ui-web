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
      "description": "Our Attorneys are exceptionally competent....We always offer the top attorneys to resolve...",
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
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <div className="flex justify-center mb-4">
                <span className="text-4xl">{area.icon}</span>
              </div>
              <div>
                <h2 className="text-xl text-center font-semibold mb-4">{area.name}</h2>
                <p className="text-gray-700">{area.description}</p>
              </div>
              <div className="flex justify-center">
                <button className="btn bg-[#1d344a] lg:mt-2 md:mt-8 hover:bg-[#1d344a] text-white my-10">
                  <Link to="/allService">Read MORE</Link>
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
