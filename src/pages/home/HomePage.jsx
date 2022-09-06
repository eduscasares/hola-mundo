import React from 'react';
import { useNavigate, createSearchParams, Link } from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate();
    const goToParams = () => {
        navigate(
        {
            pathname: '/online-state',
            search: createSearchParams({
                online: false,
            }).toString(),
        }
        )
    }

    return (
        <div>
            <h1>Home Page</h1>

            <div>
                <button onClick={ () => navigate('/profile') }>Go to profile</button>
                <button onClick={ () => navigate(-1) }>Go back</button>
                <button onClick={ () => navigate(+1) }>Go forward</button>

                {/* <Link
                    to='/online-state'
                    state={{
                        online: false,
                    }}   
                >
                    Go to page with state / Query Params
                </Link> */}

                <button onClick={ goToParams } >
                    Go to page with state / Query Params
                </button>
            </div>
        </div>
    );
}

export default HomePage;
