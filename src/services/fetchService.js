export const getAllUsers = async () => {

    let response = await fetch('https://reqres.in/api/users');
    console.log(`Response: ${response}`)
    console.log(`Response: ${response.status}`)
    console.log(`OK?: ${response.ok}`)

    // Como recibimos un JSON como respuesta 200, debemos:
    return response.json();
}

export const getPagedUsers = async (page) => {

    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log(`Response: ${response}`)
    console.log(`Response: ${response.status}`)
    console.log(`OK?: ${response.ok}`)

    // Como recibimos un JSON como respuesta 200, debemos:
    return response.json();
}

export const getUserDetails = async (id) => {

    let response = await fetch(`https://reqres.in/api/users/${id}`);
    return response.json();

}


/**
 * --- Configuramos FETCH ---
 * 
 * Sacamos email y password de la api reqres.in, que en el caso de devolver un código 200, 
 * nos devolverá un token de acceso
 */
export const login = async (email, password) => {

    let body = {
        email: email,
        password: password,
    }

    let response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        mode: 'cors',
        // credentials: 'omit',
        // cache: 'no-cache',
        // headers: {
        //     'Content-type': 'application/json',
        // },
        body: JSON.stringify(body),

    });

    console.log('Response: ', response);
    console.log('Status: ', response.status);
    console.log('OK?: ', response.ok)

    return response.json();

}