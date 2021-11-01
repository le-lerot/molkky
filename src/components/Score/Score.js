import React from 'react';
import classes from './Score.module.css';

const Score = ({ scoreBoard }) => {

    return (
        <table className={classes.Table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {scoreBoard.map((player) => (
                    // <tr key={round.id}> is better
                    <tr key={player.name}>
                        <td>{player.name}</td>
                        <td>{player.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Score;
