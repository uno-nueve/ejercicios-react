import React, { useState, useEffect } from 'react';
import { Contact } from './contact.class';
import ContactComponent from './contact';
import ContactForm from './contactForm';

const ListComponent = () => {

    const contact1 = new Contact ('Rick James', '111756432', 'legitemail@rjames.com', '345 Dean St, Brooklyn, NY', false)
    const contact2 = new Contact ('Sarah Morgan', '115468990', 'smorgan65@superemail.com', '3-23 Meller Rd, Manchester, UK', true)
    const contact3 = new Contact ('Connor Mead', '112654605', 'connormead@mailify.com', '2270 22nd St, Santa Monica, CA', false)


    // Component state
    const [contacts, setContacts] = useState([contact1, contact2, contact3]);


    useEffect(() => {
        console.log('Contact state has been modified')
        return () => {
            console.log('List component is going to unmount...')
        };  
    }, [contacts]);


    // FUNCTIONS:
    function addContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }


    function removeContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }


    function editContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conected = !tempContacts[index].conected;
        setContacts(tempContacts);
    }

    return (
        <div className='col-12'>
            <div className='card' style={{color: 'limegreen'}}>
                <div className='card-header bg-dark'>
                    <h2>CONTACTS</h2>
                </div>
                <div className='card-body bg-light' data-mdb-perfect-scrollbar='true' style={{height: '100%'}}>
                    <ul className='list-group list-group-flush d-flex align-items-center'>
                        <li className='list-group-item col-8 p-0 bg-light'>
                            { contacts.map((contact, index)=> {
                                return (
                                    <ContactComponent
                                        key={index}
                                        contact={contact}
                                        create={addContact}
                                        remove={removeContact}
                                        edit={editContact}>
                                    </ContactComponent>
                                )
                            }) }
                            <ContactForm create={addContact}></ContactForm>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ListComponent;