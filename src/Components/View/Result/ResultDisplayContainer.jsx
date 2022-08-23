import React from 'react';
import PropTypes from 'prop-types';

import ResultDisplay from './ResultDisplay';

const ResultDisplayContainer = ({ list }) => {
    return (
        <>
            {list.map((obj, index) => (
                <ResultDisplay isValid={obj.isValid} question={obj.question} key={index} />
            ))}
        </>
    );
};

ResultDisplayContainer.propTypes = {
    list: PropTypes.array.isRequired
};

export default ResultDisplayContainer;
