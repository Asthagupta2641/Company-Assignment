import React, {createContext,useState} from "react";
import {useNavigate} from "react-router-dom";
export const AuthContext = createContext();
export const AuthProvider =
({children}) =>{
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const navigate=useNavigate();
    const login =(username,password)=>{
        if(username ==="Admin" && password ==="123"){
            setIsAuthenticated(true);
            navigate("/dashboard");
        }
        else{
            alert("Invalid Credentials");
        }
    };
    const logout=()=>{
        setIsAuthenticated(false);
        navigate("/");
    };
    return (
        <AuthContext.Provider 
        value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};