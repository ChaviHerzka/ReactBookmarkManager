import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const history = useHistory();
    const [FormData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const onTextChange = e => {
        const copy = { ...FormData };
        copy[e.target.name] = e.target.value;
        setFormData(copy);
    }
    const onFormSubmit = async e => {
        e.preventDefault();
        await axios.post('/api/account/signup', FormData)
        history.push('/login')
    }
    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3 card card-body bg-light'>
                <h3>Sign up for a new account</h3>
                <form onSubmit={onFormSubmit}>
                    <input onChange={onTextChange} name="firstName" value={FormData.firstName} placeholder="First Name" className='form-control'/>
                    <br/>
                    <input onChange={onTextChange} name="lastName" value={FormData.lastName} placeholder="Last Name" className='form-control'/>
                    <br/>
                    <input onChange={onTextChange} name="email" value={FormData.email} placeholder="Email" className='form-control'/>
                    <br/>
                    <input onChange={onTextChange} name="password" value={FormData.password} placeholder="Password" className='form-control'/>
                    <br/>
                    <button className='btn btn-primary'>Signup</button>
                </form>
            </div>
            
        </div>
        )
}
export default Signup;