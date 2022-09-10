import React, { useState, useEffect } from 'react';
import { getAllUsers, getPagedUsers, getUserDetails } from '../../services/fetchService';

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
            alert(`Something wen wrong ${ error } `);
        })
        .finally(() => {
            console.log('Ending obtaining users');
            console.table(selectedUser);
        });
    }


    return (
        <div>
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
                { selectedUser && (
                    <div>
                        <h3>User details: </h3>
                        <p>Name: {selectedUser.first_name}</p>
                        <p>Last name: {selectedUser.last_name}</p>
                        <p>Email: {selectedUser.email}</p>
                        <img src={selectedUser.avatar} alt={selectedUser.first_name} style={{height: '50px', width: '50px', borderRadius: '50px'}} />
                    </div>
                )}

            </div>

        </div>
    );
}

export default FetchExample;
