import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './contact.class';

const CompB = ( {contact} ) => {
    return (
        <div>
            <h4>
                Nombre: {contact.first}
            </h4>
            <h4>
                Apellido: {contact.last}
            </h4>
            <h4>
                Email: {contact.email}
            </h4>
            <h5>
                Estado: {contact.status ? 'Contacto En Línea' : 'Contacto No Disponible'}
            </h5>
        </div>
    );
};


CompB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default CompB;
