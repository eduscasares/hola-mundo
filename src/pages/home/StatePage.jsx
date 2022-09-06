import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const StatePage = () => {

    const location = useLocation(); // No nos servirá si tenemos que utilizar los parámetros de búsqueda de URL
    const [searchParams] = useSearchParams();

    console.log(searchParams.get('online'))

    // console.log('Query Params:', location.search); // Query params sent
    // console.log(location.state)

    return (
        <div>
            <h1>State: { searchParams.get('online') === 'true' ? 'The user is Online' : 'The user is Offline'}</h1>
        </div>
    );
}

export default StatePage;
