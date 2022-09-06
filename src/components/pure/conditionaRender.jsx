import React, { useState } from 'react';

// Renderizado condicional con operadores ternarios
    // ? (Expresión true) && expresión => se renderiza la expresión
    // ? (Expresión false) && expresión => no se renderiza la expresión

    // ? Estilo para usuario loggeado
    const loggedStyles = {
        color: 'white',
        backgroundColor: 'tomato',
    }

    // ? Estilo para usuario no logeado
    const unLoggedStyles = {
        color: 'white',
        backgroundColor: 'green',
        fontWeigth: 'bold',
    }

    // Login / Logout buttons (Renderizado de componentes de manera condicional)

    const LoginButton = ({ loginAction, propStyles }) => {
        return(
            <button style={propStyles} onClick={ loginAction }>Login</button>
        )
    }

    const LogoutButton = ({ logoutAction, propStyles }) => {
        return(
            <button style={propStyles} onClick={ logoutAction }>Logout</button>
        )
    }



const ConditionaRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNmessages] = useState(0);

    let addMessages = () => {
        setNmessages(nMessages + 1);
    }

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    let conditionalButton;

    if(access) {
        conditionalButton = <LogoutButton propStyles={ loggedStyles } logoutAction={logoutAction}></LogoutButton>
    } else {
        conditionalButton = <LoginButton propStyles={ unLoggedStyles } loginAction={loginAction}></LoginButton>
    }


    return (
        <div>
            {/* Conditional Button */}
            { conditionalButton }

            {/* Unread Messages */}
            {/* { nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message...</p>}
            { nMessages > 1 && <p>You have {nMessages} new messages...</p>}
            { nMessages === 0 && <p>There aren't new messages...</p>} */}

           
            {/* Con ternarios */}
            {/* { nMessages > 0 && nMessages === 1 
                ? <p>You have {nMessages} new message...</p> 
                : <p>There aren't new messages...</p> } */}

            {/* { access 
                ? nMessages !== 0 
                    ? nMessages === 1 
                        ?  <p>You have {nMessages} new message...</p> 
                        :  <p>You have {nMessages} new messages...</p> 
                    : <p>There aren't new messages...</p> 
                : null } */}

            { access ? (
                <div>
                    { nMessages > 0 ? 
                    <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}...</p> :
                    <p>There are no messages</p> 
                    }
                    <button onClick={ addMessages }>
                        { nMessages === 0 ? 'Add your first message' : 'Add a new message' }
                    </button>
                </div>) : null }
            
        
            

        </div>
    );
}

export default ConditionaRender;
