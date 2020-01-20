import React, { useState, useEffect } from 'react';

import api from '../utils/api';


function FriendsList() {
    const [friends, setFriends] = useState();

    useEffect(() => {
        api().get('/api/friends')
            .then(res => {
                console.log(res);
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (id) => {
        api()
            .delete(`/api/friends/${id}`)
            .then(res => {
                console.log(res);
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return(
        
            <div className='friendList'>
                {friends && friends.map(friend => 
                    <div className='friendCard' key={friend.id}>
                        <h3>{friend.name}</h3>
                        <p>Age: {friend.age}</p>
                        <p>{friend.email}</p>
                        <button>Edit</button>
                        <button onClick={() => handleDelete(friend.id)}>Delete</button>
                    </div> )}
                    
            </div>
        
    )
}

export default FriendsList;