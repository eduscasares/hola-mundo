import React, { useState } from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {

        console.log('Subscription to observable')
        getNumbers.subscribe(
            {
                next(newNumber) {
                    console.log(`New Number: ${newNumber}`);
                    setNumber(newNumber);
                    
                },
                error(error) {
                    alert('Something wen wrong: ', error);
                    console.log('Error in observable');
                },
                complete() {
                    alert('New number obtained successfully');
                    console.log('Finish receiving numbers');
                }
            }
        )
    }


    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={ obtainNewNumbers }>Obtain new number</button>
        </div>
    );
}

export default ObservableExample;
