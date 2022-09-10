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