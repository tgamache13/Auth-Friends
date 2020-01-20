import React, { useState } from 'react';
import api from '../utils/api';




const AddFriendForm = props => {
    const [friend, setFriend] = useState({
        id: '',
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
            <form className='add-form-inputs' onSubmit={handleSubmit}>
                <input className='add-name' type='text' name='name' placeholder='Name' value={friend.name} onChange={handleChange} />
                <input className='add-age' type='text' name='age' placeholder='Age' value={friend.age} onChange={handleChange}/>
                <input className='add-email'type='text' name='email' placeholder='Email' value={friend.email} onChange={handleChange}/>

                <button className='add-button'type='submit'>Add Friend</button>
            </form>
            
        </div>
    )
}

export default AddFriendForm;