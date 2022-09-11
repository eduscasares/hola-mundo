import React, { useState, useEffect } from 'react';
import { getAllUsers, getPagedUsers, getUserDetails, login } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [pages, setPages] = useState(2);

    console.log(typeof(users));

    useEffect(() => {
        obtainUsers();
    }, [])

    //Hacemos una función antes que luego llamaremos en el useEffect para poder utilizarla en un onClick
    const obtainUsers = () => {

        getAllUsers()
            .then((response) => {
                console.log(`All users: ${ response.data }`);
                setUsers(response.data);
                setPages(response.total_pages);
                setUsersPerPage(response.per_page);
                setTotalUsers(response.total);
            })   
            .catch((error) => {
                alert(`Something wen wrong ${ error } `);
            })
            .finally(() => {
                console.log('Ending obtaining users');
                console.table(users);
            });

    }
    
    const obtainPagedUsers = (page) => {

        getPagedUsers(page)
            .then((response) => {
                console.log(`All paged users: ${ response.data }`);
                setUsers(response.data);
                setPages(response.total_pages);
                setUsersPerPage(response.per_page);
                setTotalUsers(response.total);
            })   
            .catch((error) => {
                alert(`Something wen wrong ${ error } `);
            })
            .finally(() => {
                console.log('Ending obtaining users');
                console.table(users);
            });
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
        .then((response) => {
            console.log(`Selected user: ${ response.data }`);
            setSelectedUser(response.data);
        })   
        .catch((error) => {
            alert(`Something went wrong ${ error } `);
        })
        .finally(() => {
            console.log('Ending obtaining users');
            console.table(selectedUser);
        });
    }

    const authLogin = () => {
        login('eve.holt@reqres.in', 'cityslicka')
        .then((response) => {
            console.log(`TOKEN: ${ response.token }`);
            sessionStorage.setItem('token', response.token)
            })   
            .catch((error) => {
                alert(`Something went wrong ${ error } while login user`);
            })
            .finally(() => {
                console.log('Ending login users. Navigate to home...');
            });
    }

    return (
        <div>

            <button onClick={ () => authLogin() }>Do Login</button>

            <h2>Users: </h2>
            { users.map((user, index) => 
                (<p key={index} onClick={ () => obtainUserDetails(user.id) }>
                    {user.first_name} {user.last_name}
                </p>)
                )
            }

            <p>Showing {usersPerPage} users of {totalUsers} in total</p>

            <button onClick={ () => obtainPagedUsers(1) }>
                1
            </button>

            <button onClick={ () => obtainPagedUsers(2) }>
                2
            </button>

            <div>

                { selectedUser != null ? 
                    (
                        <div>
                            <h3>User details: </h3>
                            <p>Name: {selectedUser.first_name}</p>
                            <p>Last name: {selectedUser.last_name}</p>
                            <p>Email: {selectedUser.email}</p>
                            <img src={selectedUser.avatar} alt={selectedUser.first_name} style={{height: '150px', width: '150px', borderRadius: '150px'}} />
                        </div>
                    ) :
                    (
                        <h6>Please click on a User to see its details</h6>
                    )
                }

            </div>

        </div>
    );
}

export default FetchExample;
