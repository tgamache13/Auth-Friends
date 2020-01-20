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
        <form onSubmit={handleSubmit}>
            {error && <div className='error'>{error}</div>}

            <input type='text' name='username' placeholder='User Name' value={user.username} onChange={handleChange}/>
            <input type='password' name='password' placeholder='Password' value={user.password} onChange={handleChange} />

            <button type='submit'>Sign In</button>
        </form>
    )
}

export default Login;