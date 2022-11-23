import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthInfoContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [useloader, setUseloader] = useState(true);

    /// Create User
    const createUser = (email, password) => {
        setUseloader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    /// Update User Name and Photo
    const updatUsernameandphoto = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    }

    /// User logOut
    const userLogOut = () => {
        setUseloader(true);
        return signOut(auth);
    }

    /// Login user
    const loginuser = (email, password) => {
        setUseloader(true);
        return signInWithEmailAndPassword(auth, email, password);
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
        updatUsernameandphoto,
        userLogOut,
        loginuser,
        useloader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthInfoContext;