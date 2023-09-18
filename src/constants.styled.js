import styled from 'styled-components';

export const AllButton = styled.button`
    border: none;
    border-radius: ${p => p.theme.radii.sm};

    :hover {
        background-color: ${p => p.theme.colors.grey}; 
        color: ${p => p.theme.colors.red};
        box-shadow: inset 0px 0px 5px #3c3c3c;
    }
`