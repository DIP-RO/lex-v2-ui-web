import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Component/Loading/Loading";

const LawDetails = () => {
    const { id } = useParams();

    const [data, setData] = useState({});
    const [related, setRelated] = useState([]);

    useEffect(() => {
        fetch(`https://attractive-ruby-cow.cyclic.app/api/v1/lawData/lawData/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching law data:", error));
    }, [id]);

    useEffect(() => {
        if (data?.Problem) {
            fetch(`https://attractive-ruby-cow.cyclic.app/api/v1/lawData/lawDataByProblem/${data.Problem}`)
                .then((response) => response.json())
                .then((data) => setRelated(data))
                .catch((error) => console.error("Error fetching related data:", error));
        }
    }, [data.Problem]);
<Loading/>
    return (
        <div>
            <div className="w-full bg-[#1d344a]">
                <div className="card-body">
                    <h2 className="card-title text-white ">{data.Problem}</h2>
                    <p className="text-white"><span className="text-xl font-semibold">VICTIM:</span> {data.Victims}</p>
                    <p className="text-white font-bold text-3xl">QUESTION: {data.Query}</p>
                    <p className="text-white"><span className="text-xl font-semibold">SUGGESTION:</span> {data.Suggestions}</p>
                    <p className="text-white"><span className="text-xl font-semibold">LAW: </span>{data.Law}</p>
                </div>
            </div>
            {related.map((item) => (
                <Link to={`/law-details/${item._id}`} key={item._id}>
                    <div className="w-full ">
                        <div className="card-body">
                            <h2 className="card-title text-white">{item.Query}</h2>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default LawDetails;
