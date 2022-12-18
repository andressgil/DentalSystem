import React from 'react';

import "./forms.css"

function Button(props) {

    const { children, type, onClick, style, size, padding } = props

    return (
        <button className={style + "-button"} type={type} onClick={onClick} size={size} padding={padding}>
            {children}
        </button>
    );
}

export default Button;