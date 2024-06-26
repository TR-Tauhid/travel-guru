import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { PropTypes } from "prop-types";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);

    const loginWithEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authValue = {
       loading,
       loginWithEmailPass,
    
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