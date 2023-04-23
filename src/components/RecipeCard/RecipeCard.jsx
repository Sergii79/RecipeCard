import PropTypes from 'prop-types'
import {
    TfiAlarmClock,
    TfiBarChart,
    TfiDashboard    
} from "react-icons/tfi";
import {
    MdDeleteForever,
    MdZoomIn
} from "react-icons/md";
import {
    Container,
    RecipeInfo,
    InfoBlock,
    Image,
    Meta,
    Name,
    BadgeList,
    Badge,
    Actions

} from "./RecipeCard.styles";
import { RecipeDifficulty } from 'constants';

import { Component } from 'react';

import { ImageModal } from "../ImageModal/ImageModal";

export class RecipeCard extends Component {
    state = {
        selectedImg: null
    }

    setSelectedImage = () => {
        console.log(this.props.item.image);
        this.setState({
            selectedImg: this.props.item.image,
        })
    };

    closeModal = () => {
        this.setState({
            selectedImg: null,
        })
    };

    render() {
        const { selectedImg } = this.state
        const { item: { id, image, name, time, servings, calories, difficulty }, onDelete } = this.props;
        return (
        <Container>
            <Image src={image} alt={name} />
            <Meta>
                <Name>{name}</Name>

                <RecipeInfo>
                    <InfoBlock>
                        <TfiAlarmClock size={24} />
                        <span>{time} min</span>
                    </InfoBlock>
                    <InfoBlock>
                        <TfiDashboard size={24} />
                        <span>{servings} servings</span>
                    </InfoBlock>
                    <InfoBlock>
                        <TfiBarChart size={24} />
                        <span>{calories} calories</span>
                    </InfoBlock>
                </RecipeInfo>

                <div>
                    <h3>Difficulty</h3>
                    <BadgeList>
                        <Badge active={difficulty === RecipeDifficulty.easy} type={RecipeDifficulty.easy}>Easy</Badge>
                        <Badge active={difficulty === RecipeDifficulty.medium} type={RecipeDifficulty.medium}>Medium</Badge>
                        <Badge active={difficulty === RecipeDifficulty.hard}type={RecipeDifficulty.hard}>Hard</Badge>
                        {/* ПРИКЛАД <Badge active={difficulty === 'Hard'}>Hard {difficulty === 'hard' && 'ACTIVE'}</Badge> */}
                    </BadgeList>
                </div>
                <Actions>
                    <button aria-label='Delete' onClick={() => onDelete(id)}>
                        <MdDeleteForever size={20} />
                    </button>
                    <button aria-label='Zoom' onClick={this.setSelectedImage}>
                        <MdZoomIn size={20} />
                    </button>
                </Actions>  
                    <ImageModal
                        isOpen={selectedImg !== null}
                        onClose={this.closeModal}
                        image={selectedImg} />    
            </Meta>
        </Container>);
    }
} 
 
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