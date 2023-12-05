const OurTeam = () => {

    const ourteam = [
        {
            id: 1,
            name: 'SHAHRIAR HOSSAIN',
            role: 'Co Founder',
            image: "https://i.ibb.co/7tsH99q/1668093775398asd.jpg",
        },
        {
            id: 2,
            name: 'RIYAD ALI MOLLIK',
            role: 'Co Founder',
            image: "https://i.ibb.co/hFKnrDC/24-23-08.jpg",
        },
        { id: 3,
            name: 'DIPRO PAUL',
            role: 'Co Founder',
            image: "https://i.ibb.co/b1vWMk8/cover.jpg",
          
        },
        {
            id: 4,
            name: 'UMMAY MAHJABEEN',
            role: 'Co Founder',
            image: "https://i.ibb.co/vBfTNxx/photo-2023-04-30-17-25-19.jpg",
        },
        {
            id: 5,
            name: 'SUPTA DAS',
            role: 'Co Founder',
            image: "https://i.ibb.co/rfjW8Zk/IMG-5237-2-2.jpg",
        },
        {
            id: 6,
            name: 'TANZIM AHMED',
            role: 'Co Founder',
            image: "https://i.ibb.co/5Wbrjvx/Tanzim.jpg",
        },
        {
            id: 7,
            name: 'NAHIUN TASNIM KHAN',
            role: 'Co Founder',
            image: "https://i.ibb.co/nnD72ps/20230429-231402-288-2.jpg",
        },
        {
            id: 8,
            name: 'ASIF DEWAN',
            role: 'Co Founder',
            image: "https://i.ibb.co/4P34NZp/photo-2023-04-30-18-34-13.jpg",
        },
    ]


    return (
        <div className="flex justify-center items-center flex-col my-10">
            <h1 className="text-white text-3xl font-bold border-solid border-4 p-3 rounded-2xl">Meet Our Team</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {ourteam.map((team) => (
                    <div className="card" key={team.id}>
                        <figure className="px-10 pt-10">
                            <img src={team.image} alt={team.name} className="rounded-full w-28 h-28" />
                        </figure>
                        <div className="card-body items-center justify-center text-center bg-[#1d344a] h-20 mt-5 rounded-2xl">
                            <h2 className="card-title text-white">{team.name}</h2>
                            <p className="text-white">{team.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;