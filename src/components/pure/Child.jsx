import React, { useRef } from 'react';

const ChildComponent = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton() {
        const text = messageRef.current.value;
        alert(`Text in input: ${ text }`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`)
    }

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div style={ { backgroundColor: 'cyan', padding: '30px', textAlign: 'center' } }>
            {/* <p onMouseOver={ () => console.log('On mouse over') }>Child Component</p>

            <button onClick={ () => console.log('Button 1 pressed')}>
                Button 1
            </button>

            <button onClick={ pressButton }>
                Button 2
            </button>

            <button onClick={ () => pressButtonParams('Hello') }>
                Button 3
            </button>

            <input 
                placeholder = 'Send a text to your father' 
                onFocus = { () => console.log('Input focused') } 
                onChange = { (e) => console.log('Input has changed:', e.target.value) }
                onCopy = { () => console.log('Copied text from Input') }
                ref = { messageRef }
            />
            <button onClick={ () => send( messageRef.current.value ) } >
                Send message
            </button> */}

            <div style={ { marginTop: '20px' } }>

                <form onSubmit={ submitName }>
                    <h2>Update your name</h2>
                    <input 
                        type = 'text'
                        placeholder = 'New name'
                        ref = { nameRef }
                    />
                    <button type='submit'>
                        Update Name
                    </button>
                </form>

                <p>{ name }</p>

            </div>
        </div>
    );
}

export default ChildComponent;
