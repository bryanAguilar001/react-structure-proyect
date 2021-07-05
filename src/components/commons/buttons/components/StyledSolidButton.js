import styled from 'styled-components';

const StyledSolidButton = styled.button`
    border: none;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, .3);
    border-radius: 5px;
    background: white;
    color: black;
    pad: 7px 10px;
    font-size: 16px;
    margin: 5px;
    transition: .75s all ease-in-out;

    &:hover {
        cursor: pointer;
        background: black;
        border: 1px solid black;
        color: white;
    }

    ${props => props.type === 'primary' && `
        background: #3535b2;
        color: white;
    `}

    ${props => props.type === 'danger' && `
        background: #b21111;
        color: white;
    `}

    ${props => props.type === 'success' && `
        background: #46a346;
        color: white;
        &:hover {
            background: white;
            border: 1px solid #46a346;
            color: #3535b2;
        }
    `}
`;

export default StyledSolidButton;