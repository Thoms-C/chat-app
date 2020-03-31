import React from 'react';
import './contact.css'
import propTypes from 'prop-types'


const Contact = props => {
    return (
    <div className="Contact">
        <img src={props.user.avatar} className="avatar" alt='' />
        <div>
            <p className='name'>{props.user.name}</p> 
            <div className='status'>
                <span className={props.user.status? 'status-online' : 'status-offline' }></span>
                <p className='status-text'>{props.user.status? 'Online': 'Offline'}</p>
            </div>
        </div>
    </div>
    )
}

Contact.propTypes = {
    name: propTypes.string,
    status: propTypes.bool,
}


export default Contact;




