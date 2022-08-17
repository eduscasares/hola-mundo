/*
*
*    Ejemplo de uso del HOOK useState
*
*    La idea es crear un componente de tipo función y acceder al estado
*    privado a través de un hook y, además, poder modificarlo.
*
*/

import React, { useState } from 'react';


const Ejemplo1 = () => {

    // Establecemos un valor inicial para un contador
    const valorInicial = 0;

    // Establecemos un valor inicial para una persona (objeto)
    const personaInicial = {
        nombre : 'Example',
        email : 'email@email.com'
    }

    /*
    *
    *    Queremos que valorInicial y personaInicial sean parte del estado del 
    *    componente para así poder gestionar su cambio, y éste se vea reflejado
    *    en la vista del componente. Por ejemplo:
    *
    *    const [nombreVariable, funcionParaCambiar] = useState(valorInicial/personaInicial)
    *
    */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /*
    *
    *    Función para actualizar el estado privado que tiene el contador
    *
    */
   
    function incrementarContador() {
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }


    /*
    *
    *    Función para actualizar el estado de persona en el componente
    *
    */

    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Pepe',
                email: 'anotheremail@mail.com'
            }
        )
    }

    return (
        <div>
            
            <h1>*** Ejemplo de useState() ***</h1>
            <p>Contador: { contador }</p>
            <p>Persona: { persona.nombre }</p>
            <p>Email: { persona.email }</p>

            {/* Bloque de botones para actualizar el estado */}
            <div>
                <button onClick={ incrementarContador }>Incrementar contador</button>
                <button onClick={ actualizarPersona }>Actualizar datos persona</button>
            </div>

        </div>
    );
}

export default Ejemplo1;