import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from '../../../Component/Loading/Loading';

const LexSearch = () => {
    const [data, setData] = useState([]);
    const [record, setRecord] = useState([]);

    useEffect(() => {
        axios.get('https://attractive-ruby-cow.cyclic.app/api/v1/lawData/lawData')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const filter = (e) => {

        const keyword = e.target.value;
        const Result = data.filter(f => f.Problem.includes(keyword))
        setRecord(Result.slice(0, 5));

    };
<Loading/>
    return (

        <div className="xl:hidden md:hidden lg:hidden max-w-sm flex justify-center items-center gap-5 p-5">
            <div>
                <h1 className=" text-3xl font-extrabold text-white ">Lex.Ai</h1>
            </div>
            <div className='dropdown dropdown-hover'>

                <input tabIndex={0} onChange={filter} type="text" placeholder="Search" className="w-full h-10 px-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-b-box w-52 max-w-fit"
                >
                    {record.map((item) => (
                        <Link key={item._id} to={`/law-details/${item._id}`}>
                            <li className="w-52 overflow-hidden">{item.Query}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LexSearch;