import React, { useEffect, useState } from 'react';

const Clock = () => {

    const setup = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Stan',
        apellidos: 'Smith'
    };


    // Estado del componente
    const [info, setInfo] = useState(setup);


    // Ciclo de vida del componente
    useEffect(()=> {
        const timerID = setInterval(()=> {
            setInfo((prev)=> {
                let edad = prev.edad +1;
                return {
                    ...prev,
                    fecha: new Date(),
                    edad
                }
            })
        }, 1000);
        return ()=> {
            clearInterval (timerID)
        };
    }, []);


    return (
        <div>
            <h2>
                Hora Actual: { info.fecha.toLocaleTimeString() }
            </h2>
            <h3>
                { info.nombre } { info.apellidos }
            </h3>
            <h1>
                Edad: { info.edad }
            </h1>
        </div>
    );
}

export default Clock;
