import { useState } from 'react';
import Button from '../Button/Button';
import Score from '../Score/Score';
import WinnerBanner from '../WinnerBanner/WinnerBanner';
import classes from './Board.module.css';

const BUTTONS = [
    [
        {
            value: 7,
        },
        {
            value: 9,
        },
        {
            value: 8,
        },
    ],
    [
        {
            value: 5,
        },
        {
            value: 11,
        },
        {
            value: 12,
        },
        {
            value: 6,
        },
    ],
    [
        {
            value: 3,
        },
        {
            value: 10,
        },
        {
            value: 4,
        },
    ],
    [
        {
            value: 1,
        },
        {
            value: 2,
        },
    ],
];

const Board = ({ onPlay, winner, scoreBoard, onNewGame}) => {
    const [selected, setSelected] = useState();

    const handleButtonSelect = (value) => {
        setSelected((prevState) => (prevState === value ? null : value));
    };

    return (
        <div className={classes.Board}>
            <div className={classes.Buttons}>
                {BUTTONS.map((row, index) => (
                    <div className={classes.Row} key={index}>
                        {row.map((button) => (
                            <Button
                                key={button.value}
                                value={button.value}
                                onClick={() => handleButtonSelect(button.value)}
                                selected={selected === button.value}
                            />
                        ))}
                    </div>
                ))}
                {winner && <WinnerBanner winner={winner} onNewGame={onNewGame} />}
            </div>
            <Score scoreBoard={scoreBoard} />
            <div className={classes.Action}>
                <button
                    onClick={() => {
                        onPlay(selected);
                        setSelected();
                    }}
                    disabled
                >
                    Annuler
                </button>
                <button
                    onClick={() => {
                        onPlay(selected);
                        setSelected();
                    }}
                    disabled={winner}
                >
                    Valider
                </button>
            </div> 
        </div>
    );
};

export default Board;
