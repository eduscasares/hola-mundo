/**
 * Ejemplo de uso del método
 * de ciclo de vida en componente de clase y hook de ciclo de vida
 * en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento del componente antes de que el componente sea añadido al DOM (se renderice)')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento del componente antes de que el componente sea añadido al DOM (se renderice)')
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}
