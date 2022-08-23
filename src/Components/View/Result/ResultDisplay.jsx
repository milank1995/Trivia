import React, { useState, useEffect } from 'react';
import {Stack, Typography} from "@mui/material";

/* Required components and files */
import BaseIcon from "../../Common/BaseIcon";
import PlusIcon from "../../../Icons/plus.svg";
import MinusIcon from "../../../Icons/minus.svg";

/* This 'ResultDisplay' have been created for ... */
const ResultDisplay = ({isValid, question}) => {

    const createMarkup = (value) => ({
        __html: value
    });

    /** UseEffect **/
    useEffect(()=>{},[]);

    return (
        <>
            <Stack direction={'row'} gap={4}>
                <Stack p={'4px 0'}>
                    <BaseIcon src={isValid ? PlusIcon : MinusIcon}/>
                </Stack>
                <Typography dangerouslySetInnerHTML={createMarkup(question)} fontSize={'18px'} textAlign={'start'}/>
            </Stack>
        </>
    );
};

export default ResultDisplay;