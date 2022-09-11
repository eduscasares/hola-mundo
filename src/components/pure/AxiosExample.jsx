import React, { useState, useEffect } from 'react';
import { getRandomUser } from '../../services/axiosService';

const AxiosExample = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
       obtainUser();
    })

    const obtainUser = () => {
        getRandomUser()
        .then((response) => {
            if(response.status === 200) {
                setUser(response.data.results);
            }
        })
        .catch((error) => alert('Something went wrong: ', error))
    }


    return (
        <div>
            <h1>Axios example</h1>

            { user !== null ? 
                (
                    <div>
                        <h2>User details:</h2>
                        <p>Name: {user.name.first}</p>
                        <p>Surname: {user.name.last}</p>
                        <p>Email: {user.name.email}</p>
                        {/* <img src={user.picture} alt="Avatar" /> */}
                    </div>
                ) :
                (
                    <div>
                        <p>Generate a new user</p>
                        <button onClick={ obtainUser }>Generate random user</button>
                    </div>
                )
            }
        </div>
    );
}

export default AxiosExample;
