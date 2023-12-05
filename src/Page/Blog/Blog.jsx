import Loading from "../../Component/Loading/Loading";
import FindBlog from "./FindBlog/FindBlog";
import Slider from "./Slider/Slider";


const Blog = () => {
    <Loading/>
    return (
        <div className="sm:-my-10">
            <Slider></Slider>
            <FindBlog></FindBlog>
        </div>
    );
};

export default Blog;