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
        <div className="bg-[#212222]">
            <div className="w-full bg-[#212222]">
                <div className="card-body mx-20 py-10">
                  
                   
                    <p className="text-white  font-medium text-3xl mb-10">QUESTION: {data.Query}</p>
                    <p className="text-white  mb-10 "><span className="underline font-semibold">SUGGESTION:</span> {data.Suggestions}</p>
                    <p className="text-white "><span className="underline  font-semibold">LAW: </span>{data.Law}</p>
                </div>
            </div>
            {related.map((item) => (
                <Link to={`/law-details/${item._id}`} key={item._id}>
                    <div className="mx-20 border   ">
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
