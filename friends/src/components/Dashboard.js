import React from 'react';
import { Link } from 'react-router-dom';


function Dashboard(props) {
    return(
        <div className='dash'>
            <h1 className='dash-welcome'>Welcome to your Dashboard</h1>
            <h3 className='dash-mess'>Click below on what you would like to do while you are here.</h3>
            <div className='dash-buttons'>
                <Link to='/friendsList' className='dash-list-link'>Friends List</Link> <br></br>
                <Link to='/addFriendForm' className='dash-add-link'>Add a Friend</Link>
            </div>
        </div>
    )
}

export default Dashboard;