import { useState } from 'react';
import classes from './App.module.css';
import Game from './components/Game/Game';
import PlayerSelection from './components/PlayerSelection/PlayerSelection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    const [players, setPlayers] = useState([]);

    const handlePlayers = (selectedPlayers) => {
        setPlayers(selectedPlayers);
    };

    return (
        <div className={classes.App}>
            <Router>
                <Switch>
                    <Route
                        path='/game'
                        render={(props) => <Game players={players} />}
                    />
                    <Route
                        path='/'
                        render={(props) => (
                            <PlayerSelection
                                {...props}
                                addPlayers={handlePlayers}
                            />
                        )}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
