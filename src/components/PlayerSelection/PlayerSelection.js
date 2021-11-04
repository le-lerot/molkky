import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AddPlayer from '../AddPlayer/AddPlayer';
import classes from './PlayerSelection.module.css';

const PlayerSelection = ({ addPlayers }) => {
    const history = useHistory();
    const [players, setPlayers] = useState([]);
    const [showAddPlayer, setShowAddPlayer] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('players')) {
            const existingPlayers = JSON.parse(localStorage.getItem('players'));
            setPlayers(existingPlayers);
        }
    }, []);

    const handleAddPlayer = (player) => {
        setPlayers((currentPlayers) => [...currentPlayers, player]);
        localStorage.setItem('players', JSON.stringify([...players, player]));
        setShowAddPlayer(false);
    };

    const handleRemovePlayer = (event, name) => {
        event.stopPropagation();
        const updatedPlayers = players.filter((player) => player.name !== name);
        setPlayers(updatedPlayers);
        localStorage.setItem('players', JSON.stringify(updatedPlayers));
    };

    const handleSelectPlayer = (event, name) => {
        event.stopPropagation();
        const updatedPlayers = players.map((player) => {
            if (player.name === name) {
                return {
                    ...player,
                    selected: !player.selected,
                };
            }
            return player;
        });
        setPlayers(updatedPlayers);
        localStorage.setItem('players', JSON.stringify(updatedPlayers));
    };

    return (
        <div>
            <h1 className={classes.title}>Sélectionnez les joueurs</h1>
            {players.length > 0 && (
                <ul className={classes.playerList}>
                    {players.map((player, index) => (
                        <li
                            key={index}
                            className={`${classes.playerListItem} ${
                                player.selected ? classes.selected : ''
                            }`}
                            onClick={(e) => handleSelectPlayer(e, player.name)}
                        >
                            {player.name}
                            <button
                                type='button'
                                className={classes.playerListItemButton}
                                onClick={(e) =>
                                    handleRemovePlayer(e, player.name)
                                }
                            >
                                x
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {showAddPlayer ? (
                <AddPlayer addPlayer={handleAddPlayer} />
            ) : (
                <button onClick={() => setShowAddPlayer(true)}>
                    Ajouter un joueur
                </button>
            )}
            {players.length > 1 && (
                <button
                    onClick={() => {
                        addPlayers(players.filter((player) => player.selected));
                        history.push('/game');
                    }}
                >
                    Démarrer la partie
                </button>
            )}
        </div>
    );
};

export default PlayerSelection;
