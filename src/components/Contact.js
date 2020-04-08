import React from 'react';
import './contact.css'
import propTypes from 'prop-types'


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.status
        }
    }
    render() {
        return (
            <div className="Contact">
                <img src={this.props.avatar} className="avatar" alt='' />
                <div>
                    <p className='name'>{this.props.name}</p> 
                    <div 
                    className='status'
                    onClick={event => {
                        const offline = !this.state.online;
                        this.setState({ online: offline})
                        }}
                    >
                        <span className={this.state.online? 'status-online' : 'status-offline' }></span>
                        <p className='status-text'>{this.state.online? 'Online': 'Offline'}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
    name: propTypes.string,
    status: propTypes.bool,
}


export default Contact;




