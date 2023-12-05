
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";


const Registration = () => {
    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const handleAddProduct = (data) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = 'https://api.imgbb.com/1/upload?key=1658aafd65aea72c0b966711f995e311';
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {

                console.log(imageData);

                if (imageData.success) {
                    const information = {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: user.email,
                        phoneNumber: data.phone,
                        address: data.address,
                        image: imageData.data.url,
                        role: data.role,
                    }
                    console.log(information);


                    fetch('https://attractive-ruby-cow.cyclic.app/api/v1/users/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(information)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            swal({
                                title: "Good job!",
                                text: `${data.firstName, data.lastName} is successfully added`,
                                icon: "success",
                                button: "DONE",
                            });
                            navigate('/');
                        })
                        .catch(err => console.error(err));
                }
            });


    }

    return (
        <div className="flex justify-center  ">
            <div className="card w-96  bg-gray-900 shadow-2xl my-10">
                <div className="card-body items-center text-center">
                    <form
                        className="mt-6 text-center pb-6"
                        onSubmit={handleSubmit(handleAddProduct)}
                    >
                        <input
                            className="file-input file-input-bordered w-full max-w-xs mt-6"
                            {...register("img", { required: "image is required" })}
                            type="file"
                            alt="img"
                            placeholder="picture url"
                        />
                        {errors.img && (
                            <p className="text-red-600">{errors.img?.message}</p>
                        )}
                        <div className="flex gap-5">
                            <div className="flex-col">
                                <input
                                    className="input input-bordered w-full max-w-xs mt-6"
                                    placeholder="firstName"
                                    {...register("firstName", {
                                        required: "firstName is required",
                                    })}
                                    type="text"
                                />

                                {errors.firstName && (
                                    <p className="text-red-600">{errors.firstName?.message}</p>
                                )}
                            </div>
                            <div className="flex-col">
                                <input
                                    className="input input-bordered w-full max-w-xs mt-6"
                                    placeholder="lastName"
                                    {...register("lastName", {
                                        required: "lastName is required",
                                    })}
                                    type="text"
                                />

                                {errors.lastName && (
                                    <p className="text-red-600">{errors.lastName?.message}</p>
                                )}
                            </div>


                        </div>
                        <br />
                        <input
                            className="input input-bordered w-full max-w-xs mt-6"
                            placeholder="phone"
                            {...register("phone", { required: "phone is required" })}
                            type="text"
                        />
                        {errors.phone && (
                            <p className="text-red-600">{errors.phone?.message}</p>
                        )}
                        <br />
                        <select className="select mt-6  select-bordered w-full max-w-xs" {...register("role", { required: "role is required" })}>
                            <option disabled selected>ROLE</option>
                            <option>USER</option>
                            <option>LAWYER</option>
                            
                        </select>
                        {errors.role && <p className='text-red-600'>{errors.role?.message}</p>}
                        <input
                            className="input input-bordered w-full max-w-xs mt-6"
                            placeholder="address"
                            {...register("address", { required: "address is required" })}
                            type="text"
                        />
                        {errors.address && (
                            <p className="text-red-600">{errors.address?.message}</p>
                        )}
                        <br />
                        <input
                            className="btn w-full max-w-xs mt-6 "
                            value="Submit"
                            type="submit"
                        />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;