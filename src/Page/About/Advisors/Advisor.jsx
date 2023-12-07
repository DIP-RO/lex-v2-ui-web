const Advisor = () => {
    const ourteam = [
      {
        id: 1,
        name: "Dr. Md. Sabur Khan",
        designation: "Founder & Chairman",
        department: "Daffodil Family",
        role: "Chief Advisor",
        image: "https://i.ibb.co/DwtC6JZ/img-1.jpg",
      },
      {
        id: 2,
        name: "Prof. Dr. Syed Akhter Hossain",
        designation: "Dean & Professor of CSE",
        department: "Department of Computer Science and Engineering(FSIT)",
        role: "Advisor",
        image: "https://i.ibb.co/yYg27GM/img-3.jpg",
      },
      {
        id: 3,
        name: "Dr. Sheak Rashed Haider Noori",
        designation: "Professor & Head (In-Charge)",
        department: "Department of Computer Science and Engineering(FSIT)",
        role: "Advisor",
        image: "https://i.ibb.co/vHzbCpD/img-2.jpg",
      },
    ];
    const TeamMemberCard = ({ team }) => (
        <div className="card w-96 h-full  shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#b69d74]">
          <figure className="px-10 pt-10">
            <img src={team.image} alt={team.name} className="rounded-xl h-48" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-bold">{team.name}</h2>
            <p className="text-black text-lg font-semibold">{team.role}</p>
            <p className="text-black text-lg font-semibold">{team.designation}</p>
            <p className="text-black text-lg font-semibold">{team.department}</p>
        
          </div>
        </div>
      );
    return (
        <div className="flex justify-center bg-[#f5f1f1] items-center flex-col my-10">
        <h1 className="text-black bg-[#f5f1f1] text-3xl font-bold  p-3 rounded-2xl">Meet Our Advisor</h1>
        <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {ourteam.map((team) => (
            <div className="card" key={team.id}>
              <TeamMemberCard team={team} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Advisor;
  