import React from 'react'
import '../styles/main.scss'

const SIZE = ['btn__large', 'btn__medium'];

export const Button = ({
    children, buttonSize
}) => {
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return (
        <button className={`btn ${checkButtonSize}`}>{children}</button>
    );
};

export default Button