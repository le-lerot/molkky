import React, { useState } from 'react';
import classes from './AddPlayer.module.css';

const AddPlayer = ({ addPlayer }) => {
    const [playerName, setPlayerName] = useState('');
    const handleChange = (e) => {
        setPlayerName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPlayer({
            name: playerName,
            selected: false,
        });
    };

    return (
        <div className={classes.AddPlayer}>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Nom'
                    onChange={handleChange}
                    value={playerName}
                />
                <button type='submit'>Ajouter</button>
            </form>
        </div>
    );
};

export default AddPlayer;
