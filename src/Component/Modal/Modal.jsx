import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";


const Modal = () => {
    <Loading/>
    return (
        <dialog id="my_modal_3" className="modal max-h-fit  bg-[#1d344a98]">
            <div className="modal-box bg-[#1d344a] w-3/4">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
                   
                </form>
               <Link to="/Lex-ai">
               <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2 text-white"><img src="https://i.ibb.co/ydRtYXH/fullscreen.png" /></button>
               </Link>
                <div className="text-4xl font-['Inter'] font-semibold text-white p-5 text-center">
                    Welcome to LEX-AI
                </div>
                <div className="border-solid overflow-hidden  flex flex-col justify-center gap-8 w-full items-center   rounded-[35px] bg-white p-10">


                    <div className="w-full">
                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/kg3X7W8/photo-2023-05-15-00-28-43.jpg" />
                                </div>
                            </div>

                            <div className="chat-bubble w-fit bg-black text-white">who are you?</div>

                        </div>
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/kg3X7W8/photo-2023-05-15-00-28-43.jpg" />
                                </div>
                            </div>

                            <div className="chat-bubble bg-black text-white">Lex AI</div>

                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <input type="search" className="rounded-2xl border-2 border-black"></input>
                        </div>
                        <div>
                            <button>
                                <img
                                    src="https://i.ibb.co/5GP4ytS/Polygon-1-1.png"
                                    id="PolygonRoot"
                                    className="origin-top-left ] w-7 h-7"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;