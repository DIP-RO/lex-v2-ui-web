import { useTranslation } from 'react-i18next'
import Loading from '../Loading/Loading';

const Moto = () => {

    const {  i18n } = useTranslation()
    const motosEng = [
        {   id: 1,
            name: 'Guideline Assistant',
            image:"https://i.ibb.co/Wxh0cRY/image.png",
        },
        {   id: 2,
            name: 'Secure Management',
            image:"https://i.ibb.co/GHrqhGw/image.png",
        },
        {   id: 3,
            name: 'Full time support',
            image:"https://i.ibb.co/8cz5c7x/image.png",
        },
    ];
    const motosBan = [
        {   id: 1,
            name: 'গাইডলাইন সহকারী',
            image:"https://i.ibb.co/Wxh0cRY/image.png",
        },
        {   id: 2,
            name: 'নিরাপদ ব্যবস্থাপনা',
            image:"https://i.ibb.co/GHrqhGw/image.png",
        },
        {   id: 3,
            name: 'ফুল টাইম সাপোর্ট',
            image:"https://i.ibb.co/8cz5c7x/image.png",
        },
    ];

    const motosToDisplay = i18n.language === 'en' ? motosEng : motosBan;
    <Loading/>
    return (
        <div className="grid lg:grid-cols-3  md:grid-cols-3 text-base sm:text-lg md:gap-5 lg:text-xl xl:text-2xl grid-cols-1 lg:gap-14 m-10 lg:ml-20 sm:hidden">
            {motosToDisplay.map((moto) => (
                <div className="col-md-4 flex justify-center items-center gap-7" key={moto.id}>
                    <div className="">
                        <img src={moto.image} alt="" />
                    </div>
                    <div className=" text-3xl font-serif font-bold text-white">
                        <h4>{moto.name}</h4>
                    </div>
                </div>  
            ))}
        </div>
    );
};

export default Moto;