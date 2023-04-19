import PropTypes from 'prop-types'
import { TfiAlarmClock, TfiBarChart, TfiDashboard } from "react-icons/tfi";
import { RecipeInfo, InfoBlock, Name, BadgeList, Badge } from "./RecipeCard.styles";

export const RecipeCard = ({ item: { image, name, time, servings, calories, difficulty } }) => {    
    return (
        <div>
            <img src={image} alt={name} width="240" />
            <Name>{name}</Name>

            <RecipeInfo>
                <InfoBlock>
                    <TfiAlarmClock size={24} />
                    <span>{time}min</span>
                </InfoBlock>
                <InfoBlock>
                    <TfiDashboard size={24} />
                    <span>{servings}servings</span>
                </InfoBlock>
                <InfoBlock>
                    <TfiBarChart size={24} />
                    <span>{calories}calories</span>
                </InfoBlock>
            </RecipeInfo>

            <div>
                <h3>Difficulty</h3>
                <BadgeList>
                    <Badge active={difficulty === 'easy'}>Easy</Badge>
                    <Badge active={difficulty === 'Medium'}>Medium</Badge>
                    <Badge active={difficulty === 'Hard'}>Hard</Badge>
                    {/* ПРИКЛАД <Badge active={difficulty === 'Hard'}>Hard {difficulty === 'hard' && 'ACTIVE'}</Badge> */}
                </BadgeList>
            </div>
        </div>);
};
 
RecipeCard.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        difficulty: PropTypes.oneOf(["easy", "medium", "hard"]).isRequired,
    }).isRequired,
};