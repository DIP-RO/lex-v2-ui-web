import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from '../../Context/UserContext';
import ReviewCard from '../../Global/ReviewCard/ReviewCard';
import Loading from "../../Component/Loading/Loading";
import { FaFacebookF, FaPhone } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import AvaiableLawyer from "../Appointment/AvaiableLawyer/AvaiableLawyer";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Location from "../../Component/Location/Location";
import Modal from "../../Component/Modal/Modal";
import PrivateRoute from "../../Route/PrivateRoutes";

const LawyerDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [lawyer, setLawyer] = useState({});
    const [reviews, setReviews] = useState([]); // Changed setReview to setReviews

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const fetchReviews = () => {
        if (lawyer._id) {
            fetch(`https://attractive-ruby-cow.cyclic.app/api/v1/reviews/reviews/LawyerId/${lawyer._id}`)
                .then((response) => response.json())
                .then((data) => setReviews(data))
                .catch((error) => console.error("Error fetching reviews:", error));
        }
    };

    useEffect(() => {
        fetch(`https://attractive-ruby-cow.cyclic.app/api/v1/lawyers/lawyers/${id}`)
            .then((response) => response.json())
            .then((data) => setLawyer(data))
            .catch((error) => console.error("Error fetching law data:", error));
    }, [id]);

    useEffect(() => {
        fetchReviews();
    }, [lawyer._id]);

    // const handleAddReview = (data) => {
    //     const addReview = {
    //         userName: data.name,
    //         userEmail: user.email,
    //         LawyerId: lawyer._id,
    //         productName: lawyer.name,
    //         rating: data.rating,
    //         comment: data.description
    //     };

    //     fetch("https://attractive-ruby-cow.cyclic.app/api/v1/reviews/reviews", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(addReview),
    //     })
    //         .then((res) => res.json())
    //         .then((result) => {
    //             console.log(result);
    //             swal({
    //                 title: "Good job!",
    //                 text: "You updated YOUR Review",
    //                 icon: "success",
    //                 button: "DONE",
    //             });
    //             // Call fetchReviews to update reviews after successful review submission
    //             fetchReviews();
    //         })
    //         .catch((err) => console.error(err));
    // };


    

    const handleBookmark = () => {

        // const BookmarkData = {
        //     userEmail: user.email,
        //     image: lawyer.image,
        //     specialization: lawyer.specialization,
        //     name: lawyer.name,
        //     LawyerId: lawyer._id,
        // }

        // fetch('https://attractive-ruby-cow.cyclic.app/api/v1/bookmarks/bookmarks', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(BookmarkData)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result);
                swal({
                    title: "Good job!",
                    text: `Bookmark is successfully added`,
                    icon: "success",
                    button: "DONE",
                });

            // })
            // .catch(err => console.error(err));
    };
    const Data = {
        title: {
          label: 'Lawyer Details',
          subLabel: null,
    
        },
        links: [
          { label: null, icon: null },
          { label: 'Lawyer Details', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
      };

    <Loading />
    return (
        <div>
             <Location {...Data} />
            <div className='sm:max-w-sm flex justify-center items-center'>
                <div className="hero  bg-white sm:max-w-sm w-4/12 m-5">
                    <div className="hero-content  flex-col  w-full h-fit shadow-lg shadow-stone-950">
                        <div className="flex flex-col justify-center items-center">
                            <div className='  '>
                                <img src={lawyer.image} alt="" className="h-60 w-60   shadow-2xl" />
                            </div>
                            <div className="bg-[#343a40] rounded-lg -mt-7 flex gap-2 p-5">

                                <FaFacebookF className=" text-white" />
                                <CiInstagram className=" text-white" />
                                <FaTwitter className=" text-white" />
                                <FaLinkedin className=" text-white" />
                            </div>
                        </div>
                        <div className="w-3/4 sm:full sm:max-w-sm">
                            <h1 className="text-3xl text-black font-bold w-full">Contact info</h1>
                            <p className="py-3 text-black w-full flex items-center gap-2"><FaPhone /> Call : +07 554 332 322</p>
                            <p className="py-3 text-black w-full sm:hidden flex items-center gap-2"><AiOutlineMail /> hello@lyzo.com</p>
                            <p className="py-3 text-black w-full sm:hidden flex items-center gap-2"> <IoLocationSharp />4th Floor, 408 No Chamber</p>
                            <h1 className="text-3xl text-black font-bold w-full mt-5">Working hours</h1>
                            <p className="py-3 text-black w-full flex items-center gap-3 ">Monday <div className="divider w-20 text-black"></div>  9:00 am - 8:00 pm</p>
                            <p className="py-3 text-black w-full flex items-center gap-3 ">Monday <div className="divider w-20 text-black"></div>  9:00 am - 8:00 pm</p>
                            <p className="py-3 text-black w-full flex items-center gap-3 ">Monday <div className="divider w-20 text-black"></div>  9:00 am - 8:00 pm</p>

                            <div className='flex mt-10 '>
                                <button className='btn btn-sm bg-[#343a40] hover:bg-[#343a40] mr-2 text-white' onClick={()=>document.getElementById('my_modal_3').showModal()}>Appointment Now</button>
                                <button className='btn btn-sm bg-[#343a40] hover:bg-[#343a40] text-white' onClick={handleBookmark} >Bookmark</button>
                            </div>
                        </div>
                    </div>
                    <PrivateRoute><Modal></Modal></PrivateRoute>
                </div>
                <div className="w-7/12 mx-5">
                    <div>
                        <h1 className="text-3xl text-black font-bold w-full">Dr. S.M. Saiful Hoquer</h1>
                        <h1 className="text-xl text-black font-bold w-full mt-3">Public Prosecutor</h1>
                        <h1 className="text-xl text-black  w-full mt-3">Bachelor of Laws in LL.B. (Hons) in the United Kingdom</h1>
                    </div>
                    <div>
                        <h1 className="text-xl text-black font-bold w-full mt-10">Biography</h1>
                        <p className="mt-2 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.

                            Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div>
                        <h1 className="text-xl text-black font-bold w-full mt-5">Education</h1>
                        <p className="mt-2 text-lg">PHD degree in Criminal Law at University of Lyzo Internatinal (2006)</p>
                        <p className="mt-2 text-lg">Master of Family Law at University of Lyzo International (2002)</p>
                        <p className="mt-2 text-lg">MBBS LLB (Hon’s) in at University of Lyzo International (2002)</p>
                        <p className="mt-2 text-lg">Higher Secondary Certificate at Lyzo International collage (1991)</p>

                    </div>
                    <div>
                        <h1 className="text-xl text-black font-bold w-full mt-5">Biography</h1>
                        <p className="mt-2 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.

                            Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                    </div>
                    <button className='btn  bg-[#343a40] hover:bg-[#343a40] text-white mt-14' >Download CV</button>
                </div>


                {/* <div className="hero min-h-screen  bg-gray-900 sm:max-w-sm">
                <div className="hero-content flex-col lg:flex-row md:flex-row">
                    <div className="bg-gray-900 lg:p-11">
                        {
                            reviews.length < 1 &&
                            <div className=' flex justify-center items-center'>
                                <h1 className='text-white font-bold'>this have no review</h1>
                            </div>
                        }
                        <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-6'>
                            {
                                reviews.length > 0 &&

                                reviews.map(review => <ReviewCard


                                    key={review._id}
                                    review={review}
                                ></ReviewCard>)

                            }
                        </div>
                    </div>

                    <div className="flex justify-center  bg-gray-900 sm:max-w-sm">
                        <div className="card lg:w-96  bg-gray-900 shadow-2xl ">
                            <div className="card-body items-center text-center">
                                <h1 className="text-2xl font-bold text-white">ADD REVIEW</h1>
                                <form
                                    className="mt-6 text-center pb-6"
                                    onSubmit={handleSubmit(handleAddReview)}
                                >
                                    {user?.displayName ? (
                                        <input
                                            className="input input-bordered w-full max-w-xs mt-6"
                                            placeholder="name"
                                            value={user.displayName}
                                            {...register("name", {
                                                required: "name is required",
                                            })}
                                            type="text"
                                        />
                                    ) : (
                                        <input
                                            className="input input-bordered w-full max-w-xs mt-6"
                                            placeholder="name"
                                            {...register("name", {
                                                required: "name is required",
                                            })}
                                            type="text"
                                        />
                                    )}
                                    {errors.name && (
                                        <p className="text-red-600">{errors.name?.message}</p>
                                    )}
                                    <br />
                                    <input
                                        className="input input-bordered w-full max-w-xs mt-6"
                                        placeholder="rating"
                                        {...register("rating", { required: "rating is required" })}
                                        type="text"
                                    />
                                    {errors.rating && (
                                        <p className="text-red-600">{errors.rating?.message}</p>
                                    )}
                                    <br />
                                    <input
                                        className="input input-bordered w-full max-w-xs h-24 mt-6"
                                        placeholder="description"
                                        {...register("description", {
                                            required: "description is required",
                                        })}
                                        type="text"
                                    />
                                    {errors.description && (
                                        <p className="text-red-600">{errors.description?.message}</p>
                                    )}
                                    <br />
                                    <input
                                        className="btn w-full max-w-xs mt-6 "
                                        value="Submit"
                                        type="submit"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
            <div className="flex flex-col justify-center items-center mt-20">
            <div className="bg-[#212222]  w-1/2 flex flex-col justify-center sm:mt-3  sm:w-3/4 sm:p-5 h-20 shrink-0 items-center rounded-[35px]">
                <div className="text-6xl lg:text-4xl md:text-3xl sm:text-lg  font-['Poppins'] font-semibold leading-[32px] text-white"> 
                Our More Expert Attorneys
                </div>
            </div>
            <AvaiableLawyer></AvaiableLawyer>
            </div>
        </div>
    );
};

export default LawyerDetails;
