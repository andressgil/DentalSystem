import React from 'react';

import "./logo.css"

// @ts-ignore
import logo from "./logo.png"

function Logo(props) {

    const { size, showText } = props

    const style = {
        width: size,
        height: size
    }

    return (
        <div className='flex logo'>
            <img src={logo} style={style}></img>
            {showText ? <h1>Syden</h1> : null}
        </div >
    );
}

export default Logo;