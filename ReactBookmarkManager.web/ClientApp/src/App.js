import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import { AuthContextComponent } from './AuthContext';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';
import AddBookmark from './pages/AddBookmark';
import MyBookmarks from './pages/MyBookmarks';
import PrivateRoute from './PrivateRoute';

const App = () => {
    return (
        <AuthContextComponent>
        <Layout>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Signup' component={Signup}/>
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/Logout' component={Logout}/>
            <PrivateRoute exact path='/AddBookmark' component={AddBookmark}/>
            <PrivateRoute exact path='/MyBookmarks' component={MyBookmarks}/>
        </Layout>
        </AuthContextComponent>
    );
}
export default App;