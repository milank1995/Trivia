import React from 'react';
import { Button, FormControlLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material';

const INITIAL_STATE = {
    selectedValue: ''
};

const Question = ({ index, category, question, onSaveAndContinueClick }) => {
    const [state, setState] = React.useState(INITIAL_STATE);

    /* This function help into convert simple string to DOM string. */
    const createMarkup = (value) => ({
        __html: value
    });

    /** Event Handlers **/
    const onSaveAndContinueClickHandler = () => {
        setState(INITIAL_STATE);
        onSaveAndContinueClick({ index, value: state.selectedValue });
    };

    const onRadioGroupChangeHandler = (e) => {
        setState((prevState) => ({
            ...prevState,
            selectedValue: e.target.value
        }));
    };

    return (
        <>
            <Stack gap={5.5}>
                <Stack>
                    <Typography variant={'h4'}>{category}</Typography>
                </Stack>
                <Stack>
                    <Stack border={'2px solid #000'} p={4} gap={4}>
                        <Typography
                            fontSize={'19px'}
                            dangerouslySetInnerHTML={createMarkup(question)}
                        />
                        <RadioGroup
                            value={state.selectedValue}
                            onChange={onRadioGroupChangeHandler}>
                            <FormControlLabel value="True" control={<Radio />} label="True" />
                            <FormControlLabel value="False" control={<Radio />} label="False" />
                        </RadioGroup>
                        <Stack alignItems={'center'}>
                            <Button
                                variant={'contained'}
                                onClick={onSaveAndContinueClickHandler}
                                disabled={!state.selectedValue}>
                                Save and Continue
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

export default Question;
