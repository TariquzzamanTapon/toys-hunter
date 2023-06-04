import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.init';



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

    






    const authInfo = {
        createUser,
        logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;