import { RecipeDifficulty } from "constants";
import styled from "styled-components";

export const Name = styled.h2`
    margin-top: 10px;
    margin-bottom: 15px;
    
    :hover {
        color: ${p => p.theme.colors.accent};
    }    
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
        color: ${p => p.theme.colors.accent};
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

    background-color: ${({ active, type, theme}) => {
        if (!active) {
            return theme.colors.white;
        }
        
        switch (type) {
            case RecipeDifficulty.easy:
                return theme.colors.green;
            case RecipeDifficulty.medium:
                return theme.colors.orange;
            case RecipeDifficulty.hard:
                return theme.colors.accent;
            default:
                throw new Error(`Unknown badge type ${type}`);
        }
    }};
    color: ${p => {
        return p.active ? p.theme.colors.white : p.theme.colors.black;
    }}; 
`;

// background-color: ${p => {
//         if (!p.active) {
//             return p.theme.colors.white;
//         }
        
//         switch (p.type) {
//             case 'easy':
//                 return p.theme.colors.green;
//             case 'medium':
//                 return p.theme.colors.orange;
//             case 'hard':
//                 return p.theme.colors.accent;
//             default:
//                 throw new Error(`Unknown badge type ${p.type}`);
//         }
//     }};

// export const Badge = styled.span`
//     padding: 8px 12px;
//     border: 1px solid ${props => props.theme.colors.black};
//     border-radius: ${p => p.theme.radii.md};

//     background-color: ${p => {
//         return p.active ? p.theme.colors.accent : p.theme.colors.white;
//     }};
    
//     color: ${p => {
//         return p.active ? p.theme.colors.white : p.theme.colors.black;
//     }};
// `;




// styled(MyComponent)``;