
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useForm } from 'react-hook-form';

const AddService = () => {
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const handleAddProduct = (data) => {
      swal({
        title: "Good job!",
        text: `${data.name} is successfully added`,
        icon: "success",
        button: "DONE",
      });
      navigate('/');
      }
        

      
    return (
        <div className="flex justify-center  bg-gray-900">
        <div className="card w-96  bg-gray-900 shadow-2xl ">
          <div className="card-body items-center text-center">
            <h1 className="text-2xl font-bold text-white">ADD Service</h1>
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

export default AddService;