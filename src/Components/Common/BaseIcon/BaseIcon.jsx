import { Stack } from '@mui/material';
import PropTypes from 'prop-types';

/** 'BaseIcon' is common image container. **/
const BaseIcon = ({ src, alt = '', width = '17px', height = '17px' }) => {
    return (
        <>
            <Stack width={width} height={height}>
                <img src={src} alt={alt} width={'100%'} height={'100%'} />
            </Stack>
        </>
    );
};

BaseIcon.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

export default BaseIcon;
