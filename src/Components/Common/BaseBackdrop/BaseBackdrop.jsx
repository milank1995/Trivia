import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

/* This component is used to show a loader */
const BaseBackdrop = ({ isOpen, onClick = (e) => e }) => {
    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isOpen}
                onClick={onClick}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
};

export default BaseBackdrop;
