/**
 * Ejemplo de hooks de:
 * - useState()
 * - useContext()
 * 
 * Este ejemplo viene muy biencuando tenemos que manejar datos 
 * y pasar esta información a componentes inferiores
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

// Inicializamos el contexto NULL que va a rellenarse con los datos del padre
const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>

            <h1>
                El token es: { state.token }
            </h1>

            {/* Pintamos el componente 2 */}
            <Componente2 />
        </div>
    );
}

/**
 * 
 * @returns 
 */
const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            
            <h2>
                La sesión es: { state.sesion }
            </h2>

        </div>
    );
}

export default function MiComponenteConContexto() {

    // Creamos un estado inicial que se compartirá con el resto de componentes
    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    // Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSessionData(
            {
                token: 'JMP-02987',
                sesion: sessionData.sesion + 1
            }
        )
    }

    return (
        <miContexto.Provider value={ sessionData }>
            {/* Todo lo que está aquí dentro puede leer los datos de sessionData (estado del componente) */}
            {/* Además, si se actualiza, los componentes de aquí también se actualizan */}
            <h1>*** Ejemplo de useState() y useContext() ***</h1>
            <Componente1></Componente1>
            <button onClick={ actualizarSesion }>Actualizar sesión</button>
        </miContexto.Provider>
    );
}