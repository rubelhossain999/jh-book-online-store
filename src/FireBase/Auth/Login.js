import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
import SocialLogin from './SocialLogin';
import Loginimg from '../../assets/Login.svg';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { loginuser } = useContext(AuthContextAPI);
    const location = useLocation();
    const navigator = useNavigate();
    
    /// Use  json Web Token 
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    
    const from = location.state?.from?.pathname || '/';

    if(token){
        navigator(from, { replace: true });
    }

    const handleLoginUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginuser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(email);
            })
            .catch(error => {
                console.error(error);
                toast.error("User Login Acces incorreected", error.meassage);
            })


    }

    return (
        <div className='p-6 m-10 max-w-[1340px] mx-auto grid lg:grid-cols-2 grid-cols-1'>
            <img className='mr-20 mt-14 mb-9' src={Loginimg} alt='login'></img>
            <div className="flex flex-col max-w-md p-5 rounded-md sm:p-10 bg-primary text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
                </div>
                <form onSubmit={handleLoginUser} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" required />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="/" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button className="w-full px-8 py-3 font-semibold rounded-md bg-secondary text-white">Sign in</button>
                        </div>
                    </div>
                </form>
                <div className='mt-8'>
                    <SocialLogin></SocialLogin>
                    <p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
                        <Link rel="noopener noreferrer" to="/registration" className="hover:underline text-secondary"> Sign up.</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;