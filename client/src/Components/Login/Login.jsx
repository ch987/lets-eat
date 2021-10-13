import React from 'react';
import Username from './LoginComponents/Username.jsx';
import Password from './LoginComponents/Password.jsx';
import styled from 'styled-components';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeUsername(e) {
    this.setState({ username: e.target.value });
  }
  changePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <LoginPage>
        <StyledForm onSubmit={this.handleSubmit}>
          <LoginComponents>
            <Username
              username={this.state.username}
              handleChange={this.changeUsername}
            />
            <Password
              password={this.state.password}
              handleChange={this.changePassword}
            />
          </LoginComponents>
          <StyledButton type='submit' value='Submit'>
            Submit
          </StyledButton>
        </StyledForm>
      </LoginPage>
    );
  }
}

const LoginPage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 70px;
  background: rgba(135, 195, 143, 0.5);
  color: rgb(34, 111, 84);
  font-size: 1.5rem;
  font-family: Georgia, Times, 'Times New Roman', serif;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
`;
const StyledButton = styled.button`
  height: 75px;
  width: 75px;
`;
const LoginComponents = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;

export default Login;
