import { useHistory } from 'react-router';
import classes from './WinnerBanner.module.css';

const WinnerBanner = ({ winner, onNewGame }) => {
    const history = useHistory();
    return (
        <div className={classes.WinnerPage}>
            <div className={classes.WinnerBanner}>
                <p>{winner} a gagné!</p>
                <button
                    onClick={() => {
                        history.push('/');
                    }}
                >
                    Menu Principal
                </button>
                <button
                    onClick={() => {
                        onNewGame();
                    }}
                >
                    Nouvelle Partie
                </button>
            </div>
        </div>
    );
};
export default WinnerBanner;
