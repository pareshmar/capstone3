// using hook below
import React, {useEffect, useState} from "react";
import firebase from "./Firebase/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(setCurrentUser);

    }, []);

    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}