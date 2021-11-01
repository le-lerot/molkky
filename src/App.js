import Board from './components/Board/Board';
import Game from './components/Game/Game';
import classes from './App.module.css';
import { useState } from 'react/cjs/react.development';
//import { shuffleArray } from './utils/helpers';

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

const initialScoreBoard = players.map(player => (
    {
        name: player.name,
        score: 0,
    }
))

function App() {
    const roundPlayers = players;
    const [currentPlayer, setCurrentPlayer] = useState(roundPlayers[0].name);
    // game (rename?) contains the current player and the current selected value
    const [game, setGame] = useState([]);
    // winner contains the name of the winner, empty if no winner yet
    const [winner, setWinner] = useState(null);
    // scoreBoard contains the list of players and their score
    const [scoreBoard, setScoreBoard] = useState(initialScoreBoard);

    const handleOnPlay = (value) => {
		let currentValue = value
        let gameOver = false
		if (value === undefined)
		{
			currentValue = 0
		}
        
        setGame([
            ...game,
            {
                player: currentPlayer,
                score: currentValue,
            },
        ]);

        const updatedScoreBoard = scoreBoard.map(player => {
            if (currentPlayer === player.name)
            {
                const updatedScore = player.score + currentValue
                if (updatedScore >= 50)
                {
                    setWinner(currentPlayer);
                    gameOver = true;
                    console.log(`GameOver: ${gameOver}`);
                }
                return {
                    ...player,
                    score: player.score + currentValue
                }
            }
            return player;
        })
        setScoreBoard(updatedScoreBoard);

        if (!gameOver)
        {
            const currentPlayerIndex = players.findIndex(
                (player) => player.name === currentPlayer
            );
            const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
            setCurrentPlayer(players[nextPlayerIndex].name);
        }
    };

    const handleOnNewGame = () => {
		setScoreBoard(initialScoreBoard);
        setWinner(null);
    }

    return (
        <div className={classes.App}>
            <Game currentPlayer={currentPlayer} />
            <Board onPlay={handleOnPlay} winner={winner} scoreBoard={scoreBoard} onNewGame={handleOnNewGame} />
        </div>
    );
}

export default App;
