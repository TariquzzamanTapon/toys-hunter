import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.init';
import { useEffect } from 'react';



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState([]);
    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, loggedUser=>{
            setUser(loggedUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])






    const authInfo = {
        createUser,
        logIn,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;