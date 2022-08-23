import React, { useEffect, useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ResultDisplayContainer from './ResultDisplayContainer';

const INITIAL_STATE = {
    questionsList: [],
    correctAnswers: 0,
    totalQuestions: 0
};

const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();

    /** Common State **/
    const [state, setState] = useState(INITIAL_STATE);

    const setQuestionList = () => {
        const questionsList = location.state.questions.map(
            ({ question, correct_answer }, index) => ({
                question: question,
                isValid: location.state.answers[index] === correct_answer
            })
        );

        setState((prevState) => ({
            ...prevState,
            questionsList,
            totalQuestions: questionsList.length,
            correctAnswers: questionsList.filter(({ isValid }) => isValid).length
        }));
    };

    /** Event Handlers **/
    const onBeginButtonClickHandler = () => {
        navigate('/quiz');
    };

    const onHomeButtonClickHandler = () => {
        navigate('/home');
    };

    /** useEffect **/
    useEffect(() => {
        if (location.state && location.state.questions && location.state.answers) {
            setQuestionList();
        } else {
            onHomeButtonClickHandler();
        }
    }, []);

    return (
        <>
            <Stack
                sx={{
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 6,
                    p: '48px 8px',
                    width: '100%',
                    maxWidth: '600px',
                    mx: 'auto'
                }}>
                <Stack>
                    <Typography variant={'h4'}>You scored</Typography>
                    <Typography variant={'h4'}>
                        {state.correctAnswers}
                        <>&nbsp;&#x2f;&nbsp;</>
                        {state.totalQuestions}
                    </Typography>
                </Stack>
                <Stack gap={2.5}>
                    <ResultDisplayContainer list={state.questionsList} />
                </Stack>
                <Stack direction={'row'} gap={3}>
                    <Button
                        size={'small'}
                        sx={{ fontSize: '17px' }}
                        onClick={onBeginButtonClickHandler}>
                        Play Again?
                    </Button>
                    <Button
                        size={'small'}
                        sx={{ fontSize: '17px' }}
                        onClick={onHomeButtonClickHandler}>
                        Go to Home
                    </Button>
                </Stack>
            </Stack>
        </>
    );
};

export default Result;
