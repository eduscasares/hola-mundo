import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // Breve introducción a useState
    // const [variable, método para actualizarlo] = useState(valor inicial)
    const [age, setAge] = useState(26);

    const birthday = () => {
        // Actualizamos el estado
        setAge(age + 1)
    }

    return (
        <div>
            <h1>
                ¡Hola { props.name } desde un componente funcional!
            </h1>
            <h2>
                Tu edad es de: { age }
            </h2>
            <div>
                <button onClick={ birthday }>
                    ¡Es tu cumpleaños!
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
