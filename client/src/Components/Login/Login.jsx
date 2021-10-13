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
  }

  changeUsername(e) {
    this.setState({ username: e.target.value });
  }
  changePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <LoginPage>
        <form onSubmit={this.handleSubmit}>
          <Username
            username={this.state.username}
            handleChange={this.changeUsername}
          />
          <Password
            password={this.state.password}
            handleChange={this.changePassword}
          />
          <button className='modalButton' type='submit' value='Submit'>
            Submit
          </button>
        </form>
      </LoginPage>
    );
  }
}

const LoginPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 20px 70px;
  background: rgba(135, 195, 143, 0.5);
  color: rgb(34, 111, 84);
  font-size: 1.5rem;
  font-family: Georgia, Times, 'Times New Roman', serif;
`;

export default Login;
