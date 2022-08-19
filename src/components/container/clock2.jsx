import React, { useState, useEffect } from 'react';
import '../../styles/clock.scss';


const Clock2 = ({props}) => {

    const defaultPersona  = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
     };

     const [persona, setPersona] = useState(defaultPersona);

     useEffect(() => {
        //console.log('Componente creado')

        const intervalID = setInterval(() => {
            setPersona({...persona,edad:persona.edad+1,fecha: new Date()})
            console.log('Actualización del componente')
        }, 1000);

        return () => {
            console.log('Componente va a desaparecer');
            clearInterval(intervalID);
        }
    });

    

  return (
    <div>
         <h2>
         Hora Actual:
         {persona.fecha.toLocaleTimeString()}
         </h2>
         <h3>{persona.nombre} {persona.apellidos}</h3>
         <h1>Edad: {persona.edad}</h1>
    </div>
  )
}

export default Clock2