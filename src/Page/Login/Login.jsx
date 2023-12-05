import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import Loading from "../../Component/Loading/Loading";

const Login = () => {
    const { signIn, LoginWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error));
    }

    const handleLogin = (event) => {
        event.preventDefault();
        LoginWithGoogle()
            .then(result => {
                const user = result.user;

                console.log(user);
                navigate(from, { replace: true })


            })
            .catch(error => {
                console.error('error:', error);
            })


    }
    <Loading/>
    return (
        <div className='flex justify-center  my-9'>
            <div className="card w-96 bg-[#1d344a] shadow-2xl ">
                <div className="card-body items-center text-center">
                    <h1 className='text-2xl font-bold text-white'>LOGIN</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name='email' placeholder="Type Email" className="input  mt-10 input-bordered w-full max-w-xs" />
                        <input type="password" name='password' placeholder="Type Password" className="input mt-10 input-bordered w-full max-w-xs" />

                        <input className='btn  mt-10' type="submit" value="LogIn" />
                    </form>
                    <div className="divider text-white ">OR</div>
                    <div className="flex gap-4">
                        <button onClick={handleLogin} > <img className='g-logo w-10 h-10' src='https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png' alt='' /> </button>
                        <button > <img className='g-logo w-10 h-10' src='https://i.ibb.co/mcCdGpM/image.png' alt='' /> </button>
                    </div>
                    <h1 className='text-white mt-10'>Are you new here? <Link className='underline underline-offset-1' to='/signup'>SignUp</Link></h1>

                </div>
            </div>

        </div>
    );
};

export default Login;