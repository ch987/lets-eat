import React from 'react';

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
            <div>Ingredients: </div>
            <input
              type='text'
              name='ingredients'
              value={this.state.ingredientsString}
              onChange={this.handleChange}
              placeholder='Example: apples, flour, sugar'
            />
          </label>
          <button type='submit' value='Submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default IngredientForm;
