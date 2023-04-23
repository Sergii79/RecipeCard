import { RecipeDifficulty } from "constants";
import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const Name = styled.h2`
    margin-top: 10px;
    margin-bottom: 15px;
    
    :hover {
        color: ${p => p.theme.colors.accent};
    }

    &.active {}
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  flex-grow: 1;
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

export const Actions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
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