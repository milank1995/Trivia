import {Stack} from "@mui/material";

const BaseIcon = ({src, width = '17px', height = '17px'}) => {
    return (
        <>
            <Stack width={width} height={height}>
                <img src={src} alt={''} width={'100%'} height={'100%'}/>
            </Stack>
        </>
    )
};

export default BaseIcon;