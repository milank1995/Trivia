import { Stack } from '@mui/material';

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

export default BaseIcon;
