import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader]= useState(true);

    const signUp = (email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    } 
    const logIn = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password);

    }
    const logOut =()=>{
        setLoader(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoader(false);

        })
        return ()=>unsubscribe;
    },[])
    const authInfo ={loader,user,signUp,logIn,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;