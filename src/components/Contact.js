import React from 'react';
import './contact.css'
import propTypes from 'prop-types'


const Contact = props => {
    return (
    <div className="Contact">
        <img src={props.avatar} className="avatar" alt='' />
        <div>
            <p className='name'>{props.name}</p> 
            <div className='status'>
                <span className={props.status? 'status-online' : 'status-offline' }></span>
                <p className='status-text'>{props.status? 'Online': 'Offline'}</p>
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




