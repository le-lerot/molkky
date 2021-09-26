import React from 'react';
import classes from './Button.module.css';

const Button = ({ selected, value, onClick }) => {
    return (
        <button
            onClick={onClick}
            type='button'
            className={
                selected
                    ? `${classes.Button} ${classes.selected}`
                    : classes.Button
            }
        >
            {value}
        </button>
    );
};

export default Button;
