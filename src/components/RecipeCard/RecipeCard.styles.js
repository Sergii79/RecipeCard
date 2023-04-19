import styled from "styled-components";

export const Name = styled.h2`
    margin-top: 10px;
    margin-bottom: 15px;
`;

export const RecipeInfo = styled.div`
    display: flex;
    gap: 10px;
`;

export const InfoBlock = styled.p`
    display: flex;
    gap: 5px;
    align-items: center;
    font-weight: 500;

    svg {
        color: tomato;
    }
`;

export const BadgeList = styled.div`
    display: flex;
    gap: 10px;
`;

export const Badge = styled.span`
    padding: 8px 12px;
    border: 1px solid ${props => props.theme.colors.black};
    border-radius: ${p => p.theme.radii.md};

    background-color: ${props => {
    console.log(props);
    return props.theme.colors.white;
    }}
`;




// styled(MyComponent)``;