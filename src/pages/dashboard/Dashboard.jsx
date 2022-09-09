import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';
import MenuListItem from '../../components/pure/MenuListItem';

const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={ () => navigate('/login') }>Log out</Button>
            {/* <MenuListItem></MenuListItem> */}
            <Copyright></Copyright>
        </div>
    );
}

export default Dashboard;
