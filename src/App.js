import Board from './components/Board/Board';
import Game from './components/Game/Game';
import classes from './App.module.css';
import { useState } from 'react';
import { shuffleArray } from './utils/helpers';

const players = [
    {
        name: 'Martin',
    },
    {
        name: 'Thibaut',
    },
    {
        name: 'Nicolas',
    },
    {
        name: 'Corentin',
    },
    {
        name: 'Benjamin',
    },
];

function App() {
    const roundPlayers = shuffleArray(players);
    const [currentPlayer, setCurrentPlayer] = useState(roundPlayers[0].name);
    const [game, setGame] = useState([]);

    const handleOnPlay = (value) => {
        const currentPlayerIndex = players.findIndex(
            (player) => player.name === currentPlayer
        );
        const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
        setGame([
            ...game,
            {
                player: currentPlayer,
                score: value,
            },
        ]);
        setCurrentPlayer(players[nextPlayerIndex].name);
    };

    return (
        <div className={classes.App}>
            <Game currentPlayer={currentPlayer} />
            <Board onPlay={handleOnPlay} game={game} players={players} />
        </div>
    );
}

export default App;
