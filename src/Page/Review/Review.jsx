import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import ReviewCard from "../../Global/ReviewCard/ReviewCard";
import Loading from "../../Component/Loading/Loading";

const Review = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchReviews = () => {
        fetch(`https://attractive-ruby-cow.cyclic.app/api/v1/reviews/reviews/userEmail/${user.email}`)
            .then((response) => response.json())
            .then((data) => {
                setReviews(data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                console.error("Error fetching review data:", error);
                setLoading(false); // Set loading to false on error
            });
    };

    useEffect(() => {
        fetchReviews();
    }, [user.email]);

    // Function to manually refresh the reviews
    const handleRefresh = () => {
        setLoading(true); // Set loading to true while fetching
        fetchReviews();
    };

    if (loading) {
        return <Loading />; // Display loading component while fetching data
    }

    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-6 lg:m-10">
            <button onClick={handleRefresh}>Refresh Reviews</button>
            {reviews.map((review) => (
                <ReviewCard review={review} key={review._id} />
            ))}
        </div>
    );
};

export default Review;
