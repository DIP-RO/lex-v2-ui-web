import format from 'date-fns/format';
import Loading from '../../Component/Loading/Loading';

const ReviewCard = ({review}) => {
    
    const createdAt = new Date(review.createdAt);
    const formattedDate = format(createdAt, 'dd MMM yyyy, HH:mm:ss');
    <Loading/>
    return (
        <div className="card lg:w-96 bg-gray-900 shadow-xl sm:max-w-sm">
            <div className="card-body">
                <h2 className="card-title text-white">{review.userName}</h2>
                <p className="text-white">
                {formattedDate}
                </p>
                <p className="text-white">
                {review.rating}
                </p>
                <p className="text-white">
                {review.comment}
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;