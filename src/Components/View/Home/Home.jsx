import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    /** Event Handlers **/
    const onBeginButtonClickHandler = () => {
        navigate('/quiz');
    };

    return (
        <>
            <Stack
                sx={{
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 8,
                    width: '100%',
                    p: '48px 8px'
                }}>
                <Typography variant={'h4'}>Welcome to the Trivia Challenge!</Typography>
                <Stack gap={5}>
                    <Typography fontSize={'20px'}>
                        You will be presented with 10 True and False question.
                    </Typography>
                    <Typography fontSize={'20px'}>Can you score 100%?</Typography>
                </Stack>
                <Button
                    size={'small'}
                    sx={{ fontSize: '17px' }}
                    onClick={onBeginButtonClickHandler}>
                    Begin
                </Button>
            </Stack>
        </>
    );
};

export default Home;
