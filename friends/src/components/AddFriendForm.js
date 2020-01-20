import React, { useState } from 'react';
import api from '../utils/api';


const AddFriendForm = props => {
    const [friend, setFriend] = useState({
        
        name: '',   
        age: '',
        email: ''
    });

    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setFriend({
            ...friend
        });
        api()
            .post('/api/friends', friend)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
        setFriend({
            name: '',
            age: '',
            email: ''
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Name' value={friend.name} onChange={handleChange} />
                <input type='text' name='age' placeholder='Age' value={friend.age} onChange={handleChange}/>
                <input type='text' name='email' placeholder='Email' value={friend.email} onChange={handleChange}/>

                <button type='submit'>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriendForm;