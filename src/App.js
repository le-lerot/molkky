import Board from './components/Board/Board';
import Game from './components/Game/Game';
import classes from './App.module.css';
import { useState } from 'react';

function App() {
    const [players, setPlayers] = useState([
        {
            name: 'Martin',
            current: true,
        },
        {
            name: 'Thibaut',
            current: false,
        },
        {
            name: 'Nicolas',
            current: false,
        },
        {
            name: 'Corentin',
            current: false,
        },
        {
            name: 'Benjamin',
            current: false,
        },
    ]);

    const [game, setGame] = useState([]);
    // console.log(game);

    const handleOnPlay = (value) => {
        const currentPlayerIndex = players.findIndex(
            (player) => player.current
        );
        let updatedPlayers = Array.from(players);
        updatedPlayers[currentPlayerIndex] = {
            ...updatedPlayers[currentPlayerIndex],
            current: false,
        };
        const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
        updatedPlayers[nextPlayerIndex] = {
            ...updatedPlayers[nextPlayerIndex],
            current: true,
        };
        setGame([
            ...game,
            {
                player: players[currentPlayerIndex].name,
                score: value,
            },
        ]);
        setPlayers(updatedPlayers);
    };

    console.log(game);

    return (
        <div className={classes.App}>
            <Game players={players} />
            <Board onPlay={handleOnPlay} />
        </div>
    );
}

export default App;
