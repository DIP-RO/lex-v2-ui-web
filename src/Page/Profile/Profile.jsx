import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import Loading from "../../Component/Loading/Loading";

const Profile = () => {

    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://attractive-ruby-cow.cyclic.app/api/v1/users/users/email/${user.email}`)
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching law data:", error));
    }, [user.email]);
    <Loading />
    return (
        <div className=" flex-1 justify-center items-center m-20">
            <div>

                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={users.image} alt='' />
                    </div>
                </div>
                <div className="flex gap-2">
                    <h1 className="text-xl font-bold text-center mt-2 text-white">{users.firstName}</h1>
                    <h1 className="text-xl font-bold text-center mt-2 text-white">{users.lastName}</h1>

                </div>
                <h3 className="text-xl font-bold  text-white">{users.email}</h3>
                <h3 className="text-xl font-bold  text-white">{users.phoneNumber}</h3>
                <h3 className="text-xl font-bold  text-white">{users.address}</h3>
            </div>
        </div>
    );
};

export default Profile;