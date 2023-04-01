import React from 'react';
import { Contact } from './contact.class';
import CompB from './compB';

const CompA = () => {

    const contact001 = new Contact('John', 'Smith', 'example@mail.com', true)

    return (
        <div>
            <h2>
                Contactos: 
            </h2>
            <CompB contact={contact001}></CompB>
        </div>
    );
}

export default CompA;
