import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomePage>
      <h2>Home</h2>
      <p>Welcome to Let's Eat!</p>
      <p>
        This is a simple meal suggestion application that will give you some
        meal ideas based on whatever ingredients you have lying around! Have a
        spare zucchini lying around the house? No worries. Let's make something
        to eat with it!
      </p>
      <p>
        Using this app is easy. Just type in each ingredient you want to cook
        with, and click submit! We'll return the best results we can find right
        back to you!
      </p>
      <p>
        This page runs on the{' '}
        <a href='https://spoonacular.com/food-api'>Spoonacular API</a>
      </p>
      <p>
        My <a href='https://github.com/ch987/'>Github</a>
      </p>
    </HomePage>
  );
};

const HomePage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 20px 70px;
  background: #5e5e5e;
  color: #fcfaf9;
  font-size: 1.5rem;
  font-family: Georgia, Times, 'Times New Roman', serif;

  a {
    text-decoration: none;
    color: #333333;
  }
`;

export default Home;
