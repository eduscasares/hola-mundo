import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginFormik from './components/pure/forms/LoginFormik';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

    let logged = false;

    let taskList = [
        {
            id: 1,
            name: 'Task 1',
            description: 'My first task',
        },
        {
            id: 2,
            name: 'Task 2',
            description: 'My second task',
        }
    ]

    useEffect(() => {
        logged = localStorage.getItem('credentials');
        console.log('User logged?', logged);
    }, []);

    return (

        <div>

            <Router>

                <div>

                    <aside>
                        <Link to={'/'}>| Home |</Link>
                        <Link to={'/about'}> About |</Link>
                        <Link to={'/faqs'}> FAQs |</Link>
                        <Link to={'/tasks'}> Tasks |</Link>
                        <Link to={'/login'}> Login |</Link>
                        <Link to={'/task/1'}> Task 1 |</Link>
                        <Link to={'/task/2'}> Task 2 |</Link>
                        <Link to={'/online-state'}> State Page |</Link>
                    </aside>

                    <main>

                        <Routes>
                            <Route exact path='/' element={ <HomePage /> } />
                            <Route exact path='/online-state' element={ <StatePage /> } />
                            <Route exact path='/login' element= { 
                                logged ? 
                                    ( <Navigate replace to={'/'} /> ) :
                                    ( <LoginFormik /> ) 
                            } />

                            <Route path='/about' element={ <AboutPage /> } />
                            <Route path='/faqs' element={ <AboutPage /> } />
                            <Route exact path='/profile' element= { 
                                logged ? 
                                    ( <ProfilePage /> ) :
                                    ( <Navigate replace to={'/login'} /> )
                            } />


                            <Route exact path='/tasks/*' element={ <TaskPage /> } />
                            <Route exact path='/task/:taskId/*' element={ <TaskDetailPage tasks={ taskList } /> } />


                            {/* Dejamos siempre al final la ruta al 404 */}
                            <Route path='*' element={ <NotFoundPage /> }/>
                        </Routes>

                    </main>

                </div>

            </Router>

        </div>

    );
}

export default AppRoutingOne;
