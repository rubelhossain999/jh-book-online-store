import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import registration from '../../assets/registration.svg';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
import SocialLogin from './SocialLogin';


const Registration = () => {
   // const { userRegistration, updatUsernameandphoto } = useContext(AuthContextAPI);
    const navigator = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        // userRegistration(email, password)
        //     .then(res => {
        //         updatUsernameandphoto(name)
        //             .then(() => {
        //                 form.reset('')
        //                 toast.success("User Login Success");
        //                 navigator('/');
        //             })
        //             .catch(error => {
        //                 console.log(error);
        //             })

        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })



    }
    return (
        <div className='p-6 m-10 max-w-[1340px] mx-auto grid lg:grid-cols-2 grid-cols-1'>
            <img className='mr-20 mt-14 mb-9' src={registration} alt='login'></img>
            <div className="flex flex-col max-w-md p-5 rounded-md sm:p-10 bg-primary text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Resistration</h1>
                    <p className="text-1xl text-gray-400">Please select what you're logging in as.</p>
                </div>
                <form onSubmit={handleSignUp} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="name" className="block mb-2 text-sm">Name</label>
                            <input type="name" name="name" id="name" placeholder="name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-gray-100" required />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-gray-100" required />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm">Selected User Role</label>
                            <select className="w-full px-4 py-3 rounded-mdbg-white text-black focus:border-violet-400 rounded" required>
                            <option name="customer">Customer</option>
                            <option name="writer">Writer</option>
                            <option name="seller">Seller</option>
                        </select>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="/" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-gray-100" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button className="w-full px-8 py-3 font-semibold rounded-md bg-secondary text-white">Sign in</button>
                        </div>
                    </div>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-1xl text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <SocialLogin></SocialLogin>
                <p className="text-xs text-center sm:px-6 text-gray-400">Don't have an account?
                    <Link rel="noopener noreferrer" to="/login" className="underline text-secondary"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Registration;