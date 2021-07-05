import React from 'react';
import StyledSolidButton from './components/StyledSolidButton';

const SolidButton = ({onClick, props, text, type}) => {
    return (
        <>
            <StyledSolidButton onClick={onClick} {...props} type={type}>{text}</StyledSolidButton>
        </>
    )
}

export default SolidButton;