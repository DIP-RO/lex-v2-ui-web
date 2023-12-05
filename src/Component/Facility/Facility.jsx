import Loading from "../Loading/Loading";


const Facility = () => {
    <Loading/>
    return (
        <div
            id="DivmyRoot"
            className="bg-[#1d344a] flex flex-col lg:gap-24 w-full h-[478px]  items-center lg:px-[206px] py-12 sm:hidden"
        >
            <div
                id="HeadingOurFacilites"
                className="text-center text-4xl font-['Segoe_UI'] font-bold leading-[40px] uppercase text-white"
            >
                Our Facilites
            </div>
            <div className="self-stretch md:mt-8 flex flex-row md:justify-around justify-between mr-2 items-start">
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
                            <div className="font-['Segoe_UI'] leading-[24px] text-white self-end">
                                We ensure that delivery the product as soon as
                                <br />
                                possible .We normally take 2-3 day for delivery
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col pt-2 w-[367px]">
                        <div className="text-lg font-['Segoe_UI'] font-semibold leading-[28px] text-white absolute top-0 left-6 h-6 w-48">
                            24/7 customer service
                        </div>
                        <div className="relative flex flex-col gap-3 items-start">
                            <img
                                src="https://file.rendit.io/n/mksktdInHoDJdJcMmiGO.svg"
                                className="w-5"
                            />
                            <div className="font-['Segoe_UI'] leading-[24px] text-white self-end">
                                I have a dedicated person for cutomer service so
                                <br />
                                that any of you need any help you can contact
                                <br />
                                any time.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <div className="relative flex flex-col pt-2 w-[359px]">
                        <div className="text-lg font-['Segoe_UI'] font-semibold leading-[28px] text-white absolute top-0 left-6 h-6 w-32">
                            Well Behaviour
                        </div>
                        <div className="relative flex flex-col gap-3 items-start">
                            <img
                                src="https://file.rendit.io/n/mksktdInHoDJdJcMmiGO.svg"
                                className="w-5"
                            />
                            <div className="font-['Segoe_UI'] leading-[24px] text-white self-end">
                                We use the latest sports bike for collection.So
                                <br />
                                that we can ensure the highest quality possible.
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
                                We always try our best for the customer
                                <br />
                                staisfaction.we do our best to serve our customer.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facility;