import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { Contact } from './contact.class';

const ContactForm = ({ create }) => {

    const nameRef = useRef('');
    const numberRef = useRef('');
    const emailRef = useRef('');
    const addressRef = useRef('')

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            numberRef.current.value,
            emailRef.current.value,
            addressRef.current.value,
            false
        );
        create(newContact)
    }

    return (
        <form onSubmit={addContact}>
            <div className='form-group row'>
                <label htmlFor="name" className='col-sm-2 col-form-label my-2' style={{textAlign: 'left'}}><strong>Name</strong></label>
                <div className='col-sm-10 my-2'>
                    <input ref={nameRef} type='text' className='form-control' id='name' placeholder='Name'/>
                </div>
                <label htmlFor="number" className='col-sm-2 col-form-label my-2' style={{textAlign: 'left'}}><strong>Number</strong></label>
                <div className='col-sm-10 my-2'>
                    <input ref={numberRef} type='text' className='form-control' id='number' placeholder='Phone Number'/>
                </div>
                <label htmlFor="email" className='col-sm-2 col-form-label my-2' style={{textAlign: 'left'}}><strong>Email</strong></label>
                <div className='col-sm-10 my-2'>
                    <input ref={emailRef} type='text' className='form-control' id='email' placeholder='Email'/>
                </div>
                <label htmlFor="address" className='col-sm-2 col-form-label my-2' style={{textAlign: 'left'}}><strong>Address</strong></label>
                <div className='col-sm-10 my-2'>
                    <input ref={addressRef} type='text' className='form-control' id='address' placeholder='Address'/>
                </div>
            </div>
            <button type='submit' className='btn btn-outline-dark btn-lg col-12 my-2'><i className="bi bi-plus-lg"></i></button>
        </form>
    );
}

ContactForm.propTypes = {
    create: PropTypes.func.isRequired
}

export default ContactForm;
