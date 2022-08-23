import ResultDisplay from './ResultDisplay';
import React from 'react';

const ResultDisplayContainer = ({ list }) => {
    return (
        <>
            {list.map((obj, index) => (
                <ResultDisplay isValid={obj.isValid} question={obj.question} key={index} />
            ))}
        </>
    );
};

export default ResultDisplayContainer;
