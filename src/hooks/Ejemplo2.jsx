/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos, cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable 
    // con un elemento del DOM del componente (vista HTML) -> Viene a simplificar 
    // el tradicional document.getElementById()...
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    /**
     * Trabajando con useEffect();
     */

        /**
         * ? Caso 1 - Ejecutar siempre un snippet de código
         * Cada vez que se haga un cambio en el estado del componente
         * se ejecuta aquello que esté dentro del useEffect (el caso más sencillo)
         */
    
            // useEffect(() => {
            //     console.log('Cambio en el estado del componente')
            //     console.log('Mostrando referencia a elemento del DOM')
            //     console.log(miRef)
            // })


        /**
         * ? Caso 2 - Ejecutar solo cuando ocurre un evento en específico
         * Cada vez que haya un cambio en este evento específico
         * se ejecuta el código dentro de useEffect()
         */

            // useEffect(() => {
            //     console.log('Cambio en el estado del contador 1')
            //     console.log('Mostrando referencia a elemento del DOM')
            //     console.log(miRef)
            // }, [contador1])

        /**
         * ? Caso 3 - Restringir el disparador de useEffect por uno o varios eventos
         * Es decir, podemos añadir lógicas como que el código se ejecute
         * solo cuando se dispare el contador 1 O el contador 2
         * Esto es útil cuando queremos manejar más de un estado dentro del 
         * mismo componente simultáneamente
         */

            useEffect(() => {
                console.log('Cambio en el estado del contador 1 / contador 2')
                    console.log('Mostrando referencia a elemento del DOM')
                    console.log(miRef)
            }, [contador1, contador2]);

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>Contador 1: { contador1 }</h2>
            <h2>Contador 2: { contador2 }</h2>

            {/* Elemento referenciado */}
            <h4 ref={ miRef }>
                Ejemplo de elemento referenciado
            </h4>

            {/* Botones para cambiar el estado de los contadores */}
            <div>
                <button onClick={ incrementar1 }>Incrementar 1</button>
                <button onClick={ incrementar2 }>Incrementar 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;

