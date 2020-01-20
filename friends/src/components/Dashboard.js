import React from 'react';
import { Link } from 'react-router-dom';


function Dashboard(props) {
    return(
        <>
            <h1>Welcome to your Dashboard</h1>
            <h3>Click below on what you would like to do while you are here.</h3>
            <Link to='/friendsList'>Friends List</Link>
            <Link to='/addFriendForm'>Add a Friend to The List</Link>
        </>
    )
}

export default Dashboard;