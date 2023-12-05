import Loading from "../../../Component/Loading/Loading";

const ContactModal = () => {
    <Loading/>
    return (
        <dialog id="ContactModal" className="modal">
            <div className="modal-box bg-gray-900">
                <div className='flex justify-center  bg-gray-900 '>
                    <div className="card w-96  bg-gray-900  ">
                        <div className="card-body items-center text-center">

                            <form >
                                <input type="email" name='email' placeholder="Type Name" className="input  mt-10 input-bordered w-full max-w-xs" />
                                <input type="password" name='password' placeholder="Type Email" className="textarea textarea-bordered mt-10  w-full max-w-xs" />
                                <textarea className="textarea textarea-bordered mt-10  w-full max-w-xsd" placeholder="Type your message"></textarea>

                                <input className='btn  mt-10' type="submit" value="Submit" />
                               
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </dialog>
    );
};

export default ContactModal;