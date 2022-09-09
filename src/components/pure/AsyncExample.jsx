import React from 'react';

const AsyncExample = () => {

    /**
     * Con Async determinamos que la función es asíncrona, y con Await indicamos dónde debe pararse 
     * el procesamiento de la función a esperar a que se resuelva.
     */
    async function generateNumber() {
        return 1; // Este valor debemos tenerlo antes de disparar la otra función
    }

    function obtainNumber() {
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}}`))
    }

    function obtainPromiseNumber() {
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}}`))
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    /**
     * En lugar de resolverla con un await, lo podemos hacer con una PROMISE
     */
    async function saveSessionStorage(key, value) {

        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key))

    }

    function showStorage() {
        saveSessionStorage('name', 'Eduardo')
            .then((response) => {
                let value = response;
                alert(`Saved name is: ${value}`);
            })
            .catch((error) => alert(`Something went wrong: ${error}}`))
            .finally(() => console.log(`Name saved and retrieved successfully`))

    }

    /**
     * Creamos una Promise y luego esperaremos a resolverla
     */
    async function obtainMessage() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => { resolve('Hello World!') }, 2000)
        });

        let message = await promise;

        await alert(`Message received: ${message}`);

    }

    const returnError = async() => {
        await Promise.reject(new Error('Oops something went wrong'));
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Received ok: ${response}`))
            .catch((error) => { alert(`Retrieved an error: ${error}`)})
            .finally(() => alert(`Successfully executed`));
    }

    const urlNotFound = async() => {
        try {
            let response = await fetch('https://invalidURL.es');
            alert(`Response: ${JSON.stringify(response)}`);
        } catch (error) {
            alert(`Retrieved an error: ${error}`)
        }
    }

    const multiplePromises = async () => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Something went wrong with your URLs: ${error} (Check your console)`))
    }

    return (
        <div>
            <h1>Ejemplos de asincronía</h1>
            <button onClick={ obtainNumber }>Obtain number</button>
            <button onClick={ obtainPromiseNumber }>Obtain Promised number</button>
            <button onClick={ showStorage }>Save name and show</button>
            <button onClick={ obtainMessage }>Send Message to the future</button>
            <button onClick={ consumeError }>Obtain Error</button>
            <button onClick={ urlNotFound }>Request unkown URL</button>
            <button onClick={ multiplePromises }>Get Multiple Promises</button>
        </div>
    );
}

export default AsyncExample;
