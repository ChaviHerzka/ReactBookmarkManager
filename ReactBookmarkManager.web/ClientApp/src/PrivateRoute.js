import React from 'react';
import { useAuthContext } from './AuthContext';
import Login from './pages/Login';
import {Route} from 'react-router-dom';
const PrivateRoute = ({component, ...options})=>{
    const {user} = useAuthContext();
    
    const finalComponent = !!user ? component: Login;
    console.log(finalComponent)
    console.log(!!user);
    return <Route {...options} component={finalComponent}/>
    

};
export default PrivateRoute;