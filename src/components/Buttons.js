import styled from 'styled-components';

// Colors
const Primary100 = '#639977'
const Primary200 = '#9DCCAE'
const Primary300 = '#17823F'


// Buttons
const Button = styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: 'Roboto';
`;

const PrimaryButton = styled(Button)`
    background-color: ${Primary100};
    border: none;
    color: white;
`;

export const SecondaryButton = styled(Button)`
    background-color: ${Primary200};
    border: none;
    color: white;
`;

export const TertiaryButton = styled(Button)`
    background-color: ${Primary300};
    border: none;
    color: white;
`;



export default PrimaryButton;