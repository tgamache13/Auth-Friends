import React, { useState, useEffect } from 'react';

import api from '../utils/api';
import Friend from './Friend'

function FriendsList(props) {
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
    return(
        <>
            <div>
                {friends && friends.map(friend => <Friend key={friend.id} {...friend} />)}
            </div>
        </>
    )
}

export default FriendsList;