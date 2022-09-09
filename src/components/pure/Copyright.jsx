import React from 'react';

// Material UI Components
import { Link, Typography } from '@mui/material';

const Copyright = () => {
    return (
        <div>
            <Typography variant='body2' color='GrayText' align='center'>
                { 'Copyright (C)' }
                <Link color='inherit' href="#">
                    Nordl 
                </Link>
                { new Date().getFullYear() }

            </Typography>
        </div>
    );
}

export default Copyright;
