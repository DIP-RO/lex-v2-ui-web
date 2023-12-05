import Loading from "../../Component/Loading/Loading";
import Question from "../../Component/Question/Question";
import ContactModal from "./ContactModal/ContactModal";

const Contact = () => {
  <Loading/>
  return (
    <div className="flex flex-col items-center">
      <Question></Question>

      <div className="bg-[rgba(200,102,102,0.22)] my-10 w-full md:w-3/4 lg:w-1/2 flex flex-col justify-center items-center gap-6 py-8 rounded-lg px-4 md:px-8">
        <div className="text-4xl md:text-6xl font-Poppins font-semibold text-white text-center">
          For emergency support
        </div>
        <button className="bg-[rgba(222,84,84,0.52)] hover:bg-[rgba(222,84,84,0.52)] w-fit btn px-4 md:px-8 py-2 rounded-full" onClick={() => document.getElementById('ContactModal').showModal()}>
          <div className="text-2xl md:text-3xl font-Poppins font-bold text-white">
            Click Here
          </div>
        </button>
      </div>
      <div className="text-4xl md:text-6xl font-Poppins font-bold text-white my-10">
        Lex Hotline NO: 017XXXXXXX
      </div>
      <ContactModal></ContactModal>
    </div>
  );
};

export default Contact;
