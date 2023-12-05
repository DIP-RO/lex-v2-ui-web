import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from '../../Context/UserContext';
import ReviewCard from '../../Global/ReviewCard/ReviewCard';
import Loading from "../../Component/Loading/Loading";

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

    const handleAddReview = (data) => {
        const addReview = {
            userName: data.name,
            userEmail: user.email,
            LawyerId: lawyer._id,
            productName: lawyer.name,
            rating: data.rating,
            comment: data.description
        };

        fetch("https://attractive-ruby-cow.cyclic.app/api/v1/reviews/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addReview),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                swal({
                    title: "Good job!",
                    text: "You updated YOUR Review",
                    icon: "success",
                    button: "DONE",
                });
                // Call fetchReviews to update reviews after successful review submission
                fetchReviews();
            })
            .catch((err) => console.error(err));
    };


    const handleAppointment = () => {

        const AppointmentData = {
            userName: user.displayName,
            userEmail: user.email,
            image: lawyer.image,
            specialization: lawyer.specialization,
            lawyerId: lawyer._id,
            lawyerName: lawyer.name,
        }
        fetch('https://attractive-ruby-cow.cyclic.app/api/v1/appointments/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(AppointmentData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                swal({
                    title: "Good job!",
                    text: `${ lawyer.name} is successfully added`,
                    icon: "success",
                    button: "DONE",
                });
                
            })
            .catch(err => console.error(err));

    };
    const handleBookmark = () => {

        const BookmarkData = {
            userEmail: user.email,
            image: lawyer.image,
            specialization: lawyer.specialization,
            name: lawyer.name,
            LawyerId: lawyer._id,
        }

        fetch('https://attractive-ruby-cow.cyclic.app/api/v1/bookmarks/bookmarks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(BookmarkData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                swal({
                    title: "Good job!",
                    text: `${ lawyer.name} is successfully added`,
                    icon: "success",
                    button: "DONE",
                });
                
            })
            .catch(err => console.error(err));
    };

<Loading/>
    return (
        <div className='sm:max-w-sm'>
            <div className="hero  bg-gray-900 sm:max-w-sm">
                <div className="hero-content  flex-col lg:flex-row-reverse md:flex-row-reverse  w-fit h-fit">
                    <div className='lg:w-1/2 md:w-1/2 sm:full  '>
                        <img src={lawyer.image} alt="" className="h-60 w-60  rounded-lg shadow-2xl" />
                    </div>
                    <div className="w-1/2 sm:full sm:max-w-sm">
                        <h1 className="text-3xl text-white font-bold w-full">{lawyer.name}</h1>
                        <p className="py-3 text-white w-full">She is a {lawyer.specialization}</p>
                        <p className="py-3 text-white w-full sm:hidden"> {lawyer.description}</p>

                        <div className='flex'>
                            <button className='btn btn-sm mr-2' onClick={handleAppointment}>Appointment Now</button>
                            <button className='btn btn-sm' onClick={handleBookmark} >Bookmark</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen  bg-gray-900 sm:max-w-sm">
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
            </div>
        </div>
    );
};

export default LawyerDetails;
