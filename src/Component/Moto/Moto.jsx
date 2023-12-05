// import { useTranslation } from 'react-i18next'
import { FaBalanceScale, FaGavel, FaHandsHelping } from "react-icons/fa";
import Loading from "../Loading/Loading";

const Moto = () => {
  // const {  i18n } = useTranslation()
  // const motosEng = [
  //     {   id: 1,
  //         name: 'Guideline Assistant',
  //         image:"https://i.ibb.co/Wxh0cRY/image.png",
  //     },
  //     {   id: 2,
  //         name: 'Secure Management',
  //         image:"https://i.ibb.co/GHrqhGw/image.png",
  //     },
  //     {   id: 3,
  //         name: 'Full time support',
  //         image:"https://i.ibb.co/8cz5c7x/image.png",
  //     },
  // ];
  // const motosBan = [
  //     {   id: 1,
  //         name: 'গাইডলাইন সহকারী',
  //         image:"https://i.ibb.co/Wxh0cRY/image.png",
  //     },
  //     {   id: 2,
  //         name: 'নিরাপদ ব্যবস্থাপনা',
  //         image:"https://i.ibb.co/GHrqhGw/image.png",
  //     },
  //     {   id: 3,
  //         name: 'ফুল টাইম সাপোর্ট',
  //         image:"https://i.ibb.co/8cz5c7x/image.png",
  //     },
  // ];

  // const motosToDisplay = i18n.language === 'en' ? motosEng : motosBan;
  <Loading />;
  return (
    <div
      id="DivrowRoot"
      className="bg-[rgba(182,_157,_116,_0.35)] grid grid-cols-4 gap-[112px] w-full h-48 items-start pt-5 px-16"
    >
      <div className="flex flex-row mt-6 gap-0  items-start">
        <div className="relative flex flex-row justify-center w-24 items-start">
          <div
            id="Iflaticonleader"
            className="w-24 h-24 bg-white bg-[linear-gradient(#b69d74,_#b69d74)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-0"
          />
          <div className="text-center text-5xl font-inter leading-[100px] text-white relative mt-6 w-3/5">
            <FaBalanceScale /> {/* Placeholder icon */}
          </div>
        </div>
        <div className="relative flex flex-row w-2/3 items-start px-5">
          <div
            id="ListItem1"
            className="text-sm font-['Poppins'] leading-[21px] text-[#b69d74] w-full h-24 bg-white absolute top-0 left-0 flex flex-row items-start pt-6 px-5"
          >
            AI
          </div>
          <div className="text-lg font-['Poppins'] font-semibold leading-[32.4px] text-[#b69d74] relative mt-12 w-5/6">
          AI based Service
          </div>
        </div>
          </div>
          <div className="flex flex-row mt-6 gap-0  items-start">
        <div className="relative flex flex-row justify-center w-24 items-start">
          <div
            id="Iflaticonleader"
            className="w-24 h-24 bg-white bg-[linear-gradient(#b69d74,_#b69d74)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-0"
          />
          <div className="text-center text-5xl font-inter leading-[100px] text-white relative mt-6 w-3/5">
            <FaBalanceScale /> {/* Placeholder icon */}
          </div>
        </div>
        <div className="relative flex flex-row w-2/3 items-start px-5">
          <div
            id="ListItem1"
            className="text-sm font-['Poppins'] leading-[21px] text-[#b69d74] w-full h-24 bg-white absolute top-0 left-0 flex flex-row items-start pt-6 px-5"
          >
            100% Legal
          </div>
          <div className="text-lg font-['Poppins'] font-semibold leading-[32.4px] text-[#b69d74] relative mt-12 w-5/6">
            Govt Approved
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-0  items-start mt-6 mr-1">
        <div className="relative flex flex-row justify-center w-24 items-start">
          <div
            id="Iflaticonauction"
            className="w-24 h-24 bg-white bg-[linear-gradient(#b69d74,_#b69d74)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-0"
          />
          <div className="text-center text-5xl font-inter leading-[100px] text-white relative mt-6 w-3/5">
            <FaHandsHelping /> {/* Placeholder icon */}
          </div>
        </div>
        <div className="relative flex flex-row w-2/3 items-start px-5">
          <div
            id="ListItem3"
            className="text-sm font-['Poppins'] leading-[21px] text-[#b69d74] w-full h-24 bg-white absolute top-0 left-0 flex flex-row items-start pt-6 px-5"
          >
            Trusted
          </div>
          <div className="text-lg font-['Poppins'] font-semibold leading-[32.4px] text-[#b69d74] relative mt-12 w-5/6">
            99% Case Won
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-6 gap-0  items-start">
        <div className="relative flex flex-row justify-center w-24 items-start">
          <div
            id="Iflaticonsupport"
            className="w-24 h-24 bg-white bg-[linear-gradient(#b69d74,_#b69d74)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-0"
          />
          <div className="text-center text-5xl font-inter leading-[100px] text-white relative mt-6 w-3/5">
            <FaGavel /> {/* Placeholder icon */}
          </div>
        </div>
        <div className="relative flex flex-row w-3/4 items-start px-5">
          <div
            id="ListItem5"
            className="text-sm font-['Poppins'] leading-[21px] text-[#b69d74] w-full h-24 bg-white absolute top-0 left-0 flex flex-row items-start pt-6 px-5"
          >
            Support
          </div>
          <div className="text-lg font-['Poppins'] font-semibold leading-[32.4px] text-[#b69d74] relative mt-12 w-5/6">
            Full Time Support
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moto;
