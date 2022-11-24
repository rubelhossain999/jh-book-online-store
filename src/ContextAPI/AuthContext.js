import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../FireBase/FireBase.config';

export const AuthContextAPI = createContext();
const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [useloader, setUseloader] = useState(true);

    /// 1. Create User
    const createUser = (email, password) => {
        setUseloader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    /// 2.  Update User Name and Photo
    const updatUsernameandrole = (name, role) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            userrole: role,
        });
    }

    /// 3. User logOut
    const userLogOut = () => {
        setUseloader(true);
        return signOut(auth);
    }

    /// 4. Login user
    const loginuser = (email, password) => {
        setUseloader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // 5. Google Login System
    const googleLoginPop = (provider) => {
        return signInWithPopup(auth, provider);
    }

    /// unsubscribe with loader
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('inside Auth State Change', currentUser);
            setUser(currentUser);
            setUseloader(false);
        });

        return () => {
            unsubscribe();
        }

    }, []);


    const authInfo = {
        user,
        createUser,
        updatUsernameandrole,
        userLogOut,
        loginuser,
        useloader,
        googleLoginPop
    }
    return (
        <AuthContextAPI.Provider value={authInfo}>
            {children}
        </AuthContextAPI.Provider>
    );
};

export default AuthContext;