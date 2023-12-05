
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useContext } from 'react';


const AddLawyer = () => {
    const {user } = useContext(AuthContext);
    
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
                    name: data.name,
                    specialization: data.specialization,
                    description: user.description,
                      image: imageData.data.url,
                      role: 'LAWYER'
                  }
                  console.log(information);


                  fetch('https://attractive-ruby-cow.cyclic.app/api/v1/lawyers/lawyers', {
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
                              text: `${data.name} is successfully added`,
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
        <div className="flex justify-center  bg-gray-900">
      <div className="card w-96  bg-gray-900 shadow-2xl ">
        <div className="card-body items-center text-center">
          <h1 className="text-2xl font-bold text-white">ADD LAWYER</h1>
          <form
            className="mt-6 text-center pb-6"
            onSubmit={handleSubmit(handleAddProduct)}
          >
            <input
              className="input input-bordered w-full max-w-xs mt-6"
              placeholder="name"
              {...register("name", {
                required: "name is required",
              })}
              type="text"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
            <br />       
            <input
              className="input input-bordered w-full max-w-xs mt-6"
              placeholder="specialization"
              {...register("specialization", { required: "specialization is required" })}
              type="text"
            />
            {errors.specialization && (
              <p className="text-red-600">{errors.specialization?.message}</p>
            )}
            <br />
            <input
              className="input input-bordered w-full max-w-xs mt-6"
              placeholder="description"
              {...register("description", {
                required: "description is required",
              })}
              type="text"
            />
            {errors.description && (
              <p className="text-red-600">{errors.description?.message}</p>
            )}
            <br />

            <input
              className="input input-bordered w-full max-w-xs mt-6"
              {...register("img", { required: "image is required" })}
              type="file"
              alt="img"
              placeholder="picture url"
            />
            {errors.img && (
              <p className="text-red-600">{errors.img?.message}</p>
            )}

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

export default AddLawyer;