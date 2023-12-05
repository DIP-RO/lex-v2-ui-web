import { useTranslation } from 'react-i18next'

function MyComponent() {
    const {  i18n } = useTranslation()
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
        <div className="hero  bg-[#1d344a] sm:hidden">
            <div className="hero-content flex-col md:flex-row lg:flex-row-reverse">
                <img src="https://i.ibb.co/XLqBYkL/image.png" className="max-w-lg rounded-lg  shadow-2xl w-1/2" />
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold text-white">{dataToDisplay.title}</h1>
                    <p className="py-6 pr-10 text-white">{dataToDisplay.content}</p>

                </div>
            </div>
        </div>
    )
}

export default MyComponent
