import React, { useState } from 'react';

// Definiendo estilos a través de constantes: 

const loggedStyle = {
    color: 'white',
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold',
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);

    // useEffect(() => {
    //     return () => {
    //         effect
    //     };
    // }, [input])

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            <p> { logged ? `Hola, ${ props.name }` : 'Please, login' } </p>
            <button onClick={ () => {
                console.log('Botón pulsado');
                setLogged(!logged);
            } }>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
