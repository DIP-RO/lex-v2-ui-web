import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import swal from 'sweetalert';

const Modal = () => {
    const navigate = useNavigate();
    const handleAppointment = () => {

        // const AppointmentData = {
        //     userName: user.displayName,
        //     userEmail: user.email,
        //     image: lawyer.image,
        //     specialization: lawyer.specialization,
        //     lawyerId: lawyer._id,
        //     lawyerName: lawyer.name,
        // }
        // fetch('https://attractive-ruby-cow.cyclic.app/api/v1/appointments/appointments', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(AppointmentData)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result);
                swal({
                    title: "Good job!",
                    text: `Appointment is successfully added`,
                    icon: "success",
                    button: "DONE",
                });

            // })
            // .catch(err => console.error(err));
                navigate('/dashboard/booking');
    };
    <Loading />
    return (
        <dialog id="my_modal_3" className="modal max-h-fit">
            <div className="modal-box w-3/4">
                <form method="dialog">
                    {/* Close button that will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
                    <div className=" flex flex-col items-center justify-center">

                        {/* Text input field for typing */}
                        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs mb-4" />

                        {/* Date selector */}
                        <input type="date" className="input input-bordered w-full max-w-xs mb-4" />

                        {/* Time selector */}
                        <input type="time" className="input input-bordered w-full max-w-xs mb-4" />

                        {/* Phone number input */}
                        <input type="tel" placeholder="Phone number" className="input input-bordered w-full max-w-xs mb-4" />

                        {/* Address input */}
                        <textarea placeholder="Address" className="input input-bordered w-full max-w-xs mb-4" rows="3"></textarea>

                        {/* Submit button */}<button type="submit" className="btn bg-[#343a40] hover:bg-[#343a40] w-full max-w-xs text-white" onClick={handleAppointment}>Submit</button>
                    </div>
                    
                </form>
            </div>
        </dialog>


    );
};

export default Modal;