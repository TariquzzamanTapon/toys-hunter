import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';
import { useEffect } from 'react';



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState([]);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
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
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;