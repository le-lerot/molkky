import React from 'react';
import classes from './Game.module.css';

const Game = ({ currentPlayer }) => {
    return <div className={classes.Game}>{currentPlayer}</div>;
};

export default Game;
