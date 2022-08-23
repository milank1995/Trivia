import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import axios from 'axios';

import Question from './Question';
import BaseBackdrop from '../../Common/BaseBackdrop';

const QUESTIONS_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
const INITIAL_STATE = {
    questions: [],
    currentQuestion: 0,
    isLoading: true,
    answers: {}
};

const Quiz = () => {
    const navigate = useNavigate();

    /** Common State **/
    const [state, setState] = React.useState(INITIAL_STATE);

    /* Getting a questions array.  */
    const getQuestions = async () => {
        try {
            const response = await axios({
                url: QUESTIONS_URL
            });

            setState((prevState) => ({
                ...prevState,
                isLoading: false,
                questions: response.data.results
            }));
        } catch (error) {
            console.log({ error });
        }
    };

    /* Getting Selected Object */
    const getQuestionObject = () => {
        return {
            category: state.questions[state.currentQuestion].category,
            question: state.questions[state.currentQuestion].question,
            index: state.currentQuestion,
            length: state.questions.length
        };
    };

    /* Navigate to result page */
    const goToResult = (obj) => {
        navigate('/result', {
            state: {
                questions: state.questions,
                answers: { ...state.answers, [obj.index]: obj.value }
            }
        });
    };

    /* Navigate to next question */
    const goToNextQuestion = () => {
        setState((prevState) => ({
            ...prevState,
            currentQuestion: prevState.currentQuestion + 1
        }));
    };

    /* Save user's given answer */
    const saveAnswer = (obj) => {
        setState((prevState) => ({
            ...prevState,
            answers: { ...prevState.answers, [obj.index]: obj.value }
        }));
    };

    /** Event Handlers **/
    const onSaveAndContinueClickHandler = (obj) => {
        saveAnswer(obj);
        state.currentQuestion + 1 === state.questions.length
            ? goToResult(obj)
            : goToNextQuestion(obj);
    };

    /** useEffects **/
    useEffect(() => {
        (async () => {
            await getQuestions();
        })();

        return () => {
            setState(INITIAL_STATE);
        };
    }, []);

    return (
        <>
            <Stack sx={{ p: '48px 8px', width: '100%', maxWidth: '600px', mx: 'auto' }}>
                {state.isLoading ? (
                    <BaseBackdrop isOpen={true} />
                ) : (
                    <Stack gap={4}>
                        <Question
                            {...getQuestionObject()}
                            onSaveAndContinueClick={onSaveAndContinueClickHandler}
                        />
                        <Typography textAlign={'center'}>
                            {state.currentQuestion + 1} of {state.questions.length}
                        </Typography>
                    </Stack>
                )}
            </Stack>
        </>
    );
};

export default Quiz;
