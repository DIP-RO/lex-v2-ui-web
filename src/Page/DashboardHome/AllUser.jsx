import { useEffect, useState } from "react";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://attractive-ruby-cow.cyclic.app/api/v1/users/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching law data:", error));
}, []);




  return (
    <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-8">
      {users.map((user) => (
        <div key={user.id} className="flex flex-col items-center justify-center p-5">
          <img className="w-[50px] h-[50px] rounded-3xl" src={user.image} alt="" />
          <div className="flex gap-2">
            <h1 className="text-xl font-bold text-center mt-2 text-white">{user.firstName}</h1>
            <h1 className="text-xl font-bold text-center mt-2 text-white">{user.lastName}</h1>
          
          </div>
          <h3 className="text-xl font-bold text-center text-white">{user.email}</h3>
          <h3 className="text-xl font-bold text-center text-white">{user.phoneNumber}</h3>
          <h3 className="text-xl font-bold text-center text-white">{user.address}</h3>
        </div>
      ))}
    </div>
  );
};

export default AllUser;
