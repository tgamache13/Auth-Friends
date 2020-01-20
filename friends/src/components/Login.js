import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../utils/api';

function Login(props) {
    const [error, setError] = useState();
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        api()
            .post('/api/login', user)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/dashboard')
            })
            .catch(err => {
                setError(err)
            })
        
    }
    return (
        <form className='login-form'onSubmit={handleSubmit}>
            {error && <div className='error'>{error}</div>}
            <h3>Please login to get to your Dashboard</h3>
            <div className='login-form-inputs'>
                <input className='user-name' type='text' name='username' placeholder='User Name' value={user.username} onChange={handleChange}/>
                <input className='password' type='password' name='password' placeholder='Password' value={user.password} onChange={handleChange} />

                <button className='sign-in' type='submit'>Sign In</button>
            </div>
        </form>
    )
}

export default Login;