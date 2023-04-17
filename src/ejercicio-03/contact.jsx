import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { Contact } from './contact.class';

const ContactComponent = ({ contact, remove, edit }) => {

    useEffect(() => {
        console.log('Created a new contact')
        return () => {
            console.log(`You're deleting ${contact.name} from your contacts`)
        };
    }, [contact]);

    function conectionStatus() {
        if (contact.conected) {
            return(
                <i onClick={()=> edit(contact)} className='bi bi-person-circle' style={{color: 'tomato'}}></i>
            )
        } else {
            return(
                <i onClick={()=> edit(contact)} className='bi bi-person-circle' style={{color: 'limegreen'}}></i>
            )
        }
    }

    return (
        <div className='card text-white bg-dark mb-4'>
            <div className='card-header'>
                <div className='row'>
                    <span className='col-sm-2'>
                        { conectionStatus() }
                    </span>
                    <span className='col'>
                        { contact.name }
                    </span>
                        <i className="bi bi-x-square col-2" onClick={()=> remove(contact)} style={{color: 'tomato', cursor: 'pointer'}}></i>
                </div>
            </div>
            <div className='card-body'>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item bg-dark text-white' style={{textAlign: 'left'}}>
                        <span>
                            <i className="bi bi-telephone" style={{color: 'grey'}}> - </i>
                        </span>
                        <span>
                            { contact.number }
                        </span>
                    </li>
                    <li className='list-group-item bg-dark text-white' style={{textAlign: 'left'}}>
                        <span>
                            <i className="bi bi-envelope-at" style={{color: 'grey'}}> - </i>
                        </span>
                        <span>
                            { contact.email }
                        </span>
                    </li>
                    <li className='list-group-item bg-dark text-white' style={{textAlign: 'left'}}>
                        <span>
                            <i className="bi bi-house" style={{color: 'grey'}}> - </i>
                        </span>
                        <span>
                            { contact.address }
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    create: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
};

export default ContactComponent;