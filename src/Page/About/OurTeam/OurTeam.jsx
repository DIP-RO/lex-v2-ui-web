const OurTeam = () => {

    const ourteam = [
        {
            id: 1,
            name: 'SHAHRIAR HOSSAIN',
            role: 'Co Founder',
            designation: "UTA",
            image: "https://i.ibb.co/7tsH99q/1668093775398asd.jpg",
        },
        {
            id: 2,
            name: 'RIYAD ALI MOLLIK',
            role: 'Co Founder',
            designation: "UTA",
            image: "https://i.ibb.co/hFKnrDC/24-23-08.jpg",
        },
        { id: 3,
            name: 'DIPRO PAUL',
            role: 'Co Founder',
            designation: "UTA",
            image: "https://i.ibb.co/sgdrY3K/FB-IMG-1701979421983.jpg",
          
        },
        {
            id: 4,
            name: 'UMMAY MAHJABEEN',
            role: 'Co Founder',
            designation: "UTA",
            image: "https://i.ibb.co/vBfTNxx/photo-2023-04-30-17-25-19.jpg",
        },
        {
            id: 5,
            name: 'SUPTA DAS',
            role: 'Co Founder',
            designation: "UTA",
            image: "https://i.ibb.co/rfjW8Zk/IMG-5237-2-2.jpg",
        },
        {
            id: 6,
            name: 'TANZIM AHMED',
            role: 'Co Founder',
            designation: "UTA",
            image: "https://i.ibb.co/5Wbrjvx/Tanzim.jpg",
        },
        {
            id: 7,
            name: 'NAHIUN TASNIM KHAN',
            role: 'Co Founder',
            designation: "UTA",
            image: "https://i.ibb.co/nnD72ps/20230429-231402-288-2.jpg",
        },
        {
            id: 8,
            name: 'ASIF DEWAN',
            role: 'Co Founder',
            designation: "",
            image: "https://i.ibb.co/4P34NZp/photo-2023-04-30-18-34-13.jpg",
        },
    ]
    const TeamMemberCard = ({ team }) => (
        <div className="card w-96 h-full  shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#b69d74]">
          <figure className="px-10 pt-10">
            <img src={team.image} alt={team.name} className="rounded-xl  h-48" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-bold">{team.name}</h2>
            <p className="text-black text-lg font-semibold">{team.role}</p>
          </div>
        </div>
      );

    return (
        <div className="flex justify-center bg-[#f5f1f1] items-center flex-col my-10">
        <h1 className="text-black bg-[#f5f1f1] text-3xl font-bold  p-3 rounded-2xl"> Lex.Ai Team</h1>
        <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
          {ourteam.map((team) => (
            <div className="card" key={team.id}>
              <TeamMemberCard team={team} />
            </div>
          ))}
        </div>
      </div>
    );
};

export default OurTeam;