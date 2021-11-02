import React from 'react';
import classes from './Header.module.css';

const Header = ({ currentPlayer }) => {
    return <div className={classes.Header}>{currentPlayer}</div>;
};

export default Header;
