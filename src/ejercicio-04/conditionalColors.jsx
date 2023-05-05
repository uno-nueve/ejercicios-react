import React, { useState, useEffect } from 'react';

// ? Random color generator
function randomColor() {
    let randomNumber = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    let r = randomNumber(0, 255);
    let g = randomNumber(0, 255);
    let b = randomNumber(0, 255);
    return `rgb(${r},${g},${b})`
}

// ? Element styles
const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const baseStyle = {
    height: '255px',
    width: '255px',
    borderRadius: '37px',
    backgroundColor: '#000'
};

const randomStyle = {
    height: '255px',
    width: '255px',
    borderRadius: '37px',
    backgroundColor: randomColor()
}

// ? Elements to render
const BaseSquare = ({squareStyle, handleMouseEnter}) => {
    return (
        <div style={squareStyle} onMouseEnter={handleMouseEnter}></div>
    )
}

const RandomSquare = ({squareStyle, handleMouseLeave, handleDoubleClick}) => {
    return (
        <div style={squareStyle} onMouseLeave={handleMouseLeave} onDoubleClick={handleDoubleClick}></div>
    )
}

const ConditionalColors = () => {

    const [colors, setColors] = useState(0);
    console.log('initial state ' + colors)
    const handleMouseEnter = () => {
        setColors(1)
        console.log('mouse enter ' + colors)
    }

    const handleMouseLeave = () => {
        setColors(-1)
        console.log('mouse exit ' + colors)
    }

    const handleDoubleClick = () => {
        setColors(2)
        console.log('double click ' + colors)
    }

    let square;

    if (colors === 1) {
        square = <RandomSquare squareStyle={randomStyle} handleMouseLeave={handleMouseLeave} handleDoubleClick={handleDoubleClick}></RandomSquare>
    } else if (colors === 2) {
        square = <RandomSquare squareStyle={randomStyle}></RandomSquare>
    } else if (colors < 0) {
        square = <BaseSquare squareStyle={baseStyle} handleMouseEnter={handleMouseEnter}></BaseSquare>
    } else {
        square = <BaseSquare squareStyle={baseStyle} handleMouseEnter={handleMouseEnter}></BaseSquare>
    }

    return (
        <div style={containerStyle}>
            { square }
        </div>
    );
}

export default ConditionalColors;
