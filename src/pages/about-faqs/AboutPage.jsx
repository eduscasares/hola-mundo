import React from 'react';
import { useLocation, useNavigate } from'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log(`We are in route: ${location.pathname}`);

    return (
        <div>
            <h1>About | FAQs Page</h1>
            <div>
                <button onClick={() => navigate('/')}>Go to home</button>
                <button onClick={ () => navigate(-1) }>Go back</button>
                <button onClick={ () => navigate(+1) }>Go forward</button>
            </div>
        </div>
    );
}

export default AboutPage;
