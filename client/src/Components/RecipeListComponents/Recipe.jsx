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
    let extendedIngredients = null;
    let extendedInstructions = null;
    let extendArrow = '▼';
    if (this.state.open === true && this.state.details) {
      if (this.state.details.extendedIngredients) {
        extendedIngredients = (
          <IngredientsList
            ingredients={this.state.details.extendedIngredients}
          />
        );
      }
      if (this.state.details.analyzedInstructions[0]) {
        extendedInstructions = (
          <InstructionsList
            instructions={this.state.details.analyzedInstructions[0].steps}
          />
        );
      } else if (this.state.details.instructions) {
        extendedInstructions = <div>{this.state.details.instructions}</div>;
      }
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
    let usedIngs = this.props.recipe.usedIngredients
      .filter((rec) => rec[0] !== null)
      .map((ing) => {
        return ing.original;
      });
    let missedIngs = this.props.recipe.missedIngredients
      .filter((rec) => rec[0] !== null)
      .map((ing) => {
        return ing.original;
      });
    let unusedIngs = this.props.recipe.unusedIngredients
      .filter((rec) => rec[0] !== null)
      .map((ing) => {
        return ing.original;
      });

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
          <Extended>
            {extendedIngredients}
            {extendedInstructions}
          </Extended>
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
const Extended = styled.div`
  margin: 5px;
`;
const StyledFavoriteButtonOn = styled.button`
  background: #eba16f;
  border: 2px solid;
  border-color: #333333;
  color: #333333;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin: 10px;
  font-size: 2rem;
  :hover {
    background: #fcfaf9;
    border-color: #5e5e5e;
    color: #5e5e5e;
  }
`;
const StyledFavoriteButtonOff = styled.button`
  background: #f4d1ae;
  border: 2px solid;
  border-color: #5e5e5e
  color: #5e5e5e
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin: 10px;
  font-size: 2rem;
  :hover {
    background: #eba16f;
  }
`;

export default Recipe;
