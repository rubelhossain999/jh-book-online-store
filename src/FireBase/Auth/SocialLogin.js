import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
    const {googleLoginPop} = useContext(AuthContextAPI);
    const provider = new GoogleAuthProvider();
    const location = useLocation();
    const navigator = useNavigate();
    const from = location.state?.from?.pathname || '/';

    /// Use  json Web Token 
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    if(token){
        navigator(from, { replace: true });
        toast.success("User Login is Success!!");
    }


    const handleGoogleLogin = () =>{
        googleLoginPop(provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(user)
          
        })
        .catch((err) => {
            console.log(err);
        });
    }


    return (
        <div>
           <div className="flex justify-center space-x-4">
            <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
            </button>
        </div>
        </div>
    );
};

export default SocialLogin;