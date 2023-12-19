import React from 'react';
import heartLove from '../assets/svg/heartlove.svg';
import kiss from '../assets/jpg/kiss.jpg';
import diamond from '../assets/png/diamond.png';
import styles from './App.module.css';

const App = () => {
  return (
    <div>
      <h1 className={styles.header}>Hello World!!</h1>
      <figure>
        <img src={heartLove} alt="hearts"></img>
        <figcaption>SVG image of hearts</figcaption>
      </figure>
      <figure>
        <img src={kiss} alt="dragon"></img>
        <figcaption>JPG image of dragon</figcaption>
      </figure>
      <figure>
        <img src={diamond} alt="diamond"></img>
        <figcaption>PNG image of diamond</figcaption>
      </figure>
    </div>
  );
};

export default App;
