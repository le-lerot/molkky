import React from 'react';
import classes from './Game.module.css';

const Game = ({ players }) => {
    const player = Array.from(players).find((player) => player.current);
    return <div className={classes.Game}>{player.name}</div>;
};

export default Game;
