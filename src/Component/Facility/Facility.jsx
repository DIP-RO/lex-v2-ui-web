import Loading from "../Loading/Loading";

const Facility = () => {
  <Loading />;
  return (
    <div
      id="DivmyRoot"
      className=" flex flex-col lg:gap-10 w-full h-[478px]  items-center lg:px-[206px] py-12 sm:hidden"
      style={{
        backgroundImage: "url(https://i.ibb.co/jG84Kfp/contact-bg.jpg)",
      }}
    >
      <div
        id="HeadingOurFacilites"
        className="text-4xl font-bold text-center mt-5 text-white"
      >
        Our Facilites
      </div>
      <div className="self-stretch md:mt-8 flex flex-row md:justify-around justify-between mr-2 px-10 items-start">
        <div className="flex flex-col gap-2 items-start">
          <div className="relative flex flex-col pt-2 w-[355px]">
            <div className="text-xl font-['Segoe_UI'] font-semibold leading-[28px] text-white absolute top-0 left-6 h-6 w-[238px]">
              Fast Communicate System
            </div>
            <div className="relative flex flex-col gap-3 items-start">
              <img
                src="https://file.rendit.io/n/mksktdInHoDJdJcMmiGO.svg"
                className="w-5"
              />
              <div className="w-96 font-['Segoe_UI'] leading-[24px] text-white ">
                Lex.ai is an advanced communication platform enabling fast and
                efficient interactions through cutting-edge technology.
              </div>
            </div>
          </div>
          <div className="relative flex flex-col pt-2 w-[367px]">
            <div className="text-lg font-['Segoe_UI'] font-semibold leading-[28px] text-white absolute top-0 left-6 h-6 ">
              24/7 Client service
            </div>
            <div className="relative flex flex-col gap-3 items-start">
              <img
                src="https://file.rendit.io/n/mksktdInHoDJdJcMmiGO.svg"
                className="w-5"
              />
              <div className="font-['Segoe_UI']  text-white self-end">
                We have a dedicated person and Lex.Ai ChatBot for client service
                so that any of your need or necessity you can contact or
                conversation any time in our web-application.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <div className="relative flex flex-col pt-2 w-[359px]">
            <div className="text-lg font-['Segoe_UI'] font-semibold  text-white absolute top-0 left-6 h-6 ">
              Lawyer Service
            </div>
            <div className="relative flex flex-col gap-3 items-start">
              <img
                src="https://file.rendit.io/n/mksktdInHoDJdJcMmiGO.svg"
                className="w-5"
              />
              <div className="font-['Segoe_UI'] text-white self-end">
                Lawyer services provide legal expertise, advice, and
                representation in contracts, disputes, and litigation, defending
                and advocating for clients rights and interests within the legal
                framework
              </div>
            </div>
          </div>
          <div className="relative flex flex-col pt-2 w-[376px]">
            <div className="text-lg font-['Segoe_UI'] font-semibold leading-[28px] text-white absolute top-0 left-6 h-6 w-48">
              Customer Satisfaction
            </div>
            <div className="relative flex flex-col gap-3 items-start">
              <img
                src="https://file.rendit.io/n/mksktdInHoDJdJcMmiGO.svg"
                className="w-5"
              />
              <div className="font-['Segoe_UI'] leading-[24px] text-white self-end">
                We always try our best for the customer staisfaction.we do our
                best to serve our customer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
