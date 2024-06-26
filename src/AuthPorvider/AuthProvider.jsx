import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    
    
    const loginWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    
    const facebookProvider = new FacebookAuthProvider();
    const loginWithFacebook = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })


        return () => {
            unSubscribe();
        }
    }, [])


    const authValue = {
        user,
        loading,
        loginWithEmailPass,
        loginWithGoogle,
        loginWithFacebook,

    }

    return (
        <AuthContext.Provider value={authValue} >
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;