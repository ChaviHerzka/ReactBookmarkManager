import axios from 'axios';
import React, {useState, useEffect, createContext, useContext} from 'react';

const AuthContext = createContext();

const AuthContextComponent = ({children}) =>{
    const [user, setUser] = useState(null);
  

    useEffect(()=>{
        const getUser = async () => {
            const {data} = await axios.get('/api/account/getcurrentuser')
            setUser(data);
            console.log("here",data)
        }
        getUser();
    }, []);
    const logout = () => setUser(null);
    return(
        <AuthContext.Provider value={{user, logout, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => useContext(AuthContext);

export {AuthContextComponent, useAuthContext};