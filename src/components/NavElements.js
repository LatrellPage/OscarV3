import React, { useContext } from 'react';
import { NavContext } from "../context/NavContext";

const Nav = () => {
    const { state, dispatch } = useContext(NavContext);

    const navStyle = {
        height: '100%',
        width: '30%',
        display: 'flex',
        justifyContent: 'space-between',
    };

    const navElementStyle = (isHovered) => ({
        transition: '0.5s ease',
        fontSize: '0.9rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4px',
        padding: '5px',
        width: '25%',
        margin: 'auto',
        cursor: 'pointer',
        backgroundColor: isHovered ? '#dddddd94' : 'transparent',
    });

    return (
        <div style={navStyle}>
            {['Pc', 'Accessories', 'Discover', 'Shop'].map(item => (
                <div
                    style={navElementStyle(state.type === item)}
                    onMouseEnter={() => dispatch({ type: item })}
                    key={item}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}

export default Nav;
