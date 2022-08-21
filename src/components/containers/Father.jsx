import React, { useState } from 'react';
import ChildComponent from '../pure/Child';

const Father = () => {

    const [name, setName] = useState('Please, update the name if it proceed');

    function showMessage(text) {
        alert(`Message received: ${text}`);
    }

    function updateName(newName) {
        setName(newName)
    }

    return (
        <div style={ { backgroundColor: 'tomato', padding: '10px' } }>
            <ChildComponent name={ name } send={ showMessage } update={ updateName }></ChildComponent>
        </div>
    );
}

export default Father;
