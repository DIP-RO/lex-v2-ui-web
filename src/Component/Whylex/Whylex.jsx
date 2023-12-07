import { useTranslation } from 'react-i18next'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
function MyComponent() {
    const { i18n } = useTranslation()
    const dataEng = {
        title: "Why LEX ?",
        content: "LEX is your go to source for all your legal needs by empowering you with the legal knowledge and expert guidance which you need to achieve justice and peace. We believe that everyone should have access to legal services regardless of their socio economic status.Our services are designed to help you navigate the complexities of the legal system with confidence and ease."
    }

    const dataBn = {
        title: "কেন লেক্স?",
        content: " লেক্স হলো আপনার আইনগত জ্ঞান এবং বিশেষজ্ঞ দিকনির্দেশনা দিয়ে ক্ষমতায়নের মাধ্যমে আপনার সমস্ত আইনি প্রয়োজনের উৎস যা আপনাকে ন্যায়বিচার এবং শান্তি অর্জন করতে হবে। আমরা বিশ্বাস করি যে প্রত্যেকেরই তাদের আর্থ-সামাজিক অবস্থা নির্বিশেষে আইনি পরিষেবাগুলিতে অ্যাক্সেস থাকা উচিত। আমাদের পরিষেবাগুলি আপনাকে আস্থা ও সহজে আইনি ব্যবস্থার জটিলতাগুলি নেভিগেট করতে সহায়তা করার জন্য ডিজাইন করা হয়েছে।"


    }
    const dataToDisplay = i18n.language === 'en' ? dataEng : dataBn;

    return (
        <div className=" sm:hidden mx-10">
            <div className=" flex gap-10">
                <div className='border-8 border-[#b69d74] border-spacing-56 w-1/2 m-10'>
                    <div className='m-10 -mr-20'>
                        <img src="https://i.ibb.co/9Y7PhPw/5.jpg" className="  w-full h-96" />
                    </div>
                </div>
                <div className='w-1/2 mx-5 my-14 '>
                    <h1 className='text-4xl font-bold  mb-8'>We Provide Professional Attorneys to Assist You</h1>
                    <p className=' text-xl '>We are qualified for the success of our client & as a professional law firm. So these professional attorneys are still here at your side with kindness, integrity, and loyalty to help with the worst moments of your life.</p>
                    <div className='mt-5 grid grid-cols-2 gap-10'>
                        <h1 className='flex text-center items-center gap-2 text-xl font-bold'><IoMdCheckmarkCircleOutline className='text-[#b69d74] text-xl font-bold' /> Browse Our Website</h1>
                        <h1 className='flex text-center items-center gap-2 text-xl font-bold'><IoMdCheckmarkCircleOutline className='text-[#b69d74] text-xl font-bold' />  Quick Reply</h1>
                        <h1 className='flex text-center items-center gap-2 text-xl font-bold'><IoMdCheckmarkCircleOutline className='text-[#b69d74] text-xl font-bold' /> Best Performances</h1>
                        <h1 className='flex text-center items-center gap-2 text-xl font-bold'><IoMdCheckmarkCircleOutline className='text-[#b69d74] text-xl font-bold' />  Choose Services</h1>
                    </div>
                    <Link to="/appointment">
                        <button className="btn text-white btn-neutral justify-center border border-white bg-[#b69d74]  hover:bg-[#b69d7485] w-[200px]  h-10  text-center rounded-[0px] mt-10">Learn More</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default MyComponent
