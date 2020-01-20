import React from 'react';

const Friend = (props) => {
    return(
        <div className='friendCard'> 
            
            <h3>{props.name}</h3>
            <p>Age: {props.age}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default Friend;