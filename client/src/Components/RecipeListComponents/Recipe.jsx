import React from 'react';
import IngredientsList from './IngredientsList.jsx';
import InstructionsList from './InstructionsList.jsx';
import styled from 'styled-components';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      details: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMoreClick = this.handleMoreClick.bind(this);
    this.checkOpened = this.checkOpened.bind(this);
  }

  handleClick(e) {
    this.props.saveRecipe(this.props.recipe);
  }
  handleMoreClick() {
    if (this.state.open === true) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true }, () => {
        this.props.getDetails(this.props.recipe.id);
      });
    }
  }

  checkOpened() {
    let index = this.props.details
      .map((detail) => Object.keys(detail)[0])
      .indexOf(this.props.recipe.id.toString());
    if (index !== -1) {
      console.log(this.props.details[index]);
      this.setState({
        details: this.props.details[index][this.props.recipe.id],
      });
    }
  }

  componentDidMount() {
    this.checkOpened();
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.checkOpened();
    }
  }

  render() {
    let extendedInfo = null;
    let extendArrow = '▼';
    if (this.state.open === true && this.state.details) {
      extendedInfo = (
        <div>
          <IngredientsList
            ingredients={this.state.details.extendedIngredients}
          />
          <InstructionsList
            instructions={this.state.details.analyzedInstructions[0].steps}
          />
        </div>
      );
      extendArrow = '▲';
    }
    let star = (
      <StyledFavoriteButtonOff onClick={this.handleClick}>
        ☆
      </StyledFavoriteButtonOff>
    );

    if (
      this.props.saved.map((recipe) => recipe.id).includes(this.props.recipe.id)
    ) {
      star = (
        <StyledFavoriteButtonOn onClick={this.handleClick}>
          ★
        </StyledFavoriteButtonOn>
      );
    }

    let used = null;
    let missed = null;
    let unused = null;
    let usedIngs = this.props.recipe.usedIngredients.filter(
      (rec) => rec[0] !== null
    );
    let missedIngs = this.props.recipe.missedIngredients.filter(
      (rec) => rec[0] !== null
    );
    let unusedIngs = this.props.recipe.unusedIngredients.filter(
      (rec) => rec[0] !== null
    );

    if (usedIngs.length > 0) {
      let usedStr = usedIngs.join(', ');
      used = <div>Used: {usedStr}</div>;
    }
    if (missedIngs.length > 0) {
      let missedStr = missedIngs.join(', ');
      missed = <div>Missed: {missedStr}</div>;
    }
    if (unusedIngs.length > 0) {
      let unusedStr = unusedIngs.join(', ');
      unused = <div>Unused: {unusedStr}</div>;
    }
    return (
      <StyledRecipeTile>
        <StyledImage
          src={this.props.recipe.image}
          alt={this.props.recipe.image}
        />
        <StyledRecipeInfo>
          <div>{this.props.recipe.title}</div>
          {used}
          {missed}
          {unused}
          {extendedInfo}
          <button onClick={this.handleMoreClick}>
            {extendArrow} More Info
          </button>
        </StyledRecipeInfo>
        {star}
      </StyledRecipeTile>
    );
  }
}

const StyledRecipeTile = styled.li`
  list-style-type: none;
  border-radius: 15px;
  margin-bottom: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledImage = styled.img`
  align-self: center;
  border-radius: 10px;
  width: 100%;
  max-width: 40%;
  margin: 1%;
`;
const StyledRecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 2%;
`;
const StyledFavoriteButtonOn = styled.button`
  background: rgb(244, 240, 187);
  border: 2px solid;
  border-color: #ff785a;
  color: #ff785a;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin: 10px;
  font-size: 2rem;
  :hover {
    background: rgb(224, 220, 167);
  }
`;
const StyledFavoriteButtonOff = styled.button`
  background: rgb(244, 240, 187);
  border: 2px solid;
  border-color: rgb(135, 195, 143);
  color: rgb(135, 195, 143);
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin: 10px;
  font-size: 2rem;
  :hover {
    background: rgb(224, 220, 167);
  }
`;

export default Recipe;
