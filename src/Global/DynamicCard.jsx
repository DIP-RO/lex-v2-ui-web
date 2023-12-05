import Loading from "../Component/Loading/Loading";


const DynamicCard = ({ imageUrl, imageAlt, title, description }) => {
  <Loading/>
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
      <div className="bg-white border rounded p-4">
        <img src={imageUrl} alt={imageAlt} className="w-full h-40 object-cover rounded mb-2" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default DynamicCard;