import Loading from "../../Component/Loading/Loading";
import Location from "../../Component/Location/Location";
import FindBlog from "./FindBlog/FindBlog";
import Slider from "./Slider/Slider";
import { RiArrowRightDoubleFill } from "react-icons/ri";


const Blog = () => {
    const Data = {
        title: {
          label: 'Blog',
          subLabel: null,
    
        },
        links: [
          { label: null, icon: null },
          { label: 'Blog', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
      };
    <Loading />
    return (
        <div className="sm:-my-10">
            <Location {...Data} />
            
            <FindBlog></FindBlog>
            <Slider></Slider>
            
        </div>
    );
};

export default Blog;