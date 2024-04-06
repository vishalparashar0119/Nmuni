import { useContext , createContext, useEffect, useState} from "react";
import { GoogleAuthProvider , signInWithPopup , signOut , onAuthStateChanged , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../fireBase'



const AuthContext = createContext(); 

export const AuthContextProvider = ({children}) =>{
    const [user , setUser] = useState({});

    // create user with email and password 
    const createUser = ( email , password)=>{
        return createUserWithEmailAndPassword(auth ,email , password);
    }
    // user sign with email and password
    const checkSignIn = (email , password)=>{
        return signInWithEmailAndPassword(auth , email , password);
    }

    const googleSignIn = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth , provider);
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          console.log('User', currentUser)
        });
        return () => {
          unsubscribe();
        };
      }, []);
    
    
    
    return(
        <AuthContext.Provider value={{ googleSignIn , logOut , user, createUser , checkSignIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = ()=>{
    return useContext(AuthContext)
}