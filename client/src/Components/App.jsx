import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './Main.jsx';
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import styled from 'styled-components';

const App = () => {
  return (
    <Router>
      <Container>
        <StyledHeader className='section'>
          <StyledTitle>
            <h1>Let's Eat!</h1>
          </StyledTitle>
          <StyledTitle>
            <h1>USERNAME</h1>
          </StyledTitle>
          <HeaderList>
            <HeaderLink to='/'>Home</HeaderLink>
            <HeaderLink to='/main'>Main</HeaderLink>
            <HeaderLink to='/login'>Login</HeaderLink>
          </HeaderList>
        </StyledHeader>

        <Switch>
          <Route exact path='/'>
            <StyledBody className='section main'>
              <Home />
            </StyledBody>
          </Route>
          <Route path='/main'>
            <StyledBody className='section main'>
              <Main />
            </StyledBody>
          </Route>
          <Route path='/login'>
            <StyledBody className='section main'>
              <Login />
            </StyledBody>
          </Route>
        </Switch>

        <StyledFooter className='section'>
          <a href='https://github.com/ch987/'>Github</a>
          <a href='https://www.linkedin.com/in/chrischung15/'>LinkedIn</a>
          <a href='https://spoonacular.com/food-api'>Spoonacular API</a>
        </StyledFooter>
      </Container>
    </Router>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .section {
    position: fixed;
    width: 100%;
    left: 0;
  }
  .main {
    width: 70%;
  }
`;
const StyledHeader = styled.div`
  top: 0;
  background-color: rgb(255, 120, 90);
  color: white;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const StyledTitle = styled.div`
  width: 30%;
  margin: 0 5%;
`;
const HeaderList = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const HeaderLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  :hover {
    color: rgb(76, 59, 77);
  }
`;
const StyledBody = styled.div`
  background-color: rgb(244, 240, 187);
  height: 75%;
  margin: 2% 15%;
  top: 10%;
`;
const StyledFooter = styled.div`
  bottom: 0;
  background-color: rgb(76, 59, 77);
  height: 10%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  color: white;
  font-size: 1rem;
  a {
    text-decoration: none;
    color: lightgrey;
  }
  a:hover {
    color: white;
  }
`;

export default App;
