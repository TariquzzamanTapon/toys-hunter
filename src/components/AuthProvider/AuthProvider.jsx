import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';
import { useEffect } from 'react';



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const [user, setUser] = useState([]);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const userProfile = (rUser, name, img) => {
        updateProfile(rUser, {
            displayName: name,
            photoURL: img
        }).then(result => {
            setUser(result.user)
            console.log(result.user, 'user profile')
        })
            .catch(error => {
                console.log(error, 'come from error')
            })
    }

    // google
    const providerGoogle = new GoogleAuthProvider();


    const googleSign = ()=>{
        setLoading(true);
        return signInWithPopup(auth, providerGoogle);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])






    const authInfo = {
        createUser,
        logIn,
        logOut,
        userProfile,
        googleSign,
        loading,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;