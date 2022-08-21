import React, { useState, useEffect } from 'react'

function Clock() {

    const [clockState, setClockState] = useState(
        {
            fecha: new Date(),
            edad: 0,
            nombre: 'Martín',
            apellidos: 'San José',
        }
    );

    useEffect(() => {

        console.log('El componente se ha creado');

        const timerID = setInterval(() => {

            setClockState( 
                {
    
                    ...clockState,
                    fecha: new Date(),
                    edad: clockState.edad + 1,
    
                }
            )

        }, 1000)

        return () => {
            clearInterval(timerID);
        };

    });


  return (
    <div>
        <h2>
            Hora actual: { clockState.fecha.toLocaleTimeString() }
        </h2>

        <h3>{ clockState.nombre } { clockState.apellidos }</h3>
        <h1>Edad: { clockState.edad }</h1>

    </div>
  )
}


export default Clock
