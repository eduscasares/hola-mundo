import React from 'react';
import { useNavigate } from 'react-router-dom';

// Material UI Components
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Settings } from '@mui/icons-material';

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':  
            return <Home />
        case 'TASKS':  
            return <Home />
        case 'SETTINGS':  
            return <Settings />
        default:
            return <Home />
    }
}

const MenuListItem = ({list}) => {

    const navigate = useNavigate();

    return (
        <div>
            <List>
                { list.map(({text, path, icon}, index) => {
                    return (
                        <ListItem key={index} onClick={ () => navigate(path) }>
                            <ListItemIcon>
                                {getIcon(icon)}
                            </ListItemIcon>

                            <ListItemText primary={text} />
                        </ListItem>
                    )
                }) }
            </List>
        </div>
    );
}

export default MenuListItem;
