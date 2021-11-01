import classes from './WinnerBanner.module.css';

const WinnerBanner = ({winner, onNewGame}) => {
    return (
        <div className={classes.WinnerPage}>
            <div className={classes.WinnerBanner}>
                <p>{winner} a gagné!</p>
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
}
export default WinnerBanner;
