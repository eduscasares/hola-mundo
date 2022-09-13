import axios from 'axios';


/**
 * Login method to reqres.in endpoint
 * @param { string } email 
 * @param { string } password 
 */

export const login = (email, password) => {

    let body = {
        email: email,
        password: password,
    }

    /**
     * Returns the response with a Promise
     */
    return axios.post('https://reqres.in/api/login', body)

}


// Obtain all users

export const getAllUser = () => {
    return axios.get('https://reqres.in/api/users');
}

// Obtains all users with pagination

export const getAllPagedUser = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}

// Obtain user by ID

export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`);
}

// Create User

export const createUser = (name, job) => {

    let body = {
        name: name,
        job: job,
    }

    return axios.post('https://reqres.in/api/users', body)
}

// Update User

export const updateUser = (id, name, job) => {

    let body = {
        name: name,
        job: job,
    }

    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

// Delete User

export const deleteUser = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}