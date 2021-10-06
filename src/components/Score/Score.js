import React from 'react';
import classes from './Score.module.css';

const Score = ({ game, players }) => {
    const result = game.reduce(
        function (acc, current) {
            const playerIndex = acc.findIndex(
                (a) => a.player === current.player
            );
            const newPlayerScore = acc[playerIndex].score + current.score;
            acc.splice(playerIndex, 1, {
                player: current.player,
                score: newPlayerScore,
            });
            return acc;
        },
        Array.from(players).map((player) => ({
            player: player.name,
            score: 0,
        }))
    );

    return (
        <table className={classes.Table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {result.map((round) => (
                    // <tr key={round.id}> is better
                    <tr key={round.player}>
                        <td>{round.player}</td>
                        <td>{round.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Score;
