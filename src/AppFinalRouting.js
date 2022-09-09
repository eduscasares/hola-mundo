import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import Dashboard from './pages/dashboard/Dashboard';
import LoginPage from './pages/auth/LoginPage';

function AppFinalRouting() {

    // TODO: Change to value from sessionStorage (or something dymanic)
    let loggedIn = true;

    return (

        <div>

            <Router>
                <Routes>
                    {/* Conditional selection root */}
                    <Route exact path='/' element={
                        loggedIn ? 
                            (<Navigate replace to={'/dashboard'} />) : 
                            (<Navigate replace to={'/login'} />) 
                    } />

                    {/* Direct route to login */}
                    <Route exact path='/login' element={ <LoginPage />  }/>

                    {/* Direct route to dashboard with condition of logged */}
                    <Route exact path='/dashboard' element={
                        loggedIn ?
                        (<Dashboard />) : 
                        (<Navigate replace to={'/login'} />) 
                    } />

                    <Route element={ <NotFoundPage /> } />
                </Routes>
            </Router>

        </div>

    );
}

export default AppFinalRouting;
