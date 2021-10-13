import React from 'react';
import styled from 'styled-components';

class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientsString: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ ingredientsString: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state.ingredientsString);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <SearchTitle>Ingredients: </SearchTitle>
            <SearchBar
              type='text'
              name='ingredients'
              value={this.state.ingredientsString}
              onChange={this.handleChange}
              placeholder='Example: apples, flour, sugar'
            />
          </label>
          <StyledButton type='submit' value='Submit'>
            Submit
          </StyledButton>
        </form>
      </div>
    );
  }
}

const SearchTitle = styled.div`
  color: rgb(76, 59, 77);
`;
const SearchBar = styled.input`
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid rgb(76, 59, 77);
  border-radius: 5px;
  height: 50px;
  width: 80%;
  padding: 2px 20px;
  outline: 0;
  background-color: whitesmoke;
`;
const StyledButton = styled.button`
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  border-radius: 5px;
  height: 50px;
  width: 10%;
  padding: 2px 20px;
  outline: 0;
`;

export default IngredientForm;
