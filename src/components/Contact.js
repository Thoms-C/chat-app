import React from 'react';
import './contact.css'

const user = {
    name: 'Porter Parker',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    status: false,
}


const Contact = () => {
    return (
    <div className="Contact">
        <img src={user.avatar} className="avatar" alt='' />
        <div>
            <p className='name'>{user.name}</p> 
            <div className='status'>
                {user.status?  <span className='status-online'></span> : <span className='status-offline'></span>}
                <p className='status-text'>{user.status? 'Online': 'Offline'}</p>
            </div>
        </div>
    </div>
    )
}

export default Contact;




