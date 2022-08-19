/**
 * Ejemplo de uso del método componentwillUnmount para componente de clase
 * y ejemplo de uso de hook para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export  class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca')
    }

  render() {
    return (
      <div>
        <h1>WillUnmount</h1>
      </div>
    )
  }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        // Lo que metamos aquí tendremos que meterlo dentro del return
        return(
            console.log('Comportamiento antes de que el componente desaparezca') 
        )
    }, []);

    return (
        <div>
            
        </div>
    );
}

