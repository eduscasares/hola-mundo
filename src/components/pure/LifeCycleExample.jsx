/**
 * Ejemplo de componente de tipo clase que dispone de los 
 * métodos de los métodos de ciclo de vida.
 */

import React, { Component } from 'react';

class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se renderiza el componente por primera vez');
    }

    componentWilllMount() {
        console.log('WILL MOUNT: Antes del montaje del componente');
    }

    componentDidMount() {
        console.log('DID MOUNT: Después de haberse montado el componente, antes de renderizado');
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECEIVEPROPS: Si va a recibir algún tipo de props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Debe retornar true o false. Sirve para controlar si el componente debe o no actualizarse.
        console.log('SHOULDUPDATE: Si el componente debe actualizarse o no');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILLUPDATE: Justo antes de actualizar el componente')
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('DIDUPDATE: Justo después de actualizarse')
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;
